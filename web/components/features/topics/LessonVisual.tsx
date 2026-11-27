"use client";

import { AdverbsOfFrequencyPyramid } from "@/components/features/topics/AdverbsOfFrequencyPyramid";
import type { TopicLessonVisual } from "@/data/grammar/types";
import { useTranslations } from "next-intl";

export function LessonVisual({ visual }: { visual: TopicLessonVisual }) {
  const t = useTranslations("Topic");

  if (visual === "adverbsOfFrequency") {
    return (
      <div className="pt-1 pb-2">
        <AdverbsOfFrequencyPyramid ariaLabel={t("adverbsFrequencyChartAria")} />
      </div>
    );
  }

  return null;
}
