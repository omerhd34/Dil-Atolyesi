"use client";

import { useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import {
  Check,
  FileText,
  Headphones,
  Languages,
  Volume2,
  VolumeX,
} from "lucide-react";
import { ReadingParagraphText } from "@/components/features/reading/ReadingParagraphText";
import { Button } from "@/components/ui/Button";
import { SpeakEnglishTitleButton } from "@/components/ui/SpeakEnglishTitleButton";
import { toast } from "@/components/ui/toast";
import type { ListeningSection } from "@/data/listenings/types";
import type { ListeningSectionSpeak } from "@/hooks/useListeningSectionSpeak";
import { useListeningSectionStatus } from "@/hooks/useListeningProgress";
import { tryMarkListeningLevelPassed } from "@/lib/listeningAccess";
import { getDistinctSecondaryTitle } from "@/lib/bilingualTitle";
import { mergeReadingGlossaries } from "@/lib/reading/mergeReadingGlossaries";
import {
  isListeningSectionComplete,
  markListeningListened,
} from "@/lib/listeningProgressStorage";
import { cn } from "@/lib/utils";

type ListeningAudioViewProps = {
  section: ListeningSection;
  speak: ListeningSectionSpeak;
  showTranscript: boolean;
  onShowTranscriptChange: (value: boolean) => void;
  showTranslation: boolean;
  onShowTranslationChange: (value: boolean) => void;
};

export function ListeningAudioView({
  section,
  speak,
  showTranscript,
  onShowTranscriptChange,
  showTranslation,
  onShowTranslationChange,
}: ListeningAudioViewProps) {
  const t = useTranslations("Listening");
  const aliveRef = useRef(true);
  const { listened } = useListeningSectionStatus(section.id);
  const mainSpeaking = speak.speaking && speak.playbackSource === "audio";
  const mergedGlossary = mergeReadingGlossaries(
    section.glossary,
    section.body.glossary,
  );

  useEffect(() => {
    aliveRef.current = true;
    return () => {
      aliveRef.current = false;
    };
  }, []);

  function handleListenClick() {
    if (mainSpeaking) {
      speak.stopPlayback();
      return;
    }

    speak.playFullRecording("audio", {
      onEnd: () => {
        if (!aliveRef.current) {
          return;
        }
        const wasComplete = isListeningSectionComplete(section.id);
        markListeningListened(section.id);
        tryMarkListeningLevelPassed(section.level);
        if (!wasComplete && isListeningSectionComplete(section.id)) {
          toast.add({
            id: `listening-section-complete-${section.id}`,
            type: "success",
            title: t("sectionPassedTitle"),
          });
        }
      },
    });
  }

  const titleEn = getDistinctSecondaryTitle(section.title, section.titleEn);
  const displayTitleEn = titleEn ?? section.titleEn;

  return (
    <div className="workshop-card space-y-6">
      <div
        className={cn(
          "flex flex-col items-center gap-4 rounded-2xl border border-border bg-background/40 px-6 py-10 text-center",
          mainSpeaking && "ring-2 ring-sky-400/50",
        )}
      >
        <span
          className={cn(
            "inline-flex size-16 items-center justify-center rounded-full bg-sky-500/15 text-sky-600 dark:text-sky-300",
            mainSpeaking && "motion-safe:animate-pulse",
          )}
        >
          <Headphones className="size-8" aria-hidden />
        </span>
        <div className="space-y-1">
          <div className="flex min-w-0 items-center justify-center gap-1">
            <h2 className="section-title min-w-0">{displayTitleEn}</h2>
            <SpeakEnglishTitleButton
              text={displayTitleEn}
              iconClassName="size-4"
            />
          </div>
          <p className="text-sm text-brand-600 dark:text-brand-400">
            {t("audioHint")}
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-2">
          <Button
            type="button"
            size="lg"
            variant={mainSpeaking ? "default" : "outline"}
            className="min-w-40"
            onClick={handleListenClick}
          >
            {mainSpeaking ? (
              <VolumeX className="size-5" aria-hidden />
            ) : listened ? (
              <Check className="size-5" aria-hidden />
            ) : (
              <Volume2 className="size-5" aria-hidden />
            )}
            {mainSpeaking
              ? t("listenStop")
              : listened
                ? t("listenDone")
                : t("listenPlay")}
          </Button>
          <Button
            type="button"
            size="lg"
            variant={showTranscript ? "default" : "outline"}
            aria-pressed={showTranscript}
            onClick={() => onShowTranscriptChange(!showTranscript)}
          >
            <FileText className="size-5" aria-hidden />
            {showTranscript ? t("hideTranscript") : t("showTranscript")}
          </Button>
          {showTranscript ? (
            <Button
              type="button"
              size="lg"
              variant={showTranslation ? "default" : "outline"}
              aria-pressed={showTranslation}
              onClick={() => onShowTranslationChange(!showTranslation)}
            >
              <Languages className="size-5" aria-hidden />
              {showTranslation ? t("hideTranslation") : t("showTranslation")}
            </Button>
          ) : null}
        </div>
      </div>

      {showTranscript ? (
        <article className="space-y-6 border-t border-border pt-6">
          {section.body.paragraphs.map((paragraph) => {
            const blockKey = speak.paragraphBlockKey(paragraph);
            return (
              <ReadingParagraphText
                key={blockKey}
                paragraph={paragraph}
                showTranslation={showTranslation}
                readingLevel={section.level}
                mergedGlossary={mergedGlossary}
                speakWordOffset={speak.blockStartWordByKey.get(blockKey)}
                activeSpeakWordIndex={
                  speak.speaking ? speak.activeSpeakWordIndex : null
                }
              />
            );
          })}
        </article>
      ) : null}
    </div>
  );
}
