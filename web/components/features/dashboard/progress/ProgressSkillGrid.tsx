"use client";

import { useTranslations } from "next-intl";
import { ChevronRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { useLevelStatus } from "@/hooks/useLevelStatus";
import { progressSkillMetaByKey } from "@/lib/progressSkillMeta";
import type { LevelSkillProgress } from "@/lib/levelStatus";
import { cn } from "@/lib/utils";

function SkillTile({ skill }: { skill: LevelSkillProgress }) {
  const t = useTranslations("Dashboard");
  const tNav = useTranslations("AppNav");
  const meta = progressSkillMetaByKey(skill.key);
  if (!meta) {
    return null;
  }
  const Icon = meta.Icon;
  const label = tNav(meta.navKey);

  return (
    <li className="min-w-0">
      <Link
        href={meta.href}
        className="group flex h-full flex-col rounded-2xl border border-border/60 bg-surface-muted/50 p-4 transition-colors hover:border-sky-500/35 hover:bg-sky-500/5 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50 dark:border-white/10 dark:bg-white/3 dark:hover:bg-sky-400/10"
        aria-label={t("levelStatusSkillProgressAria", {
          skill: label,
          percent: skill.percent,
        })}
      >
        <div className="flex items-start justify-between gap-2">
          <span
            className={cn(
              "inline-flex size-10 items-center justify-center rounded-xl",
              meta.tileClass,
            )}
            aria-hidden
          >
            <Icon className="size-4" strokeWidth={1.75} />
          </span>
          <ChevronRight
            className="size-4 shrink-0 text-brand-400 opacity-0 transition-opacity group-hover:opacity-100 dark:text-brand-500"
            aria-hidden
          />
        </div>
        <p className="mt-3 truncate text-sm font-semibold text-brand-900 dark:text-brand-100">
          {label}
        </p>
        <p className="mt-0.5 text-xs text-brand-600 dark:text-brand-400">
          %{skill.percent}
        </p>
        <div
          className="mt-3 h-2 overflow-hidden rounded-full bg-brand-950/8 dark:bg-white/10"
          aria-hidden
        >
          <div
            className={cn(
              "h-full rounded-full transition-[width] duration-300 ease-out",
              meta.barClass,
              skill.percent > 0 && skill.percent < 100 && "min-w-1",
            )}
            style={{ width: `${skill.percent}%` }}
          />
        </div>
      </Link>
    </li>
  );
}

export function ProgressSkillGrid() {
  const t = useTranslations("Dashboard");
  const { skills } = useLevelStatus();

  return (
    <section
      aria-labelledby="progress-skills-heading"
      className="workshop-card space-y-4 p-5 sm:p-6"
    >
      <div className="min-w-0">
        <h2 id="progress-skills-heading" className="section-title">
          {t("progressSkillsTitle")}
        </h2>
        <p className="page-subtitle">{t("progressSkillsSubtitle")}</p>
      </div>

      <ul className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {skills.map((skill) => (
          <SkillTile key={skill.key} skill={skill} />
        ))}
      </ul>
    </section>
  );
}
