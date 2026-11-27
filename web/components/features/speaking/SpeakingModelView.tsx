"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { Check, Languages, RotateCcw, Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { toast } from "@/components/ui/toast";
import type { SpeakingSection } from "@/data/speakings/types";
import {
  SpeakingChatThread,
  type SpeakingChatThreadHandle,
} from "@/components/features/speaking/SpeakingChatThread";
import { useSpeakingSectionStatus } from "@/hooks/useSpeakingProgress";
import { tryMarkSpeakingLevelPassed } from "@/lib/speakingAccess";
import {
  isSpeakingSectionComplete,
  markSpeakingModelTranslationShown,
} from "@/lib/speakingProgressStorage";
import {
  buildChatMessagesSpeakLayout,
  isSpeechWordBoundaryEvent,
  wordIndexAtChar,
} from "@/lib/reading/readingSpeakHighlight";
import { speakDialogue, stopSpeaking } from "@/lib/speakText";

type SpeakingModelViewProps = {
  section: SpeakingSection;
};

export function SpeakingModelView({ section }: SpeakingModelViewProps) {
  const t = useTranslations("Speaking");
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
  const dialogueRef = useRef<SpeakingChatThreadHandle>(null);
  const { modelViewed, modelTranslationShown } = useSpeakingSectionStatus(
    section.id,
  );

  useEffect(() => {
    aliveRef.current = true;
    return () => {
      aliveRef.current = false;
      stopSpeaking();
    };
  }, []);

  const handleAllLinesSpoken = useCallback(() => {
    if (!aliveRef.current) {
      return;
    }
    const wasComplete = isSpeakingSectionComplete(section.id);
    tryMarkSpeakingLevelPassed(section.level);
    if (!wasComplete && isSpeakingSectionComplete(section.id)) {
      toast.add({
        id: `speaking-section-complete-${section.id}`,
        type: "success",
        title: t("sectionPassedTitle"),
      });
    }
  }, [section.id, section.level, t]);

  function handleTranslationToggle() {
    const next = !showTranslation;
    setShowTranslation(next);
    if (next && !modelTranslationShown) {
      markSpeakingModelTranslationShown(section.id);
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
        if (aliveRef.current) {
          setSpeaking(false);
          stopSpeechWordHighlight();
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
            ) : (
              <Volume2 className="size-4" aria-hidden />
            )}
            {speaking ? t("listenStop") : t("listenAll")}
          </Button>
          <Button
            type="button"
            size="sm"
            variant="outline"
            onClick={() => {
              stopSpeaking();
              setSpeaking(false);
              stopSpeechWordHighlight();
              dialogueRef.current?.resetDialogue();
            }}
          >
            <RotateCcw className="size-4" aria-hidden />
            {t("resetDialogue")}
          </Button>
        </div>
        {!modelViewed ? (
          <p className="text-sm text-brand-600 dark:text-brand-400">
            {t("modelHint")}
          </p>
        ) : null}
      </div>

      <SpeakingChatThread
        ref={dialogueRef}
        sectionId={section.id}
        model={section.model}
        showTranslation={showTranslation}
        level={section.level}
        glossary={section.glossary}
        dialogueSpeakWordIndex={speaking ? activeSpeakWordIndex : null}
        onAllLinesSpoken={handleAllLinesSpoken}
      />
    </div>
  );
}
