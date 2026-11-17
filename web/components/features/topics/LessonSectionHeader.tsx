"use client";

import { useTranslations } from "next-intl";
import { LessonSpeakButton } from "@/components/features/topics/LessonSpeakButton";
import { getDistinctSecondaryTitle } from "@/lib/bilingualTitle";
import { cn } from "@/lib/utils";

type LessonSectionHeaderProps = {
  id: string;
  title: string;
  titleEn?: string;
  paragraphs: string[];
  as?: "h2" | "h3";
};

export function LessonSectionHeader({
  id,
  title,
  titleEn,
  paragraphs,
  as: Heading = "h3",
}: LessonSectionHeaderProps) {
  const t = useTranslations("Topic");
  const secondaryTitle = getDistinctSecondaryTitle(title, titleEn);
  const speakSource = paragraphs.join("\n\n");
  const showSpeak = speakSource.trim().length > 0;

  return (
    <div className="space-y-1">
      <div className="flex items-start justify-between gap-3">
        <Heading
          id={`heading-${id}`}
          className={cn(
            "min-w-0 flex-1",
            Heading === "h2"
              ? "section-title"
              : "font-display text-lg font-semibold text-brand-950 dark:text-brand-100",
          )}
        >
          {title}
        </Heading>
        {showSpeak ? (
          <LessonSpeakButton
            text={speakSource}
            lang="tr-TR"
            transport
            size="icon-sm"
            ariaLabel={t("listenSection")}
            className="shrink-0"
          />
        ) : null}
      </div>
      {secondaryTitle ? (
        <p
          className={cn(
            "font-medium tracking-wide text-brand-500 italic dark:text-brand-400",
            Heading === "h2" ? "text-lg" : "text-sm",
          )}
        >
          {secondaryTitle}
        </p>
      ) : null}
    </div>
  );
}