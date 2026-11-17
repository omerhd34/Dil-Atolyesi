import { isTurkishLetterNameSpeechChunk } from "@/lib/lessonSpeakText";
import {
  getSpeechVoiceGender,
  pickSpeechVoiceForLang,
  type SpeechVoiceGender,
} from "@/lib/speechVoiceGender";

export {
  DEFAULT_SPEECH_VOICE_GENDER,
  getSpeechVoiceGender,
  setSpeechVoiceGender,
  SPEECH_VOICE_GENDERS,
  SPEECH_VOICE_GENDER_CHANGED_EVENT,
  type SpeechVoiceGender,
} from "@/lib/speechVoiceGender";

export const SPEECH_RATE_STORAGE_KEY = "pylmor-speech-rate";
export const SPEECH_RATE_CHANGED_EVENT = "pylmor:speech-rate-changed";
export const SPEECH_PLAYBACK_CHANGED_EVENT = "pylmor:speech-playback-changed";

export const DEFAULT_SPEECH_RATE = 1;

export const SPEECH_RATE_PRESETS = [0.5, 0.8, 1, 1.2, 1.5, 2] as const;

export type SpeechRatePreset = (typeof SPEECH_RATE_PRESETS)[number];

function canUseStorage(): boolean {
  return typeof window !== "undefined";
}

function presetFromNumber(value: number): SpeechRatePreset | null {
  const match = SPEECH_RATE_PRESETS.find(
    (preset) => Math.abs(preset - value) < 0.001,
  );
  return match ?? null;
}

function isSpeechRatePreset(value: number): value is SpeechRatePreset {
  return presetFromNumber(value) !== null;
}

const LEGACY_SPEECH_RATE_MAP: Readonly<
  Partial<Record<number, SpeechRatePreset>>
> = {
  0.3: 0.5,
  0.6: 0.8,
  0.9: 1,
  1.8: 2,
};

function resolveSpeechRatePreset(parsed: number): SpeechRatePreset | null {
  const preset = presetFromNumber(parsed);
  if (preset) {
    return preset;
  }
  const mapped = LEGACY_SPEECH_RATE_MAP[parsed];
  return mapped ?? null;
}

export function getSpeechRate(): number {
  if (!canUseStorage()) {
    return DEFAULT_SPEECH_RATE;
  }

  try {
    const raw = window.localStorage.getItem(SPEECH_RATE_STORAGE_KEY);
    if (!raw) {
      return DEFAULT_SPEECH_RATE;
    }
    const parsed = Number(raw);
    if (!Number.isFinite(parsed)) {
      return DEFAULT_SPEECH_RATE;
    }
    const resolved = resolveSpeechRatePreset(parsed);
    if (!resolved) {
      return DEFAULT_SPEECH_RATE;
    }
    if (resolved !== parsed) {
      window.localStorage.setItem(SPEECH_RATE_STORAGE_KEY, String(resolved));
    }
    return resolved;
  } catch {
    return DEFAULT_SPEECH_RATE;
  }
}

export function setSpeechRate(rate: number): void {
  if (!canUseStorage() || !isSpeechRatePreset(rate)) {
    return;
  }

  window.localStorage.setItem(SPEECH_RATE_STORAGE_KEY, String(rate));
  window.dispatchEvent(
    new CustomEvent(SPEECH_RATE_CHANGED_EVENT, { detail: { rate } }),
  );
}

export type SpeakTextCallbacks = {
  onEnd?: () => void;
  onCancel?: () => void;
};

export type SpeakDialogueLine = {
  text: string;
  gender?: SpeechVoiceGender;
  lang?: string;
};

let speakSession = 0;
let keepAliveTimer: ReturnType<typeof setInterval> | null = null;
let activeOnCancel: (() => void) | null = null;

type SpeechResumeState = {
  items: SpeakSequenceItem[];
  rate: number;
  itemIndex: number;
  chunkIndex: number;
  fingerprint: string;
  paused: boolean;
  completed: boolean;
};

type ActivePlaybackCursor = {
  fingerprint: string;
  items: SpeakSequenceItem[];
  rate: number;
  itemIndex: number;
  chunkIndex: number;
};

