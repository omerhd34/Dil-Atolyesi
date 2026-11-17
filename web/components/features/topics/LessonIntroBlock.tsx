"use client";

import { useTranslations } from "next-intl";
import { LessonParagraph } from "@/components/features/topics/LessonParagraph";
import { LessonSpeakButton } from "@/components/features/topics/LessonSpeakButton";

type LessonIntroBlockProps = {
  text: string;
};

export function LessonIntroBlock({ text }: LessonIntroBlockProps) {
  const t = useTranslations("Topic");
  if (!text.trim()) {
    return null;
  }

  return (
    <div className="flex items-start justify-between gap-3">
      <LessonParagraph text={text} className="min-w-0 flex-1 text-base" />
      <LessonSpeakButton
        text={text}
        lang="tr-TR"
        transport
        size="icon-sm"
        ariaLabel={t("listenIntro")}
        className="shrink-0"
      />
    </div>
  );
}