"use client";

import type { ReadingLevel, ReadingParagraph } from "@/data/readings/types";
import { ReadingClickableEnglishText } from "@/components/features/reading/ReadingClickableEnglishText";
import { readingParagraphBlockKey } from "@/lib/reading/readingSpeakHighlight";
import { cn } from "@/lib/utils";

type ReadingParagraphTextProps = {
  paragraph: ReadingParagraph;
  showTranslation: boolean;
  readingLevel: ReadingLevel;
  mergedGlossary?: Record<string, string>;
  speakWordOffset?: number;
  activeSpeakWordIndex?: number | null;
};

export function ReadingParagraphText({
  paragraph,
  showTranslation,
  readingLevel,
  mergedGlossary,
  speakWordOffset,
  activeSpeakWordIndex,
}: ReadingParagraphTextProps) {
  const paragraphKey = readingParagraphBlockKey(paragraph);
  const glossary = {
    ...mergedGlossary,
    ...paragraph.glossary,
  };

  return (
    <div className="mt-2 space-y-2 first:mt-0">
      <p className="m-0 text-base leading-7 text-brand-800 dark:text-brand-200">
        <ReadingClickableEnglishText
          text={paragraph.en}
          highlights={paragraph.highlights}
          readingLevel={readingLevel}
          glossary={glossary}
          paragraphKey={paragraphKey}
          speakWordOffset={speakWordOffset}
          activeSpeakWordIndex={activeSpeakWordIndex}
        />
      </p>
      {showTranslation ? (
        <p
          className={cn(
            "m-0 border-s-2 border-sky-400/60 ps-3 text-base leading-7 text-brand-600 dark:text-brand-400",
          )}
        >
          {paragraph.tr}
        </p>
      ) : null}
    </div>
  );
}
