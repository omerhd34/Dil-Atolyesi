import {
  clientStorageEvent,
  clientStorageKey,
  migrateLocalStorageKey,
} from "@/lib/clientStorageKeys";

const SPEECH_VOICE_GENDER_SUFFIX = "speech-voice-gender";
export const SPEECH_VOICE_GENDER_STORAGE_KEY = clientStorageKey(
  SPEECH_VOICE_GENDER_SUFFIX,
);
export const SPEECH_VOICE_GENDER_CHANGED_EVENT = clientStorageEvent(
  "speech-voice-gender-changed",
);

export const SPEECH_VOICE_GENDERS = ["female", "male"] as const;

export type SpeechVoiceGender = (typeof SPEECH_VOICE_GENDERS)[number];

export const DEFAULT_SPEECH_VOICE_GENDER: SpeechVoiceGender = "female";

const FEMALE_VOICE_PATTERN =
  /female|woman|girl|samantha|karen|victoria|zira|susan|jenny|aria|natalie|linda|heather|moira|tessa|fiona|serena|veena|hazel|emma|lisa|sarah|kate|anna|amy|julie|laura|joanna|kimberly|ivy|salli|nicole|penelope|raveena|aditi|niamh|marie|sonia|libby|mia|hannah|olivia|freya|kathy|allison|ava|jane|michelle|serena|emel|yelda/i;

const MALE_VOICE_PATTERN =
  /male|man|boy|daniel|david|mark|james|george|ryan|guy|thomas|richard|alex|fred|benjamin|brian|bruce|bobby|eddie|justin|kevin|matthew|michael|liam|arthur|gordon|lee|tom|william|nathan|sean|stephen|simon|paul|colin|craig|duncan|geraint|hugh|iain|oliver|roderick|aaron|nick|jason|tony|john|peter|chris|eric|frank|tolga|ahmet/i;

function canUseStorage(): boolean {
  return typeof window !== "undefined";
}

function isSpeechVoiceGender(value: string): value is SpeechVoiceGender {
  return (SPEECH_VOICE_GENDERS as readonly string[]).includes(value);
}

export function classifySpeechVoiceGender(
  voiceName: string,
  voiceUri = "",
): SpeechVoiceGender | null {
  const name = `${voiceName} ${voiceUri}`.toLowerCase();
  if (FEMALE_VOICE_PATTERN.test(name)) {
    return "female";
  }
  if (MALE_VOICE_PATTERN.test(name)) {
    return "male";
  }
  return null;
}

function voiceMatchesLocalePrefix(
  voice: SpeechSynthesisVoice,
  localePrefix: string,
): boolean {
  return voice.lang.toLowerCase().startsWith(localePrefix.toLowerCase());
}

function isEnglishVoice(voice: SpeechSynthesisVoice): boolean {
  return voiceMatchesLocalePrefix(voice, "en");
}

function voiceQualityScore(voice: SpeechSynthesisVoice): number {
  const name = voice.name.toLowerCase();
  let score = 0;
  if (/google|microsoft/i.test(name)) {
    score += 4;
  }
  if (/natural|neural|online/i.test(name)) {
    score += 2;
  }
  if (voice.localService) {
    score += 1;
  }
  return score;
}

function localePreferenceScore(
  voice: SpeechSynthesisVoice,
  lang: string,
): number {
  const target = lang.trim().toLowerCase();
  const voiceLang = voice.lang.toLowerCase();
  if (voiceLang === target) {
    return 3;
  }
  const base = localePrefixFromLang(lang);
  if (voiceLang.startsWith(`${base}-`)) {
    return 2;
  }
  if (voiceLang.startsWith(base)) {
    return 1;
  }
  return 0;
}

function compareVoices(
  a: { voice: SpeechSynthesisVoice; quality: number },
  b: { voice: SpeechSynthesisVoice; quality: number },
  lang: string,
): number {
  const qualityDiff = b.quality - a.quality;
  if (qualityDiff !== 0) {
    return qualityDiff;
  }
  return (
    localePreferenceScore(b.voice, lang) - localePreferenceScore(a.voice, lang)
  );
}

function localePrefixFromLang(lang: string): string {
  const normalized = lang.trim().toLowerCase();
  if (!normalized) {
    return "en";
  }
  const base = normalized.split("-")[0];
  return base || "en";
}

export function pickSpeechVoiceForLang(
  voices: SpeechSynthesisVoice[],
  lang: string,
  gender: SpeechVoiceGender,
): SpeechSynthesisVoice | null {
  const localePrefix = localePrefixFromLang(lang);
  const forLocale = voices.filter((voice) =>
    voiceMatchesLocalePrefix(voice, localePrefix),
  );
  if (forLocale.length === 0) {
    return null;
  }

  const scored = forLocale.map((voice) => ({
    voice,
    classified: classifySpeechVoiceGender(voice.name, voice.voiceURI),
    quality: voiceQualityScore(voice),
  }));

  const matching = scored
    .filter((entry) => entry.classified === gender)
    .sort((a, b) => compareVoices(a, b, lang));

  if (matching.length > 0) {
    return matching[0]?.voice ?? null;
  }

  const oppositeGender: SpeechVoiceGender =
    gender === "female" ? "male" : "female";
  const withoutOpposite = scored
    .filter((entry) => entry.classified !== oppositeGender)
    .sort((a, b) => compareVoices(a, b, lang));

  if (withoutOpposite.length > 0) {
    return withoutOpposite[0]?.voice ?? null;
  }

  const fallback = [...scored].sort((a, b) => compareVoices(a, b, lang));
  return fallback[0]?.voice ?? null;
}

export function pickEnglishSpeechVoice(
  voices: SpeechSynthesisVoice[],
  gender: SpeechVoiceGender,
): SpeechSynthesisVoice | null {
  return pickSpeechVoiceForLang(voices, "en", gender);
}

export function getSpeechVoiceGender(): SpeechVoiceGender {
  if (!canUseStorage()) {
    return DEFAULT_SPEECH_VOICE_GENDER;
  }

  try {
    const raw = window.localStorage.getItem(
      migrateLocalStorageKey(SPEECH_VOICE_GENDER_SUFFIX),
    );
    if (!raw || !isSpeechVoiceGender(raw)) {
      return DEFAULT_SPEECH_VOICE_GENDER;
    }
    return raw;
  } catch {
    return DEFAULT_SPEECH_VOICE_GENDER;
  }
}

export function setSpeechVoiceGender(gender: SpeechVoiceGender): void {
  if (!canUseStorage() || !isSpeechVoiceGender(gender)) {
    return;
  }

  window.localStorage.setItem(
    migrateLocalStorageKey(SPEECH_VOICE_GENDER_SUFFIX),
    gender,
  );
  window.dispatchEvent(
    new CustomEvent(SPEECH_VOICE_GENDER_CHANGED_EVENT, { detail: { gender } }),
  );
}
