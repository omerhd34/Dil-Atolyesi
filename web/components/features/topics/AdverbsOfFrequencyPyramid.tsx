"use client";

import { LessonSpeakButton } from "@/components/features/topics/LessonSpeakButton";
import { resolveLessonExampleTr } from "@/lib/grammar/lessonExampleTr";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

type FrequencyRow = {
  speak: string;
  display: string;
  percent: number;
  widthPct: number;
  surface: string;
  badge: string;
  glow: string;
};

const ROWS: FrequencyRow[] = [
  {
    speak: "Always",
    display: "ALWAYS",
    percent: 100,
    widthPct: 100,
    surface:
      "from-emerald-300/95 via-emerald-400/90 to-teal-400/85 ring-emerald-500/25 dark:from-emerald-500/35 dark:via-emerald-600/30 dark:to-teal-600/25 dark:ring-emerald-400/20",
    badge: "bg-emerald-700 dark:bg-emerald-600",
    glow: "bg-emerald-400/30",
  },
  {
    speak: "Usually",
    display: "USUALLY",
    percent: 90,
    widthPct: 90,
    surface:
      "from-rose-300/95 via-rose-400/90 to-pink-400/85 ring-rose-500/25 dark:from-rose-500/35 dark:via-rose-600/30 dark:to-pink-600/25 dark:ring-rose-400/20",
    badge: "bg-rose-700 dark:bg-rose-600",
    glow: "bg-rose-400/30",
  },
  {
    speak: "Often",
    display: "OFTEN",
    percent: 70,
    widthPct: 70,
    surface:
      "from-amber-300/95 via-yellow-400/90 to-amber-400/85 ring-amber-500/25 dark:from-amber-500/35 dark:via-yellow-600/30 dark:to-amber-600/25 dark:ring-amber-400/20",
    badge: "bg-amber-700 dark:bg-amber-600",
    glow: "bg-amber-400/30",
  },
  {
    speak: "Sometimes",
    display: "SOMETIMES",
    percent: 50,
    widthPct: 50,
    surface:
      "from-orange-300/95 via-orange-400/90 to-amber-500/85 ring-orange-500/25 dark:from-orange-500/35 dark:via-orange-600/30 dark:to-amber-600/25 dark:ring-orange-400/20",
    badge: "bg-orange-700 dark:bg-orange-600",
    glow: "bg-orange-400/30",
  },
  {
    speak: "Hardly ever",
    display: "HARDLY EVER",
    percent: 10,
    widthPct: 34,
    surface:
      "from-violet-300/95 via-purple-400/90 to-violet-400/85 ring-violet-500/25 dark:from-violet-500/35 dark:via-purple-600/30 dark:to-violet-600/25 dark:ring-violet-400/20",
    badge: "bg-violet-700 dark:bg-violet-600",
    glow: "bg-violet-400/30",
  },
  {
    speak: "Never",
    display: "NEVER",
    percent: 0,
    widthPct: 28,
    surface:
      "from-cyan-300/95 via-sky-400/90 to-cyan-500/85 ring-cyan-500/25 dark:from-cyan-500/35 dark:via-sky-600/30 dark:to-cyan-600/25 dark:ring-cyan-400/20",
    badge: "bg-cyan-700 dark:bg-cyan-600",
    glow: "bg-cyan-400/30",
  },
];

type AdverbsOfFrequencyPyramidProps = {
  ariaLabel: string;
};

export function AdverbsOfFrequencyPyramid({
  ariaLabel,
}: AdverbsOfFrequencyPyramidProps) {
  const t = useTranslations("Topic");

  return (
    <figure
      className="mx-auto w-full max-w-xl select-none"
      aria-label={ariaLabel}
    >
      <div className="relative overflow-hidden rounded-3xl border border-border/50 bg-linear-to-br from-background via-brand-50/50 to-background p-5 shadow-(--glass-shadow) sm:p-8 dark:from-brand-950 dark:via-brand-900/80 dark:to-brand-950">
        <div
          className="pointer-events-none absolute -top-16 -right-12 size-48 rounded-full bg-rose-300/25 blur-3xl dark:bg-rose-500/10"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -bottom-20 -left-10 size-56 rounded-full bg-cyan-300/25 blur-3xl dark:bg-cyan-500/10"
          aria-hidden
        />

        <div className="relative mb-5 flex flex-col items-center gap-1 sm:mb-6">
          <span className="font-display text-xs font-semibold tracking-[0.2em] text-brand-500 uppercase dark:text-brand-400">
            {t("adverbsFrequencyScaleTitle")}
          </span>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span>{t("adverbsFrequencyMore")}</span>
            <span
              className="inline-block h-px w-8 bg-linear-to-r from-emerald-500 via-amber-400 to-cyan-500"
              aria-hidden
            />
            <span>{t("adverbsFrequencyLess")}</span>
          </div>
        </div>

        <div className="relative mx-auto flex max-w-md flex-col items-center gap-2 sm:gap-2.5">
          <svg
            className="pointer-events-none absolute inset-x-4 top-0 bottom-0 z-0 w-[calc(100%-2rem)] text-brand-400/35 dark:text-brand-500/25"
            viewBox="0 0 200 320"
            preserveAspectRatio="none"
            aria-hidden
          >
            <path
              d="M 100 8 L 8 312 L 192 312 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.25"
              strokeDasharray="5 6"
              vectorEffect="non-scaling-stroke"
            />
          </svg>

          <ol className="relative z-10 m-0 flex w-full list-none flex-col items-center gap-2 p-0 sm:gap-2.5">
            {ROWS.map((row) => {
              const meaningTr = resolveLessonExampleTr(row.speak, "");

              return (
                <li
                  key={row.speak}
                  className="flex justify-center"
                  style={{ width: `${row.widthPct}%` }}
                >
                  <div
                    className={cn(
                      "group relative w-full overflow-hidden rounded-2xl bg-linear-to-r p-px shadow-sm ring-1 transition-[transform,box-shadow] duration-200 hover:scale-[1.02] hover:shadow-md",
                      row.surface,
                    )}
                  >
                    <div
                      className={cn(
                        "pointer-events-none absolute -top-6 -right-6 size-20 rounded-full opacity-0 blur-2xl transition-opacity duration-200 group-hover:opacity-100",
                        row.glow,
                      )}
                      aria-hidden
                    />

                    <div className="flex items-center gap-2 rounded-[calc(1rem-1px)] bg-white/55 px-2.5 py-2 backdrop-blur-sm sm:gap-3 sm:px-3.5 sm:py-2.5 dark:bg-brand-950/45">
                      <span
                        className={cn(
                          "flex size-9 shrink-0 items-center justify-center rounded-xl font-display text-[0.65rem] font-bold text-white tabular-nums shadow-sm sm:size-10 sm:text-xs",
                          row.badge,
                        )}
                      >
                        {row.percent}%
                      </span>

                      <div className="min-w-0 flex-1 leading-tight">
                        <p className="font-display text-xs font-bold tracking-[0.12em] text-brand-950 sm:text-sm dark:text-brand-50">
                          {row.display}
                        </p>
                        <p className="truncate text-[0.7rem] text-brand-800/80 sm:text-xs dark:text-brand-200/85">
                          {meaningTr}
                        </p>
                      </div>

                      <LessonSpeakButton
                        text={row.speak}
                        size="icon-sm"
                        className="shrink-0 opacity-80 transition-opacity group-hover:opacity-100"
                      />
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </figure>
  );
}
