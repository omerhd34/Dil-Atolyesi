"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { ListeningSection } from "@/data/listenings/types";
import {
  buildTextBodySpeakLayout,
  isSpeechWordBoundaryEvent,
  readingParagraphBlockKey,
  wordIndexAtChar,
} from "@/lib/reading/readingSpeakHighlight";
import { speakText, stopSpeaking } from "@/lib/speakText";

export type ListeningSpeakPlaybackSource = "audio" | "practice" | null;

type PlaybackCallbacks = {
  onEnd?: () => void;
  onCancel?: () => void;
};

export function useListeningSectionSpeak(section: ListeningSection) {
  const speakLayout = useMemo(
    () => buildTextBodySpeakLayout(section),
    [section],
  );
  const blockStartWordByKey = useMemo(
    () =>
      new Map(
        speakLayout.blocks.map((block) => [block.key, block.startWordIndex]),
      ),
    [speakLayout.blocks],
  );
  const [activeSpeakWordIndex, setActiveSpeakWordIndex] = useState<
    number | null
  >(null);
  const [speaking, setSpeaking] = useState(false);
  const [playbackSource, setPlaybackSource] =
    useState<ListeningSpeakPlaybackSource>(null);
  const aliveRef = useRef(true);

  useEffect(() => {
    aliveRef.current = true;
    return () => {
      aliveRef.current = false;
      stopSpeaking();
    };
  }, []);

  const stopSpeechWordHighlight = useCallback(() => {
    setActiveSpeakWordIndex(null);
  }, []);

  const stopPlayback = useCallback(() => {
    stopSpeaking();
    setSpeaking(false);
    setPlaybackSource(null);
    stopSpeechWordHighlight();
  }, [stopSpeechWordHighlight]);

  const playFullRecording = useCallback(
    (
      source: Exclude<ListeningSpeakPlaybackSource, null>,
      callbacks?: PlaybackCallbacks,
    ) => {
      stopSpeaking();
      setSpeaking(true);
      setPlaybackSource(source);
      stopSpeechWordHighlight();

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
          setPlaybackSource(null);
          stopSpeechWordHighlight();
          callbacks?.onEnd?.();
        },
        onCancel: () => {
          if (!aliveRef.current) {
            return;
          }
          setSpeaking(false);
          setPlaybackSource(null);
          stopSpeechWordHighlight();
          callbacks?.onCancel?.();
        },
      });
    },
    [speakLayout, stopSpeechWordHighlight],
  );

  const toggleFullRecording = useCallback(
    (
      source: Exclude<ListeningSpeakPlaybackSource, null>,
      callbacks?: PlaybackCallbacks,
    ): boolean => {
      if (speaking) {
        stopPlayback();
        return false;
      }
      playFullRecording(source, callbacks);
      return true;
    },
    [playFullRecording, speaking, stopPlayback],
  );

  return {
    speakLayout,
    blockStartWordByKey,
    paragraphBlockKey: readingParagraphBlockKey,
    activeSpeakWordIndex,
    speaking,
    playbackSource,
    playFullRecording,
    toggleFullRecording,
    stopPlayback,
  };
}

export type ListeningSectionSpeak = ReturnType<typeof useListeningSectionSpeak>;