let resumeState: SpeechResumeState | null = null;
let activePlaybackCursor: ActivePlaybackCursor | null = null;

function clearKeepAlive(): void {
  if (keepAliveTimer === null) {
    return;
  }
  clearInterval(keepAliveTimer);
  keepAliveTimer = null;
}

function startKeepAlive(): void {
  clearKeepAlive();
  keepAliveTimer = setInterval(() => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) {
      return;
    }
    if (window.speechSynthesis.speaking && window.speechSynthesis.paused) {
      window.speechSynthesis.resume();
    }
  }, 8000);
}

function cancelActiveSpeech(invokeCancel: boolean): void {
  speakSession += 1;
  clearKeepAlive();
  const onCancel = activeOnCancel;
  activeOnCancel = null;
  if (typeof window !== "undefined" && "speechSynthesis" in window) {
    window.speechSynthesis.cancel();
  }
  if (invokeCancel) {
    onCancel?.();
  }
}

function splitSpeakChunks(text: string): string[] {
  const trimmed = text.trim();
  if (!trimmed) {
    return [];
  }
  const parts = trimmed.match(/[^.!?]+(?:[.!?]+|$)/g);
  if (!parts) {
    return [trimmed];
  }
  const chunks: string[] = [];
  let buffer = "";
  for (const part of parts) {
    const sentence = part.trim();
    if (!sentence) {
      continue;
    }
    const combined = buffer ? `${buffer} ${sentence}` : sentence;
    if (combined.length > 160 && buffer) {
      chunks.push(buffer);
      buffer = sentence;
    } else {
      buffer = combined;
    }
  }
  if (buffer) {
    chunks.push(buffer);
  }
  return chunks;
}

function pickVoiceForGender(
  voices: SpeechSynthesisVoice[],
  gender: SpeechVoiceGender,
  lang: string,
): SpeechSynthesisVoice | null {
  return pickSpeechVoiceForLang(voices, lang, gender);
}

type SpeakSequenceItem = {
  chunks: string[];
  gender: SpeechVoiceGender;
  lang: string;
};

function syncResumePosition(
  fingerprint: string | undefined,
  items: SpeakSequenceItem[],
  rate: number,
  itemIndex: number,
  chunkIndex: number,
  paused = false,
): void {
  if (!fingerprint) {
    return;
  }
  resumeState = {
    items,
    rate,
    itemIndex,
    chunkIndex,
    fingerprint,
    paused,
    completed: false,
  };
  activePlaybackCursor = {
    fingerprint,
    items,
    rate,
    itemIndex,
    chunkIndex,
  };
}

function speakChunkSequence(
  items: SpeakSequenceItem[],
  rate: number,
  voices: SpeechSynthesisVoice[],
  session: number,
  onEnd?: () => void,
  startItemIndex = 0,
  startChunkIndex = 0,
  resumeFingerprint?: string,
): void {
  const synth = window.speechSynthesis;
  let itemIndex = startItemIndex;
  let chunkIndex = startChunkIndex;

  if (resumeFingerprint) {
    activePlaybackCursor = {
      fingerprint: resumeFingerprint,
      items,
      rate,
      itemIndex,
      chunkIndex,
    };
  }

  const speakNext = () => {
    if (session !== speakSession) {
      return;
    }
    if (itemIndex >= items.length) {
      clearKeepAlive();
      activeOnCancel = null;
      if (resumeFingerprint) {
        resumeState = null;
        activePlaybackCursor = null;
        notifyPlaybackChanged();
      }
      onEnd?.();
      return;
    }
    const item = items[itemIndex];
    if (!item || chunkIndex >= item.chunks.length) {
      itemIndex += 1;
      chunkIndex = 0;
      speakNext();
      return;
    }
    syncResumePosition(resumeFingerprint, items, rate, itemIndex, chunkIndex);
    const chunk = item.chunks[chunkIndex] ?? "";
    chunkIndex += 1;
    const utterance = new SpeechSynthesisUtterance(chunk);
    utterance.lang = item.lang;
    const letterChunk =
      item.lang.toLowerCase().startsWith("tr") &&
      isTurkishLetterNameSpeechChunk(chunk);
    utterance.rate = letterChunk ? rate * 0.82 : rate;
    utterance.voice = pickVoiceForGender(voices, item.gender, item.lang);
    utterance.onend = () => {
      if (session !== speakSession) {
        return;
      }
      speakNext();
    };
    utterance.onerror = (event) => {
      if (session !== speakSession) {
        return;
      }
      const error = "error" in event ? String(event.error) : "";
      if (error === "interrupted" || error === "canceled") {
        return;
      }
      speakNext();
    };
    synth.speak(utterance);
  };

  startKeepAlive();
  speakNext();
}

