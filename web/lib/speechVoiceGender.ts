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
  /female|woman|girl|samantha|karen|victoria|zira|susan|jenny|aria|natalie|linda|heather|moira|tessa|fiona|serena|veena|hazel|emma|lisa|sarah|kate|anna|amy|julie|laura|joanna|kimberly|ivy|salli|nicole|penelope|raveena|aditi|niamh|marie|sonia|libby|mia|hannah|olivia|freya|kathy|allison|ava|jane|michelle|serena|emel|yelda|zeynep|ay[sş]e|aysel|filiz|seda|deniz|ece|defne|burcu|selin/i;

const MALE_VOICE_PATTERN =
  /male|man|boy|daniel|david|mark|james|george|ryan|guy|thomas|richard|alex|fred|benjamin|brian|bruce|bobby|eddie|justin|kevin|matthew|michael|liam|arthur|gordon|lee|tom|william|nathan|sean|stephen|simon|paul|colin|craig|duncan|geraint|hugh|iain|oliver|roderick|aaron|nick|jason|tony|john|peter|chris|eric|frank|tolga|ahmet/i;

function canUseStorage(): boolean {
  return typeof window !== "undefined";
}

function isSpeechVoiceGender(value: string): value is SpeechVoiceGender {
  return (SPEECH_VOICE_GENDERS as readonly string[]).includes(value);
}

