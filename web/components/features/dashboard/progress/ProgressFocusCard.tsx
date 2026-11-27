"use client";

import { useMemo } from "react";
import { useTranslations } from "next-intl";
import { ArrowRight, Sparkles, Target } from "lucide-react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { useLevelStatus } from "@/hooks/useLevelStatus";
import { progressSkillMetaByKey } from "@/lib/progressSkillMeta";
import type { LevelSkillProgress } from "@/lib/levelStatus";
import { cn } from "@/lib/utils";

function pickFocusSkill(
  skills: LevelSkillProgress[],
): LevelSkillProgress | null {
  if (skills.length === 0) {
    return null;
  }
  const incomplete = skills.filter((skill) => skill.percent < 100);
  if (incomplete.length === 0) {
    return null;
  }
  return incomplete.reduce((lowest, skill) =>
    skill.percent < lowest.percent ? skill : lowest,
  );
}

export function ProgressFocusCard() {
  const t = useTranslations("Dashboard");
  const tNav = useTranslations("AppNav");
  const { skills } = useLevelStatus();

  const focusSkill = useMemo(() => pickFocusSkill(skills), [skills]);
  const meta = focusSkill ? progressSkillMetaByKey(focusSkill.key) : undefined;
  const label = meta ? tNav(meta.navKey) : "";
  const Icon = meta?.Icon;

  return (
    <article className="workshop-card progress-focus-card flex h-full flex-col p-4 sm:p-5">
      <p className="workshop-card__label text-sm">
        <Target className="size-4" aria-hidden />
        {t("progressFocusTitle")}
      </p>
      <p className="mt-1 text-xs leading-relaxed text-brand-600 dark:text-brand-400">
        {t("progressFocusSubtitle")}
      </p>

      {focusSkill && meta && Icon ? (
        <div
          className={cn(
            "mt-3 flex flex-1 flex-col rounded-2xl border border-border/60 bg-surface-muted/55 p-4 dark:border-white/10 dark:bg-white/4",
            "shadow-[inset_0_1px_0_0_color-mix(in_srgb,var(--glass-line)_35%,transparent)]",
          )}
          aria-label={t("progressFocusSkillAria", {
            skill: label,
            percent: focusSkill.percent,
          })}
        >
          <div className="flex items-start gap-3">
            <span
              className={cn(
                "inline-flex size-11 shrink-0 items-center justify-center rounded-xl ring-1 ring-black/5 dark:ring-white/10",
                meta.tileClass,
              )}
              aria-hidden
            >
              <Icon className="size-5" strokeWidth={1.75} />
            </span>
            <div className="min-w-0 flex-1">
              <p className="truncate font-display text-base font-semibold tracking-tight text-brand-950 dark:text-brand-50">
                {label}
              </p>
              <p className="mt-0.5 text-xs text-brand-600 dark:text-brand-400">
                {t("progressFocusRemaining")}
              </p>
            </div>
            <p className="shrink-0 font-display text-2xl font-semibold leading-none tracking-tight text-brand-950 tabular-nums dark:text-brand-50">
              %{focusSkill.percent}
            </p>
          </div>

          <div
            className="mt-4 h-2 overflow-hidden rounded-full bg-brand-950/8 dark:bg-white/10"
            role="progressbar"
            aria-valuenow={focusSkill.percent}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label={t("progressFocusSkillAria", {
              skill: label,
              percent: focusSkill.percent,
            })}
          >
            <div
              className={cn(
                "h-full rounded-full transition-[width] duration-300 ease-out",
                meta.barClass,
                focusSkill.percent > 0 && focusSkill.percent < 100 && "min-w-1",
              )}
              style={{ width: `${focusSkill.percent}%` }}
            />
          </div>

          <ButtonLink
            href={meta.href}
            className="mt-4 w-full gap-2"
            size="default"
          >
            {t("progressFocusCta")}
            <ArrowRight className="size-4 shrink-0" aria-hidden />
          </ButtonLink>
        </div>
      ) : (
        <div className="mt-3 flex flex-1 flex-col justify-center rounded-2xl border border-dashed border-border/80 bg-surface-muted/40 px-4 py-5 text-center dark:border-white/15 dark:bg-white/3">
          <Sparkles
            className="mx-auto size-8 text-sky-600 dark:text-sky-300"
            strokeWidth={1.5}
            aria-hidden
          />
          <p className="mt-3 text-sm leading-relaxed text-brand-700 dark:text-brand-300">
            {t("progressFocusAllBalanced")}
          </p>
        </div>
      )}
    </article>
  );
}
