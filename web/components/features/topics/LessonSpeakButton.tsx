/* eslint-disable react-hooks/refs */
"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  Pause,
  Play,
  RotateCcw,
  SkipBack,
  SkipForward,
  Volume2,
  VolumeX,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/Button";
import {
  isTurkishLessonSpeech,
  lessonSpeakResumeKey,
  lessonTextToSpeakLines,
  lessonTextToSpeech,
} from "@/lib/lessonSpeakText";
import {
  adjustSpeechPlayback,
  canResumeSpeech,
  ensureSpeechPlaybackBookmark,
  getSpeechPlaybackSnapshot,
  pauseSpeaking,
  resetSpeechPlayback,
  speakDialogue,
  speakSequenceItemsFromDialogue,
  speakText,
  SPEECH_PLAYBACK_CHANGED_EVENT,
  type SpeechPlaybackSnapshot,
} from "@/lib/speakText";
import { cn } from "@/lib/utils";

type LessonSpeakButtonProps = {
  text: string;
  lang?: string;
  className?: string;
  size?: "icon-xs" | "icon-sm";
  ariaLabel?: string;
  transport?: boolean;
};

export function LessonSpeakButton({
  text,
  lang = "en-US",
  className,
  size = "icon-xs",
  ariaLabel,
  transport = false,
}: LessonSpeakButtonProps) {
  const t = useTranslations("Topic");
  const [speaking, setSpeaking] = useState(false);
  const [playback, setPlayback] = useState<SpeechPlaybackSnapshot>(() => ({
    itemIndex: 0,
    chunkIndex: 0,
    canStepBack: false,
    canStepForward: false,
    hasProgress: false,
    paused: false,
    speaking: false,
  }));
  const aliveRef = useRef(true);

  const resumeKeyForSpeech = useCallback((): string => {
    if (isTurkishLessonSpeech(lang)) {
      return lessonSpeakResumeKey(text);
    }
    return lessonTextToSpeech(text);
  }, [text, lang]);

  const buildDialogueLines = useCallback(() => {
    if (isTurkishLessonSpeech(lang)) {
      return lessonTextToSpeakLines(text);
    }
    const spoken = lessonTextToSpeech(text);
    return spoken ? [{ text: spoken, lang }] : [];
  }, [text, lang]);

  const buildSequenceItems = useCallback(() => {
    const lines = buildDialogueLines();
    if (lines.length === 0) {
      return [];
    }
    const dialogueLang = isTurkishLessonSpeech(lang) ? "tr-TR" : lang;
    return speakSequenceItemsFromDialogue(lines, dialogueLang);
  }, [buildDialogueLines, lang]);

  const syncPlaybackUi = useCallback(() => {
    const key = resumeKeyForSpeech();
    const snapshot = getSpeechPlaybackSnapshot(key);
    setPlayback(snapshot);
    setSpeaking(snapshot.speaking);
  }, [resumeKeyForSpeech]);

  useEffect(() => {
    aliveRef.current = true;
    syncPlaybackUi();
    const onPlayback = () => syncPlaybackUi();
    window.addEventListener(SPEECH_PLAYBACK_CHANGED_EVENT, onPlayback);
    return () => {
      aliveRef.current = false;
      window.removeEventListener(SPEECH_PLAYBACK_CHANGED_EVENT, onPlayback);
    };
  }, [syncPlaybackUi]);

  const speakCallbacksRef = useRef({
    onEnd: () => {
      if (aliveRef.current) {
        setSpeaking(false);
        syncPlaybackUi();
      }
    },
    onCancel: () => {
      if (aliveRef.current) {
        setSpeaking(false);
        syncPlaybackUi();
      }
    },
  });

  speakCallbacksRef.current.onEnd = () => {
    if (aliveRef.current) {
      setSpeaking(false);
      syncPlaybackUi();
    }
  };
  speakCallbacksRef.current.onCancel = () => {
    if (aliveRef.current) {
      setSpeaking(false);
      syncPlaybackUi();
    }
  };

  function startSpeech(fromBeginning = false) {
    const resumeKey = resumeKeyForSpeech();
    const lines = buildDialogueLines();
    if (lines.length === 0) {
      setSpeaking(false);
      return;
    }
    const playbackOpts = {
      resumeKey,
      ...(fromBeginning ? { fromBeginning: true as const } : {}),
    };

    setSpeaking(true);

    if (isTurkishLessonSpeech(lang)) {
      speakDialogue(
        lines,
        "tr-TR",
        undefined,
        speakCallbacksRef.current,
        playbackOpts,
      );
      return;
    }

    const spoken = lessonTextToSpeech(text);
    if (!spoken) {
      setSpeaking(false);
      return;
    }
    speakText(spoken, lang, undefined, speakCallbacksRef.current, playbackOpts);
  }

  function handlePause() {
    if (!speaking) {
      return;
    }
    pauseSpeaking();
    setSpeaking(false);
    syncPlaybackUi();
  }

  function handlePlay() {
    if (speaking) {
      return;
    }
    startSpeech(false);
  }

  function handlePlayPause() {
    if (speaking) {
      handlePause();
      return;
    }
    handlePlay();
  }

  function handleStep(delta: -1 | 1) {
    const key = resumeKeyForSpeech();
    const items = buildSequenceItems();
    if (items.length === 0) {
      return;
    }
    ensureSpeechPlaybackBookmark(key, items);
    const ok = adjustSpeechPlayback(key, delta);
    if (!ok) {
      return;
    }
    if (speaking) {
      startSpeech(false);
    } else {
      syncPlaybackUi();
    }
  }

  function handleReset() {
    const key = resumeKeyForSpeech();
    const items = buildSequenceItems();
    if (items.length === 0) {
      return;
    }
    resetSpeechPlayback(key, items);
    setSpeaking(false);
    syncPlaybackUi();
  }

  const resumeKey = resumeKeyForSpeech();
  const canResume = canResumeSpeech(resumeKey) || playback.paused;
  const playLabel = ariaLabel ?? t("speakItem", { text });
  const transportPlayLabel = canResume
    ? t("listenResume")
    : (ariaLabel ?? t("listenPlay"));

  if (!transport) {
    return (
      <Button
        type="button"
        variant={speaking ? "secondary" : "ghost"}
        size={size}
        className={className}
        aria-pressed={speaking}
        aria-label={
          speaking
            ? t("listenStop")
            : canResume
              ? t("listenResume")
              : playLabel
        }
        onClick={handlePlayPause}
      >
        {speaking ? <VolumeX aria-hidden /> : <Volume2 aria-hidden />}
      </Button>
    );
  }

  return (
    <div
      className={cn(
        "glass-button inline-flex shrink-0 items-center gap-0.5 rounded-xl p-0.5",
        className,
      )}
      role="group"
      aria-label={playLabel}
    >
      <Button
        type="button"
        variant="ghost"
        size="icon-xs"
        disabled={!playback.canStepBack}
        aria-label={t("listenSkipBack")}
        onClick={() => handleStep(-1)}
      >
        <SkipBack aria-hidden />
      </Button>
      <span className="relative inline-flex size-7 shrink-0 items-center justify-center">
        {speaking ? (
          <Button
            type="button"
            variant="secondary"
            size="icon-xs"
            className="absolute inset-0"
            aria-pressed
            aria-label={t("listenPause")}
            onClick={handlePause}
          >
            <Pause aria-hidden />
          </Button>
        ) : (
          <Button
            type="button"
            variant={canResume ? "secondary" : "ghost"}
            size="icon-xs"
            className="absolute inset-0"
            aria-label={transportPlayLabel}
            onClick={handlePlay}
          >
            <Play className="ml-px" aria-hidden />
          </Button>
        )}
      </span>
      <Button
        type="button"
        variant="ghost"
        size="icon-xs"
        disabled={!playback.canStepForward && !speaking}
        aria-label={t("listenSkipForward")}
        onClick={() => handleStep(1)}
      >
        <SkipForward aria-hidden />
      </Button>
      <Button
        type="button"
        variant="ghost"
        size="icon-xs"
        disabled={!playback.hasProgress}
        aria-label={t("listenReset")}
        onClick={handleReset}
      >
        <RotateCcw aria-hidden />
      </Button>
    </div>
  );
}
