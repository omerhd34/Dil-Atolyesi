"use client";

import { LessonSpeakButton } from "@/components/features/topics/LessonSpeakButton";

type LessonParagraphListenProps = {
  paragraphs: string[];
  ariaLabel: string;
};

export function LessonParagraphListen({
  paragraphs,
  ariaLabel,
}: LessonParagraphListenProps) {
  const speakSource = paragraphs.join("\n\n");
  if (!speakSource.trim()) {
    return null;
  }

  return (
    <LessonSpeakButton
      text={speakSource}
      lang="tr-TR"
      transport
      size="icon-sm"
      ariaLabel={ariaLabel}
    />
  );
}
