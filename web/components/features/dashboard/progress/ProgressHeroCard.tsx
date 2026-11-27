"use client";

import { useTranslations } from "next-intl";
import { TrendingUp } from "lucide-react";
import { ProgressCefrRoadmapStrip } from "@/components/features/dashboard/progress/ProgressCefrRoadmapStrip";
import { ProgressRing } from "@/components/features/dashboard/progress/ProgressRing";
import { DashboardStatProgressBar } from "@/components/features/dashboard/DashboardStatProgressBar";
import { useLevelStatus } from "@/hooks/useLevelStatus";
import { getCefrLevelBadgeClass, getNextLevel } from "@/lib/topicAccess";
import { cn } from "@/lib/utils";

type ProgressHeroCardProps = {
  className?: string;
};

export function ProgressHeroCard({ className }: ProgressHeroCardProps = {}) {
  const t = useTranslations("Dashboard");
  const { level, percent, complete } = useLevelStatus();
  const nextLevel = getNextLevel(level);

  return (
    <article
      className={cn(
        "workshop-card progress-hero-card overflow-hidden p-4 sm:p-5",
        className,
      )}
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="flex shrink-0 justify-center sm:justify-start">
          <ProgressRing
            percent={percent}
            size={112}
            strokeWidth={8}
            ariaLabel={t("progressRingAria", { level, percent })}
          >
            <div className="text-center">
              <span
                className={cn(
                  "inline-flex items-center rounded-md px-1.5 py-0.5 text-xs font-bold",
                  getCefrLevelBadgeClass(level),
                )}
              >
                {level}
              </span>
              <p className="mt-0.5 font-display text-xl font-semibold tracking-tight text-brand-950 tabular-nums dark:text-brand-50">
                %{percent}
              </p>
            </div>
          </ProgressRing>
        </div>

        <div className="min-w-0 flex-1">
          <p className="workshop-card__label text-sm">
            <TrendingUp className="size-4" aria-hidden />
            {t("progressHeroActiveLevel")}
          </p>

          <DashboardStatProgressBar
            value={percent}
            max={100}
            inlinePercent
            className="mt-2 h-5"
            ariaLabel={t("levelStatusProgressAria", { level, percent })}
          />

          <p className="mt-1.5 text-[0.7rem] font-medium text-brand-600 dark:text-brand-400">
            {complete
              ? t("levelStatusComplete", { level })
              : !nextLevel
                ? t("progressHeroAllComplete")
                : t("progressHeroNextLevel", { level: nextLevel })}
          </p>
        </div>
      </div>

      <div className="mt-4">
        <ProgressCefrRoadmapStrip showLegend />
      </div>
    </article>
  );
}