function buildSpeakSequenceItems(
  lines: SpeakDialogueLine[],
  defaultLang: string,
): SpeakSequenceItem[] {
  const defaultGender = getSpeechVoiceGender();
  const items: SpeakSequenceItem[] = [];
  for (const line of lines) {
    const chunks = splitSpeakChunks(line.text);
    if (chunks.length === 0) {
      continue;
    }
    items.push({
      chunks,
      gender: line.gender ?? defaultGender,
      lang: line.lang ?? defaultLang,
    });
  }
  return items;
}

export type SpeakPlaybackOptions = {
  resumeKey?: string;
  fromBeginning?: boolean;
};

export type SpeechPlaybackSnapshot = {
  itemIndex: number;
  chunkIndex: number;
  canStepBack: boolean;
  canStepForward: boolean;
  hasProgress: boolean;
  paused: boolean;
  speaking: boolean;
};

function notifyPlaybackChanged(): void {
  if (typeof window === "undefined") {
    return;
  }
  window.dispatchEvent(new CustomEvent(SPEECH_PLAYBACK_CHANGED_EVENT));
}

function canStepBackInSequence(
  items: SpeakSequenceItem[],
  itemIndex: number,
  chunkIndex: number,
): boolean {
  return itemIndex > 0 || chunkIndex > 0;
}

function canStepForwardInSequence(
  items: SpeakSequenceItem[],
  itemIndex: number,
  chunkIndex: number,
): boolean {
  const item = items[itemIndex];
  if (!item) {
    return false;
  }
  if (chunkIndex < item.chunks.length - 1) {
    return true;
  }
  return itemIndex < items.length - 1;
}

function stepSequencePosition(
  items: SpeakSequenceItem[],
  itemIndex: number,
  chunkIndex: number,
  delta: number,
): { itemIndex: number; chunkIndex: number } | null {
  if (delta === 0) {
    return { itemIndex, chunkIndex };
  }
  let i = itemIndex;
  let c = chunkIndex;
  let remaining = Math.abs(delta);
  const direction = delta > 0 ? 1 : -1;

  while (remaining > 0) {
    if (direction < 0) {
      if (c > 0) {
        c -= 1;
        remaining -= 1;
        continue;
      }
      if (i > 0) {
        i -= 1;
        const prev = items[i];
        c = prev ? Math.max(0, prev.chunks.length - 1) : 0;
        remaining -= 1;
        continue;
      }
      return null;
    }
    const current = items[i];
    if (!current) {
      return null;
    }
    if (c < current.chunks.length - 1) {
      c += 1;
      remaining -= 1;
      continue;
    }
    if (i < items.length - 1) {
      i += 1;
      c = 0;
      remaining -= 1;
      continue;
    }
    return null;
  }
  return { itemIndex: i, chunkIndex: c };
}

export function speakSequenceItemsFromDialogue(
  lines: SpeakDialogueLine[],
  lang: string,
): SpeakSequenceItem[] {
  return buildSpeakSequenceItems(lines, lang);
}

export function canResumeSpeech(resumeKey: string): boolean {
  if (!resumeKey || !resumeState) {
    return false;
  }
  if (resumeState.fingerprint !== resumeKey) {
    return false;
  }
  return resumeState.paused && !resumeState.completed;
}

