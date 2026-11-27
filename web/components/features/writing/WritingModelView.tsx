"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { Check, Languages, Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { toast } from "@/components/ui/toast";
import type { WritingSection } from "@/data/writings/types";
import { useWritingSectionStatus } from "@/hooks/useWritingProgress";
import { tryMarkWritingLevelPassed } from "@/lib/writingAccess";
import { getDistinctSecondaryTitle } from "@/lib/bilingualTitle";
import {
  isWritingSectionComplete,
  markWritingModelListened,
  markWritingModelTranslationShown,
} from "@/lib/writingProgressStorage";
import { WritingChatThread } from "@/components/features/writing/WritingChatThread";
import {
  buildChatMessagesSpeakLayout,
  isSpeechWordBoundaryEvent,
  wordIndexAtChar,
} from "@/lib/reading/readingSpeakHighlight";
import { speakDialogue, stopSpeaking } from "@/lib/speakText";

type WritingModelViewProps = {
  section: WritingSection;
};

export function WritingModelView({ section }: WritingModelViewProps) {
  const t = useTranslations("Writing");
  const [showTranslation, setShowTranslation] = useState(false);
  const [speaking, setSpeaking] = useState(false);
  const [activeSpeakWordIndex, setActiveSpeakWordIndex] = useState<
    number | null
  >(null);
  const aliveRef = useRef(true);
  const speakLayout = useMemo(
    () =>
      buildChatMessagesSpeakLayout(
        section.model.messages.map((message) => ({
          id: message.id,
          text: message.text,
        })),
      ),
    [section.model.messages],
  );
  const { modelViewed, modelTranslationShown, modelListened } =
    useWritingSectionStatus(section.id);
  const summaryEn = getDistinctSecondaryTitle(
    section.summaryTr ?? "",
    section.summary ?? "",
  );

  useEffect(() => {
    aliveRef.current = true;
    return () => {
      aliveRef.current = false;
      stopSpeaking();
    };
  }, []);

  function handleTranslationToggle() {
    const next = !showTranslation;
    setShowTranslation(next);
    if (next && !modelTranslationShown) {
      markWritingModelTranslationShown(section.id);
    }
  }

  function stopSpeechWordHighlight() {
    setActiveSpeakWordIndex(null);
  }

  function handleSpeakToggle() {
    if (speaking) {
      stopSpeaking();
      setSpeaking(false);
      stopSpeechWordHighlight();
      return;
    }

    setSpeaking(true);
    stopSpeechWordHighlight();
    const dialogueLines = section.model.messages.map((message) => ({
      text: message.text,
      gender: message.sender === "me" ? ("female" as const) : ("male" as const),
    }));
    speakDialogue(dialogueLines, "en-US", undefined, {
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
        stopSpeechWordHighlight();
        if (!modelListened) {
          const wasComplete = isWritingSectionComplete(section.id);
          markWritingModelListened(section.id);
          tryMarkWritingLevelPassed(section.level);
          if (!wasComplete && isWritingSectionComplete(section.id)) {
            toast.add({
              id: `writing-section-complete-${section.id}`,
              type: "success",
              title: t("sectionPassedTitle"),
            });
          }
        }
      },
      onCancel: () => {
        if (aliveRef.current) {
          setSpeaking(false);
          stopSpeechWordHighlight();
        }
      },
    });
  }

  return (
    <div className="workshop-card space-y-6">
      <div className="space-y-3">
        <div className="flex flex-wrap items-center gap-2">
          <Button
            type="button"
            size="sm"
            variant={showTranslation ? "default" : "outline"}
            aria-pressed={showTranslation}
            onClick={handleTranslationToggle}
          >
            {modelTranslationShown ? (
              <Check className="size-4" aria-hidden />
            ) : (
              <Languages className="size-4" aria-hidden />
            )}
            {showTranslation ? t("hideTranslation") : t("showTranslation")}
          </Button>
          <Button
            type="button"
            size="sm"
            variant={speaking ? "default" : "outline"}
            aria-pressed={speaking}
            onClick={handleSpeakToggle}
          >
            {speaking ? (
              <VolumeX className="size-4" aria-hidden />
            ) : modelListened ? (
              <Check className="size-4" aria-hidden />
            ) : (
              <Volume2 className="size-4" aria-hidden />
            )}
            {speaking ? t("listenStop") : t("listenAll")}
          </Button>
        </div>
        {!modelViewed ? (
          <p className="text-sm text-brand-600 dark:text-brand-400">
            {t("modelHint")}
          </p>
        ) : null}
      </div>

      <div className="max-w-2xl space-y-2.5 border-b border-border pb-5">
        <p className="text-base leading-7 text-brand-800 dark:text-brand-200">
          {section.summaryTr ?? t("modelIntro")}
        </p>
        {summaryEn ? (
          <p className="text-sm leading-relaxed font-medium tracking-wide text-brand-500 italic dark:text-brand-400">
            {section.summary}
          </p>
        ) : null}
      </div>

      <WritingChatThread
        model={section.model}
        showTranslation={showTranslation}
        level={section.level}
        glossary={section.glossary}
        dialogueSpeakWordIndex={speaking ? activeSpeakWordIndex : null}
      />
    </div>
  );
}
