"use client";

import { useTranslations } from "next-intl";
import { LessonParagraph } from "@/components/features/topics/LessonParagraph";
import { LessonParagraphListen } from "@/components/features/topics/LessonParagraphListen";

type LessonIntroBlockProps = {
  text: string;
};

export function LessonIntroBlock({ text }: LessonIntroBlockProps) {
  const t = useTranslations("Topic");
  if (!text.trim()) {
    return null;
  }

  return (
    <div className="space-y-3">
      <LessonParagraphListen paragraphs={[text]} ariaLabel={t("listenIntro")} />
      <LessonParagraph text={text} className="text-base" />
    </div>
  );
}
