import type { SpeakDialogueLine } from "@/lib/speakText";

const TURKISH_CHAR = /[çğıöşüÇĞİÖŞÜ]/;
const BOLD_SEGMENT = /\*\*([^*]+)\*\*/;
const QUOTED_ENGLISH =
  /[''‚`]([a-zA-Z][a-zA-Z'’\-]*(?:\s+[a-zA-Z][a-zA-Z'’\-]*)*)[''‚`]/g;

type LessonSpeakLang = "tr-TR" | "en-US";

export type LessonSpeakSegment = {
  text: string;
  lang: LessonSpeakLang;
};

const TURKISH_LATIN_HINT =
  /\b(harfleri|harfi|harfler|kelime|kelimeler|ünlü|ünsüz|olarak|için|veya|ise|gibi|denir|olan|temel|önemli|oynar|kalan|dikkat|bölüm|örneğin|kelimesinde|kelimelerinde|görevi|görür|özeldir|genellikle|kullanılırken|sonunda|içinde|sesi|verebilir|farklı|yaygın|örneklerindendir|kurala|sahiptir|ancak|çoğu|zaman|tanımak|adımlarından|biridir|karşılık|gelir|duyabilirsin|örnektir|istisnaları|unutma|gruba|ayrılır|oluşur|oluşmasında|okunur|okunabilir|oluşturur|harf|harften|harflerine|devam|inceleyeceğiz)\b/i;

function stripEnglishQuotes(value: string): string {
  return value.replace(/^[''‚`]|[''‚`]$/g, "").trim();
}

function isPhoneticNotation(value: string): boolean {
  return /^\/[^/]+\/$/.test(value.trim());
}

const TURKISH_DIGRAPH_LABELS = /^(sh|ch|th|ph|wh)$/i;

