import type {
  ReadingParagraph,
  ReadingSection,
  ReadingSubsection,
  ReadingTextBody,
} from "@/data/readings/types";
import { ENGLISH_WORD_PATTERN } from "@/lib/reading/tokenizeEnglishText";

export function readingParagraphBlockKey(paragraph: ReadingParagraph): string {
  return `p-${paragraph.number ?? 0}-${paragraph.en.slice(0, 20)}`;
}

export function readingSubsectionParagraphBlockKey(
  subsectionTitle: string,
  paragraph: ReadingParagraph,
): string {
  return `sub-${subsectionTitle}-${paragraph.number ?? 0}-${paragraph.en.slice(0, 16)}`;
}

export type SpeakWordSpan = {
  index: number;
  start: number;
  end: number;
  value: string;
};

export type ReadingSpeakTextBlock = {
  key: string;
  en: string;
  startChar: number;
  startWordIndex: number;
};

export type ReadingSpeakLayout = {
  fullText: string;
  wordSpans: SpeakWordSpan[];
  blocks: ReadingSpeakTextBlock[];
};

export function indexSpeakTextWords(text: string): SpeakWordSpan[] {
  const spans: SpeakWordSpan[] = [];
  let index = 0;

  for (const match of text.matchAll(ENGLISH_WORD_PATTERN)) {
    const value = match[0];
    const start = match.index;
    if (start === undefined) {
      continue;
    }
    spans.push({
      index,
      start,
      end: start + value.length,
      value,
    });
    index += 1;
  }

  return spans;
}

export function wordIndexAtChar(
  spans: SpeakWordSpan[],
  charIndex: number,
): number | null {
  if (spans.length === 0) {
    return null;
  }

  for (const span of spans) {
    if (charIndex >= span.start && charIndex < span.end) {
      return span.index;
    }
    if (charIndex < span.start) {
      return span.index;
    }
  }

  return spans[spans.length - 1]?.index ?? null;
}

function firstWordIndexAtOrAfter(
  spans: SpeakWordSpan[],
  charPos: number,
): number {
  for (const span of spans) {
    if (span.start >= charPos) {
      return span.index;
    }
  }
  return spans.length;
}

export type ChatMessagesSpeakLayout = {
  fullText: string;
  wordSpans: SpeakWordSpan[];
  messageStartWordIndex: ReadonlyMap<string, number>;
};

export function buildChatMessagesSpeakLayout(
  messages: ReadonlyArray<{ id: string; text: string }>,
): ChatMessagesSpeakLayout {
  let fullText = "";
  const blocks: { id: string; startChar: number }[] = [];

  for (const message of messages) {
    const lineText = message.text.trim();
    if (!lineText) {
      continue;
    }
    if (fullText.length > 0) {
      fullText += " ";
    }
    const startChar = fullText.length;
    fullText += lineText;
    blocks.push({ id: message.id, startChar });
  }

  const wordSpans = indexSpeakTextWords(fullText);
  const messageStartWordIndex = new Map<string, number>();
  for (const block of blocks) {
    messageStartWordIndex.set(
      block.id,
      firstWordIndexAtOrAfter(wordSpans, block.startChar),
    );
  }

  return { fullText, wordSpans, messageStartWordIndex };
}

export function resolveChatMessageSpeakHighlight(params: {
  messageId: string;
  speakLayout: ChatMessagesSpeakLayout;
  dialogueSpeakWordIndex: number | null;
  listeningMessageId: string | null;
  lineSpeakWordIndex: number | null;
}): {
  speakWordOffset: number;
  activeSpeakWordIndex: number | null;
} {
  const {
    messageId,
    speakLayout,
    dialogueSpeakWordIndex,
    listeningMessageId,
    lineSpeakWordIndex,
  } = params;

  if (dialogueSpeakWordIndex !== null) {
    return {
      speakWordOffset: speakLayout.messageStartWordIndex.get(messageId) ?? 0,
      activeSpeakWordIndex: dialogueSpeakWordIndex,
    };
  }

  if (listeningMessageId === messageId) {
    return {
      speakWordOffset: 0,
      activeSpeakWordIndex: lineSpeakWordIndex,
    };
  }

  return {
    speakWordOffset: 0,
    activeSpeakWordIndex: null,
  };
}

export type TextBodySpeakSource = {
  body: ReadingTextBody;
  subsections?: ReadingSubsection[];
};

export function buildTextBodySpeakLayout(
  source: TextBodySpeakSource,
): ReadingSpeakLayout {
  const pending: { key: string; en: string }[] = [];

  if (source.body.intro) {
    pending.push({ key: "intro", en: source.body.intro });
  }

  for (const paragraph of source.body.paragraphs) {
    pending.push({
      key: readingParagraphBlockKey(paragraph),
      en: paragraph.en,
    });
  }

  if (source.subsections) {
    for (const subsection of source.subsections) {
      const subsectionKey = subsection.title || subsection.titleEn || "sub";
      for (const paragraph of subsection.paragraphs) {
        pending.push({
          key: readingSubsectionParagraphBlockKey(subsectionKey, paragraph),
          en: paragraph.en,
        });
      }
    }
  }

  let fullText = "";
  const blocks: Omit<ReadingSpeakTextBlock, "startWordIndex">[] = [];

  for (const block of pending) {
    if (fullText.length > 0) {
      fullText += " ";
    }
    const startChar = fullText.length;
    fullText += block.en;
    blocks.push({ key: block.key, en: block.en, startChar });
  }

  const wordSpans = indexSpeakTextWords(fullText);

  return {
    fullText,
    wordSpans,
    blocks: blocks.map((block) => ({
      ...block,
      startWordIndex: firstWordIndexAtOrAfter(wordSpans, block.startChar),
    })),
  };
}

export function buildReadingSpeakLayout(
  section: ReadingSection,
): ReadingSpeakLayout {
  return buildTextBodySpeakLayout(section);
}

export const READING_WORD_SURFACE_HIGHLIGHT_BG_CLASS =
  "bg-amber-100/90 dark:bg-amber-400/15";

export const READING_WORD_SURFACE_HIGHLIGHT_CLASS = `reading-speak-word-active inline rounded-sm px-0.5 box-decoration-clone ${READING_WORD_SURFACE_HIGHLIGHT_BG_CLASS}`;

export function isSpeechWordBoundaryEvent(name: string): boolean {
  return name === "word";
}

export function estimateSpeechMsPerWord(rate: number): number {
  const safeRate = Number.isFinite(rate) && rate > 0 ? rate : 1;
  return Math.max(100, Math.round(60_000 / (145 * safeRate)));
}