export function getSpeechPlaybackSnapshot(
  resumeKey: string,
): SpeechPlaybackSnapshot {
  const empty: SpeechPlaybackSnapshot = {
    itemIndex: 0,
    chunkIndex: 0,
    canStepBack: false,
    canStepForward: false,
    hasProgress: false,
    paused: false,
    speaking: false,
  };
  if (!resumeKey) {
    return empty;
  }
  const speaking =
    typeof window !== "undefined" &&
    "speechSynthesis" in window &&
    window.speechSynthesis.speaking;

  let items: SpeakSequenceItem[] | null = null;
  let itemIndex = 0;
  let chunkIndex = 0;
  let paused = false;

  if (activePlaybackCursor?.fingerprint === resumeKey) {
    items = activePlaybackCursor.items;
    itemIndex = activePlaybackCursor.itemIndex;
    chunkIndex = activePlaybackCursor.chunkIndex;
    paused =
      resumeState?.fingerprint === resumeKey ? resumeState.paused : !speaking;
  } else if (resumeState?.fingerprint === resumeKey) {
    items = resumeState.items;
    itemIndex = resumeState.itemIndex;
    chunkIndex = resumeState.chunkIndex;
    paused = resumeState.paused;
  }

  if (!items || items.length === 0) {
    return { ...empty, speaking };
  }

  return {
    itemIndex,
    chunkIndex,
    canStepBack: canStepBackInSequence(items, itemIndex, chunkIndex),
    canStepForward: canStepForwardInSequence(items, itemIndex, chunkIndex),
    hasProgress:
      itemIndex > 0 ||
      chunkIndex > 0 ||
      (speaking && resumeState?.fingerprint === resumeKey),
    paused,
    speaking,
  };
}

export function ensureSpeechPlaybackBookmark(
  resumeKey: string,
  items: SpeakSequenceItem[],
  rate?: number,
): void {
  if (!resumeKey || items.length === 0) {
    return;
  }
  if (
    resumeState?.fingerprint === resumeKey ||
    activePlaybackCursor?.fingerprint === resumeKey
  ) {
    return;
  }
  syncResumePosition(resumeKey, items, rate ?? getSpeechRate(), 0, 0, true);
}

export function adjustSpeechPlayback(
  resumeKey: string,
  delta: number,
): boolean {
  if (!resumeKey || delta === 0) {
    return false;
  }

  let items: SpeakSequenceItem[] | null = null;
  let itemIndex = 0;
  let chunkIndex = 0;
  let rate = getSpeechRate();

  if (activePlaybackCursor?.fingerprint === resumeKey) {
    items = activePlaybackCursor.items;
    itemIndex = activePlaybackCursor.itemIndex;
    chunkIndex = activePlaybackCursor.chunkIndex;
    rate = activePlaybackCursor.rate;
  } else if (resumeState?.fingerprint === resumeKey) {
    items = resumeState.items;
    itemIndex = resumeState.itemIndex;
    chunkIndex = resumeState.chunkIndex;
    rate = resumeState.rate;
  }

  if (!items) {
    return false;
  }

  const next = stepSequencePosition(items, itemIndex, chunkIndex, delta);
  if (!next) {
    return false;
  }

  const wasSpeaking =
    typeof window !== "undefined" &&
    "speechSynthesis" in window &&
    window.speechSynthesis.speaking;
  if (wasSpeaking) {
    if (activePlaybackCursor) {
      resumeState = {
        items: activePlaybackCursor.items,
        rate: activePlaybackCursor.rate,
        itemIndex: activePlaybackCursor.itemIndex,
        chunkIndex: activePlaybackCursor.chunkIndex,
        fingerprint: activePlaybackCursor.fingerprint,
        paused: true,
        completed: false,
      };
    }
    cancelActiveSpeech(true);
  }

  syncResumePosition(
    resumeKey,
    items,
    rate,
    next.itemIndex,
    next.chunkIndex,
    true,
  );
  notifyPlaybackChanged();
  return true;
}

export function resetSpeechPlayback(
  resumeKey: string,
  items: SpeakSequenceItem[],
): void {
  if (!resumeKey || items.length === 0) {
    return;
  }
  const wasSpeaking =
    typeof window !== "undefined" &&
    "speechSynthesis" in window &&
    window.speechSynthesis.speaking;
  if (wasSpeaking && activePlaybackCursor?.fingerprint === resumeKey) {
    pauseSpeaking();
  } else if (wasSpeaking) {
    cancelActiveSpeech(true);
  }
  syncResumePosition(resumeKey, items, getSpeechRate(), 0, 0, true);
  notifyPlaybackChanged();
}