function normalizeLessonTurkishSpeech(value: string): string {
  let text = value.replace(/\/([^/]+)\//g, "$1").replace(/\s*\/\s*/g, ", ");
  text = text.replace(/\b[A-Z](?:\s*,\s*[A-Z])+(?:\s+ve\s+[A-Z])?\b/g, (list) =>
    list.replace(/\s*,\s*/g, "; "),
  );
  text = text.replace(/\b[a-z]{1,3}(?:\s*,\s*[a-z]{1,3})+\b/g, (list) =>
    list.split(/\s*,\s*/).every((part) => TURKISH_DIGRAPH_LABELS.test(part))
      ? list.replace(/\s*,\s*/g, "; ")
      : list,
  );
  return text;
}

function normalizeEnglishSpeech(value: string): string {
  const stripped = stripEnglishQuotes(value.trim());
  return stripped.replace(/\s*\/\s*/g, ", ");
}

function isDigitsOnly(value: string): boolean {
  return /^\d+$/.test(value.trim());
}

function isLatinLetterNameOnly(value: string): boolean {
  const trimmed = stripEnglishQuotes(value.trim());
  if (/^[A-Za-z]$/.test(trimmed)) {
    return true;
  }
  if (/^[A-Za-z](?:\s*,\s*[A-Za-z])*(?:\s+ve\s+[A-Za-z])?$/i.test(trimmed)) {
    return true;
  }
  const tokens = trimmed
    .split(/\s*,\s*/)
    .map((part) => part.trim())
    .filter(Boolean);
  if (
    tokens.length >= 2 &&
    tokens.every((token) => /^[a-z]{1,3}$/i.test(token))
  ) {
    return true;
  }
  return false;
}

function isLikelyEnglishLatin(value: string): boolean {
  const trimmed = stripEnglishQuotes(value.trim());
  if (!trimmed || TURKISH_CHAR.test(trimmed)) {
    return false;
  }
  if (isDigitsOnly(trimmed)) {
    return false;
  }
  if (isLatinLetterNameOnly(trimmed) || isPhoneticNotation(trimmed)) {
    return false;
  }
  if (TURKISH_LATIN_HINT.test(trimmed)) {
    return false;
  }
  if (/^[A-Z]{2,6}$/.test(trimmed) && !TURKISH_DIGRAPH_LABELS.test(trimmed)) {
    return true;
  }
  if (
    /^[a-z][a-z'’\-]{1,}(?:\s*,\s*[a-z][a-z'’\-]*)*$/i.test(trimmed) &&
    !isLatinLetterNameOnly(trimmed)
  ) {
    return true;
  }
  const words = trimmed.split(/\s+/).filter(Boolean);
  if (
    words.length > 0 &&
    words.every((word) => /^[A-Za-z][A-Za-z'’\-]*$/.test(word))
  ) {
    if (words.every((word) => word.length === 1)) {
      return false;
    }
    return words.length <= 6;
  }
  return false;
}

function expandBoldSegment(inner: string): LessonSpeakSegment[] {
  const raw = inner.trim();
  if (!raw) {
    return [];
  }

  const digraphPrefix = raw.match(/^([A-Z]{2,5})\s+(.+)$/);
  if (digraphPrefix && TURKISH_LATIN_HINT.test(digraphPrefix[2] ?? "")) {
    return [
      {
        text: `${digraphPrefix[1] ?? ""} ${digraphPrefix[2]?.trim() ?? ""}`,
        lang: "tr-TR",
      },
    ];
  }

  if (
    TURKISH_CHAR.test(raw) ||
    isDigitsOnly(raw) ||
    !isLikelyEnglishLatin(raw)
  ) {
    return [
      {
        text: normalizeLessonTurkishSpeech(raw),
        lang: "tr-TR",
      },
    ];
  }

  return [{ text: normalizeEnglishSpeech(raw), lang: "en-US" }];
}

function appendSegment(
  segments: LessonSpeakSegment[],
  text: string,
  lang: LessonSpeakLang,
): void {
  if (!text.trim()) {
    return;
  }
  const last = segments[segments.length - 1];
  if (last && last.lang === lang) {
    last.text = `${last.text}${text}`;
    return;
  }
  segments.push({ text, lang });
}

function parsePlainTextPart(
  part: string,
  segments: LessonSpeakSegment[],
): void {
  if (!part) {
    return;
  }

  let lastIndex = 0;
  for (const match of part.matchAll(QUOTED_ENGLISH)) {
    const index = match.index ?? 0;
    const before = part.slice(lastIndex, index);
    appendSegment(segments, normalizeLessonTurkishSpeech(before), "tr-TR");
    appendSegment(segments, normalizeEnglishSpeech(match[1] ?? ""), "en-US");
    lastIndex = index + match[0].length;
  }
  appendSegment(
    segments,
    normalizeLessonTurkishSpeech(part.slice(lastIndex)),
    "tr-TR",
  );
}

export function parseLessonSpeakSegments(source: string): LessonSpeakSegment[] {
  const parts = source.split(BOLD_SEGMENT);
  const segments: LessonSpeakSegment[] = [];

  for (let index = 0; index < parts.length; index += 1) {
    const part = parts[index] ?? "";
    if (index % 2 === 0) {
      parsePlainTextPart(part, segments);
      continue;
    }
    for (const piece of expandBoldSegment(part)) {
      appendSegment(segments, piece.text, piece.lang);
    }
  }

  return segments;
}

function segmentsToDialogueLines(
  segments: LessonSpeakSegment[],
): SpeakDialogueLine[] {
  return segments.map((segment) => ({
    text: segment.text,
    lang: segment.lang,
  }));
}

export function lessonTextToSpeakLines(source: string): SpeakDialogueLine[] {
  return segmentsToDialogueLines(parseLessonSpeakSegments(source));
}

export function lessonSpeakResumeKey(source: string): string {
  return lessonTextToSpeakLines(source)
    .map((line) => `${line.lang ?? ""}\n${line.text}`)
    .join("\n---\n");
}

export function lessonParagraphsToSpeakLines(
  paragraphs: string[],
): SpeakDialogueLine[] {
  const segments: LessonSpeakSegment[] = [];
  for (const paragraph of paragraphs) {
    for (const segment of parseLessonSpeakSegments(paragraph)) {
      appendSegment(segments, segment.text, segment.lang);
    }
  }
  return segmentsToDialogueLines(segments);
}

export function lessonTextToSpeech(text: string): string {
  return text
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/\s*\/\s*/g, ", ")
    .trim();
}

export function lessonParagraphsToSpeech(paragraphs: string[]): string {
  return paragraphs
    .map((paragraph) => lessonTextToSpeech(paragraph))
    .filter((paragraph) => paragraph.length > 0)
    .join(" ");
}

export function isTurkishLessonSpeech(lang: string): boolean {
  return lang.trim().toLowerCase().startsWith("tr");
}

/** Tek başına harf / harf listesi parçası — telaffuzu yavaşlatılır. */
export function isTurkishLetterNameSpeechChunk(chunk: string): boolean {
  const trimmed = chunk.trim();
  if (!trimmed) {
    return false;
  }
  if (isLatinLetterNameOnly(trimmed)) {
    return true;
  }
  return /^[A-Za-z](?:\s*;\s*[A-Za-z])*(?:\s+ve\s+[A-Za-z])?[.!?]?$/i.test(
    trimmed,
  );
}