function resolveStoredGender(raw: string | null): SpeechVoiceGender {
  if (!raw) {
    return DEFAULT_SPEECH_VOICE_GENDER;
  }
  if (isSpeechVoiceGender(raw)) {
    return raw;
  }
  if (raw.endsWith("-male")) {
    return "male";
  }
  if (raw.endsWith("-female")) {
    return "female";
  }
  return DEFAULT_SPEECH_VOICE_GENDER;
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

function turkishFemaleVoiceBoost(voice: SpeechSynthesisVoice): number {
  const label = `${voice.name} ${voice.voiceURI}`.toLowerCase();
  let boost = 0;
  if (/emel|yelda|turkish.*female|türkçe.*kadın/i.test(label)) {
    boost += 10;
  }
  if (/natural|neural|online/i.test(label)) {
    boost += 4;
  }
  if (!voice.localService) {
    boost += 2;
  }
  return boost;
}

function localeGenderQualityBoost(
  voice: SpeechSynthesisVoice,
  lang: string,
  gender: SpeechVoiceGender,
): number {
  if (isTurkishSpeechLocale(lang) && gender === "female") {
    if (!voiceMatchesLocalePrefix(voice, "tr")) {
      return 0;
    }
    return turkishFemaleVoiceBoost(voice);
  }
  return 0;
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

function isTurkishSpeechLocale(lang: string): boolean {
  return localePrefixFromLang(lang) === "tr";
}

function isEnglishSpeechLocale(lang: string): boolean {
  return localePrefixFromLang(lang) === "en";
}

function isLessonSpeechLocaleLocked(lang: string): boolean {
  return isTurkishSpeechLocale(lang) || isEnglishSpeechLocale(lang);
}

function oppositeSpeechVoiceGender(
  gender: SpeechVoiceGender,
): SpeechVoiceGender {
  return gender === "female" ? "male" : "female";
}

type ScoredSpeechVoice = {
  voice: SpeechSynthesisVoice;
  classified: SpeechVoiceGender | null;
  quality: number;
};

function scoreSpeechVoices(
  voices: SpeechSynthesisVoice[],
  lang: string,
  gender: SpeechVoiceGender,
): ScoredSpeechVoice[] {
  return voices.map((voice) => ({
    voice,
    classified: classifySpeechVoiceGender(voice.name, voice.voiceURI),
    quality:
      voiceQualityScore(voice) + localeGenderQualityBoost(voice, lang, gender),
  }));
}

function sortScoredVoices(
  pool: ScoredSpeechVoice[],
  lang: string,
): ScoredSpeechVoice[] {
  return [...pool].sort((a, b) => compareVoices(a, b, lang));
}

function compareScoredVoicesWithLocaleBias(
  a: ScoredSpeechVoice,
  b: ScoredSpeechVoice,
  lang: string,
): number {
  const localeDiff =
    localePreferenceScore(b.voice, lang) - localePreferenceScore(a.voice, lang);
  if (localeDiff !== 0) {
    return localeDiff;
  }
  return compareVoices(a, b, lang);
}

function pickVoiceWithGender(
  pool: ScoredSpeechVoice[],
  gender: SpeechVoiceGender,
  lang: string,
): SpeechSynthesisVoice | null {
  const matching = sortScoredVoices(
    pool.filter((entry) => entry.classified === gender),
    lang,
  );
  return matching[0]?.voice ?? null;
}

function pickVoiceAvoidingOppositeGender(
  pool: ScoredSpeechVoice[],
  gender: SpeechVoiceGender,
  lang: string,
): SpeechSynthesisVoice | null {
  const oppositeGender = oppositeSpeechVoiceGender(gender);
  const neutral = sortScoredVoices(
    pool.filter((entry) => entry.classified !== oppositeGender),
    lang,
  );
  return neutral[0]?.voice ?? null;
}

export function pickSpeechVoiceForLang(
  voices: SpeechSynthesisVoice[],
  lang: string,
  gender: SpeechVoiceGender,
): SpeechSynthesisVoice | null {
  if (voices.length === 0) {
    return null;
  }

  const localePrefix = localePrefixFromLang(lang);
  const scored = scoreSpeechVoices(voices, lang, gender);
  const forLocale = scored.filter((entry) =>
    voiceMatchesLocalePrefix(entry.voice, localePrefix),
  );

  const fromLocaleWithGender = pickVoiceWithGender(forLocale, gender, lang);
  if (fromLocaleWithGender) {
    return fromLocaleWithGender;
  }

  const lessonLocaleLocked = isLessonSpeechLocaleLocked(lang);

  if (!lessonLocaleLocked) {
    const fromAnyLocaleWithGender = [...scored]
      .filter((entry) => entry.classified === gender)
      .sort((a, b) => compareScoredVoicesWithLocaleBias(a, b, lang));
    if (fromAnyLocaleWithGender.length > 0) {
      return fromAnyLocaleWithGender[0]?.voice ?? null;
    }
  }

  const fromLocaleNeutral = pickVoiceAvoidingOppositeGender(
    forLocale,
    gender,
    lang,
  );
  if (fromLocaleNeutral) {
    return fromLocaleNeutral;
  }

  if (lessonLocaleLocked && forLocale.length > 0) {
    return sortScoredVoices(forLocale, lang)[0]?.voice ?? null;
  }

  return (
    pickVoiceAvoidingOppositeGender(scored, gender, lang) ??
    sortScoredVoices(scored, lang)[0]?.voice ??
    null
  );
}

export function pickEnglishSpeechVoice(
  voices: SpeechSynthesisVoice[],
  gender: SpeechVoiceGender,
): SpeechSynthesisVoice | null {
  return pickSpeechVoiceForLang(voices, "en", gender);
}

export function getBrowserSpeechVoices(): SpeechSynthesisVoice[] {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) {
    return [];
  }
  return window.speechSynthesis.getVoices();
}

export function hasTurkishFemaleSpeechVoice(
  voices: SpeechSynthesisVoice[],
): boolean {
  return voices.some(
    (voice) =>
      voiceMatchesLocalePrefix(voice, "tr") &&
      classifySpeechVoiceGender(voice.name, voice.voiceURI) === "female",
  );
}

export function warmSpeechSynthesisVoices(
  onReady?: (voices: SpeechSynthesisVoice[]) => void,
): () => void {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) {
    onReady?.([]);
    return () => {};
  }

  const synth = window.speechSynthesis;
  const emit = () => onReady?.(synth.getVoices());

  emit();
  synth.addEventListener("voiceschanged", emit);

  const retryDelaysMs = [80, 250, 750, 2000];
  const timers = retryDelaysMs.map((delay) => window.setTimeout(emit, delay));

  return () => {
    synth.removeEventListener("voiceschanged", emit);
    for (const id of timers) {
      window.clearTimeout(id);
    }
  };
}

export function getSpeechVoiceGender(): SpeechVoiceGender {
  if (!canUseStorage()) {
    return DEFAULT_SPEECH_VOICE_GENDER;
  }

  const storageKey = migrateLocalStorageKey(SPEECH_VOICE_GENDER_SUFFIX);

  try {
    const raw = window.localStorage.getItem(storageKey);
    const gender = resolveStoredGender(raw);
    if (raw !== gender) {
      window.localStorage.setItem(storageKey, gender);
    }
    return gender;
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
