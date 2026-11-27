"use client";

import { useTranslations } from "next-intl";
import { Check } from "lucide-react";
import { useLevelStatus } from "@/hooks/useLevelStatus";
import { usePassedLevelExams } from "@/hooks/usePassedLevelExams";
import {
  CEFR_LEVEL_ORDER,
  getCefrLevelBadgeClass,
  isLevelExamPassed,
} from "@/lib/topicAccess";
import type { CefrLevel } from "@/data/grammar/dashboardTopics";
import { cn } from "@/lib/utils";

type RoadmapStepState = "passed" | "current" | "upcoming";

function stepState(
  level: CefrLevel,
  activeLevel: CefrLevel,
  passedExams: readonly CefrLevel[],
): RoadmapStepState {
  if (isLevelExamPassed(level, passedExams)) {
    return "passed";
  }
  if (level === activeLevel) {
    return "current";
  }
  return "upcoming";
}

type ProgressCefrRoadmapStripProps = {
  className?: string;
  showLegend?: boolean;
};

export function ProgressCefrRoadmapStrip({
  className,
  showLegend = true,
}: ProgressCefrRoadmapStripProps) {
  const t = useTranslations("Dashboard");
  const { level: activeLevel } = useLevelStatus();
  const passedExams = usePassedLevelExams();

  return (
    <div className={cn("min-w-0", className)}>
      <div
        role="list"
        className="progress-cefr-roadmap m-0 w-full p-0"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(6, minmax(0, 1fr))",
          gap: "0.5rem",
        }}
      >
        {CEFR_LEVEL_ORDER.map((level) => {
          const state = stepState(level, activeLevel, passedExams);
          const statusLabel =
            state === "passed"
              ? t("progressRoadmapPassed")
              : state === "current"
                ? t("progressRoadmapCurrent")
                : t("progressRoadmapUpcoming");

          return (
            <div key={level} role="listitem" className="min-w-0">
              <span
                className={cn(
                  "box-border flex h-full min-h-18 w-full flex-col items-center justify-center gap-1.5 rounded-xl border px-1 py-3 text-center sm:min-h-20 sm:px-2 sm:py-3.5",
                  state === "passed" &&
                    "border-emerald-500/35 bg-emerald-500/10 dark:border-emerald-400/40 dark:bg-emerald-400/10",
                  state === "current" &&
                    "border-sky-500/45 bg-sky-500/10 dark:border-sky-400/45 dark:bg-sky-400/10",
                  state === "upcoming" &&
                    "border-border/70 bg-surface-muted/40 dark:border-white/10 dark:bg-white/3",
                )}
                title={`${level}: ${statusLabel}`}
              >
                <span
                  className={cn(
                    "inline-flex items-center rounded-md px-2 py-0.5 text-xs font-bold",
                    getCefrLevelBadgeClass(level),
                  )}
                >
                  {level}
                </span>
                <span className="flex items-center gap-0.5 text-[0.65rem] font-medium leading-tight text-brand-600 sm:text-xs dark:text-brand-400">
                  {state === "passed" ? (
                    <Check
                      className="size-3 text-emerald-600 dark:text-emerald-400"
                      aria-hidden
                    />
                  ) : null}
                  {statusLabel}
                </span>
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