function startSpeechSequence(
  items: SpeakSequenceItem[],
  lang: string,
  rate: number | undefined,
  callbacks?: SpeakTextCallbacks,
  playback?: SpeakPlaybackOptions,
): void {
  if (typeof window === "undefined") {
    return;
  }

  if (!("speechSynthesis" in window)) {
    callbacks?.onEnd?.();
    return;
  }

  if (items.length === 0) {
    activeOnCancel = null;
    callbacks?.onEnd?.();
    return;
  }

  const resolvedRate = rate ?? getSpeechRate();
  const synth = window.speechSynthesis;
  const fingerprint = playback?.resumeKey?.trim() || undefined;
  let startItemIndex = 0;
  let startChunkIndex = 0;

  if (!fingerprint) {
    resumeState = null;
    activePlaybackCursor = null;
  } else if (playback?.fromBeginning) {
    syncResumePosition(fingerprint, items, resolvedRate, 0, 0, false);
    startItemIndex = 0;
    startChunkIndex = 0;
  } else {
    const bookmark =
      resumeState?.fingerprint === fingerprint && !resumeState.completed
        ? resumeState
        : null;
    const hasBookmarkProgress =
      bookmark &&
      (bookmark.paused || bookmark.itemIndex > 0 || bookmark.chunkIndex > 0);
    if (bookmark && hasBookmarkProgress) {
      startItemIndex = bookmark.itemIndex;
      startChunkIndex = bookmark.chunkIndex;
      bookmark.rate = resolvedRate;
      bookmark.items = items;
      bookmark.paused = false;
      bookmark.completed = false;
    } else {
      syncResumePosition(fingerprint, items, resolvedRate, 0, 0, false);
      startItemIndex = 0;
      startChunkIndex = 0;
    }
  }

  cancelActiveSpeech(true);
  const session = speakSession;
  activeOnCancel = callbacks?.onCancel ?? null;

  const start = (voices: SpeechSynthesisVoice[]) => {
    if (session !== speakSession) {
      return;
    }
    speakChunkSequence(
      items,
      resolvedRate,
      voices,
      session,
      callbacks?.onEnd,
      startItemIndex,
      startChunkIndex,
      fingerprint,
    );
  };

  const voices = synth.getVoices();
  if (voices.length > 0) {
    window.setTimeout(() => start(voices), 0);
    return;
  }

  synth.addEventListener(
    "voiceschanged",
    () => {
      window.setTimeout(() => start(synth.getVoices()), 0);
    },
    { once: true },
  );
}

export function speakText(
  text: string,
  lang = "en-US",
  rate?: number,
  callbacks?: SpeakTextCallbacks,
  playback?: SpeakPlaybackOptions,
): void {
  startSpeechSequence(
    buildSpeakSequenceItems([{ text, lang }], lang),
    lang,
    rate,
    callbacks,
    playback,
  );
}

export function speakDialogue(
  lines: SpeakDialogueLine[],
  lang = "en-US",
  rate?: number,
  callbacks?: SpeakTextCallbacks,
  playback?: SpeakPlaybackOptions,
): void {
  startSpeechSequence(
    buildSpeakSequenceItems(lines, lang),
    lang,
    rate,
    callbacks,
    playback,
  );
}

/** Oynatmayı keser; duraklama konumu resumeKey ile saklanır. */
export function pauseSpeaking(): void {
  if (activePlaybackCursor) {
    resumeState = {
      items: activePlaybackCursor.items,
      rate: activePlaybackCursor.rate,
      itemIndex: activePlaybackCursor.itemIndex,
      chunkIndex: activePlaybackCursor.chunkIndex,
      fingerprint: activePlaybackCursor.fingerprint,
      paused: true,
      completed: false,
    };
  } else if (resumeState) {
    resumeState.paused = true;
    resumeState.completed = false;
  }
  cancelActiveSpeech(true);
  notifyPlaybackChanged();
}

export function stopSpeaking(): void {
  resumeState = null;
  activePlaybackCursor = null;
  cancelActiveSpeech(true);
  notifyPlaybackChanged();
}
