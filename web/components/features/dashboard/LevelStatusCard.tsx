"use client";

import { useTranslations } from "next-intl";
import { GraduationCap } from "lucide-react";
import { useLevelStatus } from "@/hooks/useLevelStatus";
import { getCefrLevelBadgeClass } from "@/lib/topicAccess";
import { DashboardStatPanelHeader } from "@/components/features/dashboard/DashboardStatPanelHeader";
import { DashboardStatProgressBar } from "@/components/features/dashboard/DashboardStatProgressBar";
import { LevelStatusSkillBreakdown } from "@/components/features/dashboard/LevelStatusSkillBreakdown";
import { cn } from "@/lib/utils";

type LevelStatusCardProps = {
  className?: string;
};

export function LevelStatusCard({ className }: LevelStatusCardProps = {}) {
  const t = useTranslations("Dashboard");
  const { level, percent, complete, skills } = useLevelStatus();

  return (
    <article className={cn("dashboard-panel dashboard-panel--stat", className)}>
      <DashboardStatPanelHeader
        trailing={
          <span
            className={cn(
              "inline-flex items-center rounded-lg px-2.5 py-1 text-sm font-semibold",
              getCefrLevelBadgeClass(level),
            )}
          >
            {level}
          </span>
        }
      >
        <p className="dashboard-panel__label text-base">
          <GraduationCap className="size-5" aria-hidden />
          {t("levelStatus")}
        </p>
      </DashboardStatPanelHeader>

      <DashboardStatProgressBar
        value={percent}
        max={100}
        inlinePercent
        ariaLabel={t("levelStatusProgressAria", { level, percent })}
      />

      <p className="mt-2 text-xs text-brand-600 dark:text-brand-400">
        {complete
          ? t("levelStatusComplete", { level })
          : t("levelStatusHint", { level })}
      </p>

      <LevelStatusSkillBreakdown skills={skills} />
    </article>
  );
}
