"use client";

import { useTranslations } from "next-intl";
import { Award } from "lucide-react";
import { ExerciseFinishedActions } from "@/components/features/exercises/ExerciseFinishedActions";
import { ExercisePercentBadge } from "@/components/features/topics/ExercisePercentBadge";

type ExerciseFinishedSectionProps = {
  correct: number;
  total: number;
  onRetry: () => void;
  onBackToTypes?: () => void;
  pointsEarned?: number | null;
  pointsAlreadyCounted?: boolean;
};

export function ExerciseFinishedSection({
  correct,
  total,
  onRetry,
  onBackToTypes,
  pointsEarned,
  pointsAlreadyCounted = false,
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
      {pointsEarned != null && pointsEarned > 0 ? (
        <p className="inline-flex items-center justify-center gap-2 text-sm font-medium text-amber-700 dark:text-amber-300">
          <Award className="size-4 shrink-0" aria-hidden />
          {t("finishedPointsEarned", { count: pointsEarned })}
        </p>
      ) : pointsAlreadyCounted ? (
        <p className="text-muted-foreground text-sm">
          {t("finishedPointsAlreadyCounted")}
        </p>
      ) : null}
      <ExerciseFinishedActions
        onRetry={onRetry}
        onBackToTypes={onBackToTypes}
      />
    </div>
  );
}
