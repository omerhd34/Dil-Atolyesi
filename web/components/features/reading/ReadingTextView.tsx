"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { Check, Languages, Volume2, VolumeX } from "lucide-react";
import { ReadingClickableEnglishText } from "@/components/features/reading/ReadingClickableEnglishText";
import { ReadingParagraphText } from "@/components/features/reading/ReadingParagraphText";
import { Button } from "@/components/ui/Button";
import { SpeakEnglishTitleButton } from "@/components/ui/SpeakEnglishTitleButton";
import { toast } from "@/components/ui/toast";
import type {
  ReadingParagraph,
  ReadingSection,
  ReadingWordGlossary,
} from "@/data/readings/types";
import { useReadingSectionStatus } from "@/hooks/useReadingProgress";
import { tryMarkReadingLevelPassed } from "@/lib/readingAccess";
import { getDistinctSecondaryTitle } from "@/lib/bilingualTitle";
import { mergeReadingGlossaries } from "@/lib/reading/mergeReadingGlossaries";
import {
  isReadingSectionComplete,
  markReadingListened,
} from "@/lib/readingProgressStorage";
import {
  buildReadingSpeakLayout,
  isSpeechWordBoundaryEvent,
  readingParagraphBlockKey,
  readingSubsectionParagraphBlockKey,
  wordIndexAtChar,
} from "@/lib/reading/readingSpeakHighlight";
import { speakText, stopSpeaking } from "@/lib/speakText";

type ReadingTextViewProps = {
  section: ReadingSection;
};

function ReadingTextBlock({
  paragraphs,
  intro,
  introTr,
  showTranslation,
  readingLevel,
  mergedGlossary,
  blockStartWordByKey,
  activeSpeakWordIndex,
  paragraphBlockKeyFn,
}: {
  paragraphs: ReadingParagraph[];
  intro?: string;
  introTr?: string;
  showTranslation: boolean;
  readingLevel: ReadingSection["level"];
  mergedGlossary?: ReadingWordGlossary;
  blockStartWordByKey: Map<string, number>;
  activeSpeakWordIndex: number | null;
  paragraphBlockKeyFn?: (paragraph: ReadingParagraph) => string;
}) {
  const resolveBlockKey =
    paragraphBlockKeyFn ??
    ((paragraph: ReadingParagraph) => readingParagraphBlockKey(paragraph));
  const introSpeakWordOffset = blockStartWordByKey.get("intro");

  return (
    <article className="space-y-6">
      {intro ? (
        <div className="space-y-2">
          <p className="text-base leading-7 text-brand-800 dark:text-brand-200">
            <ReadingClickableEnglishText
              text={intro}
              readingLevel={readingLevel}
              glossary={mergedGlossary}
              paragraphKey="intro"
              speakWordOffset={introSpeakWordOffset}
              activeSpeakWordIndex={activeSpeakWordIndex}
            />
          </p>
          {showTranslation && introTr ? (
            <p className="border-s-2 border-sky-400/60 ps-3 text-base leading-7 text-brand-600 dark:text-brand-400">
              {introTr}
            </p>
          ) : null}
        </div>
      ) : null}
      {paragraphs.map((paragraph) => {
        const blockKey = resolveBlockKey(paragraph);
        return (
          <ReadingParagraphText
            key={blockKey}
            paragraph={paragraph}
            showTranslation={showTranslation}
            readingLevel={readingLevel}
            mergedGlossary={mergedGlossary}
            speakWordOffset={blockStartWordByKey.get(blockKey)}
            activeSpeakWordIndex={activeSpeakWordIndex}
          />
        );
      })}
    </article>
  );
}

