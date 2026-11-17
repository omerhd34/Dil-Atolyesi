import type { SpeakDialogueLine } from "@/lib/speakText";

const BOLD_SEGMENT = /\*\*([^*]+)\*\*/;
const EXPLICIT_ENGLISH = /\\([^\\]+)\\/g;
const QUOTED_ENGLISH =
  /[''‚`]([a-zA-Z][a-zA-Z'’\-]*(?:\s+[a-zA-Z][a-zA-Z'’\-]*)*)[''‚`]/g;

type LessonSpeakLang = "tr-TR" | "en-US";

export type LessonSpeakSegment = {
  text: string;
  lang: LessonSpeakLang;
};

function stripEnglishQuotes(value: string): string {
  return value.replace(/^[''‚`]|[''‚`]$/g, "").trim();
}

function stripPhoneticSlashes(value: string): string {
  return value.replace(/(?<!\/)\/([^/]+)\/(?!\/)/g, "$1");
}

function normalizeLessonTurkishSpeech(value: string): string {
  let text = stripPhoneticSlashes(value).replace(/\s*\/\s*/g, ", ");
  text = text.replace(/\b[A-Z](?:\s*,\s*[A-Z])+(?:\s+ve\s+[A-Z])?\b/g, (list) =>
    list.replace(/\s*,\s*/g, "; "),
  );
  return text;
}

function normalizeEnglishSpeech(value: string): string {
  const stripped = stripEnglishQuotes(value.trim());
  return stripped.replace(/\s*\/\s*/g, ", ");
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

function expandBoldSegment(inner: string): LessonSpeakSegment[] {
  const raw = inner.trim();
  if (!raw) {
    return [];
  }

  if (EXPLICIT_ENGLISH.test(raw)) {
    EXPLICIT_ENGLISH.lastIndex = 0;
    const nested: LessonSpeakSegment[] = [];
    parseInlineSpeechMarkers(raw, nested);
    return nested;
  }

  return [
    {
      text: normalizeLessonTurkishSpeech(raw),
      lang: "tr-TR",
    },
  ];
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

function parseQuotedEnglishTurkishPart(
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

function parseInlineSpeechMarkers(
  part: string,
  segments: LessonSpeakSegment[],
): void {
  if (!part) {
    return;
  }

  let lastIndex = 0;
  for (const match of part.matchAll(EXPLICIT_ENGLISH)) {
    const index = match.index ?? 0;
    const before = part.slice(lastIndex, index);
    parseQuotedEnglishTurkishPart(before, segments);
    appendSegment(segments, normalizeEnglishSpeech(match[1] ?? ""), "en-US");
    lastIndex = index + match[0].length;
  }
  parseQuotedEnglishTurkishPart(part.slice(lastIndex), segments);
}

export function parseLessonSpeakSegments(source: string): LessonSpeakSegment[] {
  const parts = source.split(BOLD_SEGMENT);
  const segments: LessonSpeakSegment[] = [];

  for (let index = 0; index < parts.length; index += 1) {
    const part = parts[index] ?? "";
    if (index % 2 === 0) {
      parseInlineSpeechMarkers(part, segments);
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

export function stripLessonAuthoringMarkers(text: string): string {
  return text.replace(/\\([^\\]+)\\/g, "$1");
}

export function lessonTextToSpeech(text: string): string {
  return stripLessonAuthoringMarkers(text)
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/(?<!\/)\/([^/]+)\/(?!\/)/g, "$1")
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
