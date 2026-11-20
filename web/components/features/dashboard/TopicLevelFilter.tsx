"use client";

import { useTranslations } from "next-intl";
import { Lock } from "lucide-react";
import type { CefrLevel } from "@/data/grammar/dashboardTopics";
import {
  CEFR_LEVEL_FILTER_ACTIVE_CLASS,
  CEFR_LEVEL_FILTER_IDLE_CLASS,
  CEFR_LEVEL_ORDER,
  FILTER_CHIP_BUTTON_CLASS,
  canAccessLevel,
} from "@/lib/topicAccess";
import { cn } from "@/lib/utils";

type TopicLevelFilterProps = {
  value: CefrLevel;
  onChange: (level: CefrLevel) => void;
  levels?: readonly CefrLevel[];
  isUnlocked?: (level: CefrLevel) => boolean;
};

export function TopicLevelFilter({
  value,
  onChange,
  levels = CEFR_LEVEL_ORDER,
  isUnlocked = canAccessLevel,
}: TopicLevelFilterProps) {
  const t = useTranslations("Dashboard");

  return (
    <div
      role="tablist"
      aria-label={t("levelFilterAria")}
      className="flex flex-wrap gap-2"
    >
      {levels.map((level) => {
        const unlocked = isUnlocked(level);
        const selected = value === level;

        return (
          <button
            key={level}
            type="button"
            role="tab"
            aria-selected={selected}
            onClick={() => onChange(level)}
            className={cn(
              FILTER_CHIP_BUTTON_CLASS,
              selected
                ? CEFR_LEVEL_FILTER_ACTIVE_CLASS[level]
                : CEFR_LEVEL_FILTER_IDLE_CLASS[level],
            )}
          >
            {!unlocked ? (
              <Lock className="size-3.5 shrink-0" aria-hidden />
            ) : null}
            {level}
          </button>
        );
      })}
    </div>
  );
}