export function ReadingTextView({ section }: ReadingTextViewProps) {
  const t = useTranslations("Reading");
  const [showTranslation, setShowTranslation] = useState(false);
  const [speaking, setSpeaking] = useState(false);
  const [activeSpeakWordIndex, setActiveSpeakWordIndex] = useState<
    number | null
  >(null);
  const aliveRef = useRef(true);
  const speakingRef = useRef(false);

  function stopSpeechWordHighlight() {
    setActiveSpeakWordIndex(null);
  }
  const { listened } = useReadingSectionStatus(section.id);
  const textTitleTr = getDistinctSecondaryTitle(
    section.textTitle ?? "",
    section.titleEn,
  );
  const speakLayout = useMemo(
    () => buildReadingSpeakLayout(section),
    [section],
  );
  const blockStartWordByKey = useMemo(
    () =>
      new Map(
        speakLayout.blocks.map((block) => [block.key, block.startWordIndex]),
      ),
    [speakLayout],
  );
  const mergedGlossary = mergeReadingGlossaries(
    section.glossary,
    section.body.glossary,
  );

  useEffect(() => {
    aliveRef.current = true;
    return () => {
      aliveRef.current = false;
      stopSpeaking();
    };
  }, []);

  function handleListenClick() {
    if (speaking) {
      stopSpeaking();
      setSpeaking(false);
      speakingRef.current = false;
      stopSpeechWordHighlight();
      return;
    }

    setSpeaking(true);
    speakingRef.current = true;
    setActiveSpeakWordIndex(null);

    speakText(speakLayout.fullText, "en-US", undefined, {
      wordBoundarySourceText: speakLayout.fullText,
      onSpeechBoundary: ({ charIndex, name }) => {
        if (!aliveRef.current || !isSpeechWordBoundaryEvent(name)) {
          return;
        }
        const wordIndex = wordIndexAtChar(speakLayout.wordSpans, charIndex);
        if (wordIndex !== null) {
          setActiveSpeakWordIndex(wordIndex);
        }
      },
      onEnd: () => {
        if (!aliveRef.current) {
          return;
        }
        setSpeaking(false);
        speakingRef.current = false;
        stopSpeechWordHighlight();
        const wasComplete = isReadingSectionComplete(section.id);
        markReadingListened(section.id);
        tryMarkReadingLevelPassed(section.level);
        if (!wasComplete && isReadingSectionComplete(section.id)) {
          toast.add({
            id: `reading-section-complete-${section.id}`,
            type: "success",
            title: t("sectionPassedTitle"),
          });
        }
      },
    });
  }

  return (
    <div className="workshop-card space-y-6">
      <div className="flex flex-wrap items-center gap-2">
        <Button
          type="button"
          size="sm"
          variant={speaking ? "default" : "outline"}
          aria-pressed={speaking}
          onClick={handleListenClick}
        >
          {speaking ? (
            <VolumeX className="size-4" aria-hidden />
          ) : listened ? (
            <Check className="size-4" aria-hidden />
          ) : (
            <Volume2 className="size-4" aria-hidden />
          )}
          {speaking
            ? t("listenStop")
            : listened
              ? t("listenDone")
              : t("listenAll")}
        </Button>
        <Button
          type="button"
          size="sm"
          variant={showTranslation ? "default" : "outline"}
          aria-pressed={showTranslation}
          onClick={() => setShowTranslation((value) => !value)}
        >
          <Languages className="size-4" aria-hidden />
          {showTranslation ? t("hideTranslation") : t("showTranslation")}
        </Button>
      </div>

      <div className="space-y-1 border-b border-border pb-4">
        <div className="flex min-w-0 items-center gap-1">
          <h2 className="section-title min-w-0">{section.titleEn}</h2>
          <SpeakEnglishTitleButton
            text={section.titleEn}
            iconClassName="size-4"
          />
        </div>
        {section.textTitle && textTitleTr && textTitleTr !== section.titleEn ? (
          <p className="text-sm font-medium text-brand-600 dark:text-brand-400">
            {section.textTitle}
          </p>
        ) : null}
      </div>

      <ReadingTextBlock
        paragraphs={section.body.paragraphs}
        intro={section.body.intro}
        introTr={section.body.introTr}
        showTranslation={showTranslation}
        readingLevel={section.level}
        mergedGlossary={mergedGlossary}
        blockStartWordByKey={blockStartWordByKey}
        activeSpeakWordIndex={activeSpeakWordIndex}
      />

      {section.subsections?.map((subsection) => {
        const subsectionTitleEn = getDistinctSecondaryTitle(
          subsection.title,
          subsection.titleEn,
        );
        return (
          <section
            key={subsection.title}
            className="space-y-4 border-t border-border pt-4"
          >
            <div className="space-y-0.5">
              <h3 className="font-display text-base font-semibold tracking-wide text-brand-950 uppercase dark:text-brand-100">
                {subsectionTitleEn ?? subsection.title}
              </h3>
              {subsectionTitleEn && subsectionTitleEn !== subsection.title ? (
                <p className="text-xs font-medium text-brand-500">
                  {subsection.title}
                </p>
              ) : null}
            </div>
            <ReadingTextBlock
              paragraphs={subsection.paragraphs}
              showTranslation={showTranslation}
              readingLevel={section.level}
              mergedGlossary={mergedGlossary}
              blockStartWordByKey={blockStartWordByKey}
              activeSpeakWordIndex={activeSpeakWordIndex}
              paragraphBlockKeyFn={(paragraph) =>
                readingSubsectionParagraphBlockKey(
                  subsection.title || subsection.titleEn || "sub",
                  paragraph,
                )
              }
            />
          </section>
        );
      })}
    </div>
  );
}
