import { ChevronRight } from "lucide-react";
import type { ReactNode } from "react";

const LEVELS = ["A1", "A2", "B1", "B2", "C1", "C2"] as const;

type HeroLevelPathProps = {
  label: string;
  caption: ReactNode;
};

const levelPillBase =
  "inline-flex shrink-0 items-center justify-center rounded-full border px-3 py-2 font-display text-sm font-semibold tracking-tight sm:px-4 sm:py-2.5 sm:text-base lg:text-lg";

export function HeroLevelPath({ label, caption }: HeroLevelPathProps) {
  return (
    <div className="space-y-6">
      <p className="text-sm font-semibold tracking-[0.18em] text-brand-800/80 uppercase dark:text-brand-400/85">
        {label}
      </p>

      <ol
        aria-label={label}
        className="flex w-full max-w-full flex-nowrap items-center justify-center gap-1 overflow-x-auto overscroll-x-contain [-ms-overflow-style:none] scrollbar-none sm:gap-1.5 [&::-webkit-scrollbar]:hidden"
      >
        {LEVELS.flatMap((level, index) => {
          const pill = (
            <li key={level}>
              <span
                className={
                  index === 0
                    ? `${levelPillBase} border-sky-500/35 bg-sky-500/12 text-sky-800 shadow-[inset_0_0_0_1px_rgb(255_255_255/35%)] dark:border-sky-400/35 dark:bg-sky-500/18 dark:text-sky-200`
                    : `${levelPillBase} border-border/80 bg-surface/70 text-brand-900 dark:bg-brand-950/40 dark:text-brand-100`
                }
              >
                {level}
              </span>
            </li>
          );

          if (index === 0) {
            return [pill];
          }

          return [
            <li
              key={`${level}-sep`}
              aria-hidden="true"
              className="flex shrink-0 items-center justify-center px-0.5 sm:px-1"
            >
              <ChevronRight
                className="size-4 text-brand-500/70 sm:size-4 dark:text-brand-400/75"
                strokeWidth={2.25}
              />
            </li>,
            pill,
          ];
        })}
      </ol>

      <p className="text-sm leading-6 text-brand-600 sm:text-base sm:leading-7 dark:text-brand-400">
        {caption}
      </p>
    </div>
  );
}
