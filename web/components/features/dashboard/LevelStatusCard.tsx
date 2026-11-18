"use client";

import { useTranslations } from "next-intl";
import { useLevelStatus } from "@/hooks/useLevelStatus";
import { DashboardStatIcon } from "@/components/features/dashboard/DashboardStatIcon";
import { getCefrLevelBadgeClass } from "@/lib/topicAccess";
import { DashboardStatPanelHeader } from "@/components/features/dashboard/DashboardStatPanelHeader";
import { DashboardStatProgressBar } from "@/components/features/dashboard/DashboardStatProgressBar";
import { cn } from "@/lib/utils";

export function LevelStatusCard() {
  const t = useTranslations("Dashboard");
  const { level, percent, complete } = useLevelStatus();

  return (
    <article className="dashboard-panel dashboard-panel--stat">
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
          <DashboardStatIcon kind="levelStatus" />
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
    </article>
  );
}
