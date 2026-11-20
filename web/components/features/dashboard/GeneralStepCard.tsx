import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type GeneralStepCardProps = {
  index: number;
  title: string;
  body: string;
  icon: LucideIcon;
  className?: string;
};

export function GeneralStepCard({
  index,
  title,
  body,
  icon: Icon,
  className,
}: GeneralStepCardProps) {
  const stepLabel = String(index).padStart(2, "0");

  return (
    <li
      className={cn(
        "panel-motion-card panel-motion-card--icons-static group relative flex flex-col gap-3 rounded-2xl border border-border/50 bg-background/30 p-5 shadow-sm",
        "hover:bg-(--glass-btn-hover) dark:border-border/40 dark:bg-background/20",
        className,
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <span
          className="font-display text-xs font-semibold tracking-[0.2em] text-brand-800/60 dark:text-brand-400/60"
          aria-hidden
        >
          {stepLabel}
        </span>
        <span
          className={cn(
            "panel-motion-card-icon flex size-10 shrink-0 items-center justify-center rounded-xl",
            "bg-brand-500/10 text-brand-600/65",
            "group-hover:bg-sky-500/20 group-hover:text-sky-700",
            "dark:bg-brand-400/12 dark:text-brand-400/70",
            "dark:group-hover:bg-sky-500/28 dark:group-hover:text-sky-300",
          )}
          aria-hidden
        >
          <Icon className="size-5 text-current" strokeWidth={1.75} />
        </span>
      </div>
      <div className="space-y-1.5">
        <h3 className="section-title text-base">{title}</h3>
        <p className="text-sm leading-6 text-brand-600 dark:text-brand-400">
          {body}
        </p>
      </div>
    </li>
  );
}
