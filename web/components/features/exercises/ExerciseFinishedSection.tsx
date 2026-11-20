"use client";

import { useTranslations } from "next-intl";
import { ExerciseFinishedActions } from "@/components/features/exercises/ExerciseFinishedActions";
import { ExercisePercentBadge } from "@/components/features/topics/ExercisePercentBadge";

type ExerciseFinishedSectionProps = {
  correct: number;
  total: number;
  onRetry: () => void;
  onBackToTypes?: () => void;
};

export function ExerciseFinishedSection({
  correct,
  total,
  onRetry,
  onBackToTypes,
}: ExerciseFinishedSectionProps) {
  const t = useTranslations("Topic");
  const scorePercent = total === 0 ? 0 : Math.round((correct / total) * 100);

  return (
    <div className="workshop-card relative mx-auto max-w-lg space-y-4 px-4 pb-5 pt-4 text-center sm:px-6">
      <div className="absolute top-4 right-4 sm:top-5 sm:right-5">
        <ExercisePercentBadge
          percent={scorePercent}
          ariaLabel={t("finishedScorePercentAria", { percent: scorePercent })}
        />
      </div>
      <h2 className="page-title">{t("finishedTitle")}</h2>
      <p className="page-subtitle mt-0">
        {t("finishedScore", { correct, total })}
      </p>
      <ExerciseFinishedActions
        onRetry={onRetry}
        onBackToTypes={onBackToTypes}
      />
    </div>
  );
}
