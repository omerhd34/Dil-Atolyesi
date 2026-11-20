"use client";

import { useTranslations } from "next-intl";
import type { LevelSkillKey, LevelSkillProgress } from "@/lib/levelStatus";
import { cn } from "@/lib/utils";

type LevelStatusSkillBreakdownProps = {
  skills: LevelSkillProgress[];
  className?: string;
};

function skillNavKey(
  key: LevelSkillKey,
): "topics" | "vocabulary" | "reading" | "listening" | "writing" | "speaking" {
  return key === "grammar" ? "topics" : key;
}

export function LevelStatusSkillBreakdown({
  skills,
  className,
}: LevelStatusSkillBreakdownProps) {
  const t = useTranslations("Dashboard");
  const tNav = useTranslations("AppNav");

  return (
    <ul
      className={cn("mt-3 grid grid-cols-2 gap-x-3 gap-y-3.5", className)}
      aria-label={t("levelStatusSkillsAria")}
    >
      {skills.map(({ key, percent }) => {
        const label = tNav(skillNavKey(key));
        return (
          <li key={key} className="min-w-0">
            <div className="flex items-baseline justify-between gap-1">
              <span className="truncate text-sm font-medium text-brand-700 dark:text-brand-300">
                {label}
              </span>
              <span className="shrink-0 text-sm font-semibold tabular-nums text-brand-950 dark:text-brand-100">
                %{percent}
              </span>
            </div>
            <div
              className="mt-1.5 h-3 overflow-hidden rounded-full bg-brand-950/8 shadow-[inset_0_0_0_1px_var(--glass-line-2)] dark:bg-white/10"
              role="progressbar"
              aria-valuenow={percent}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label={t("levelStatusSkillProgressAria", {
                skill: label,
                percent,
              })}
            >
              <div
                className={cn(
                  "h-full rounded-full bg-brand-800 transition-[width] duration-300 ease-out dark:bg-brand-100",
                  percent > 0 && percent < 100 && "min-w-1.5",
                )}
                style={{ width: `${percent}%` }}
              />
            </div>
          </li>
        );
      })}
    </ul>
  );
}
