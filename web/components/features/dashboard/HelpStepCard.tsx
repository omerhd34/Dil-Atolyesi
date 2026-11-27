import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type HelpStepCardProps = {
  index: number;
  title: string;
  body: string;
  icon: LucideIcon;
  className?: string;
};

export function HelpStepCard({
  index,
  title,
  body,
  icon: Icon,
  className,
}: HelpStepCardProps) {
  const stepLabel = String(index).padStart(2, "0");

  return (
    <li
      className={cn(
        "workshop-motion-card workshop-motion-card--icons-static group relative rounded-2xl border border-border/50 bg-background/30 p-5 shadow-sm",
        "hover:bg-(--glass-btn-hover) dark:border-border/40 dark:bg-background/20",
        className,
      )}
    >
      <div className="grid grid-cols-[1fr_auto] gap-x-3 gap-y-1.5">
        <div className="min-w-0">
          <span
            className="font-display text-xs font-semibold tracking-[0.2em] text-brand-800/60 dark:text-brand-400/60"
            aria-hidden
          >
            {stepLabel}
          </span>
          <h3 className="m-0 mt-1.5 font-display text-base font-semibold leading-tight tracking-tight text-brand-950 dark:text-brand-100">
            {title}
          </h3>
        </div>
        <span
          className={cn(
            "workshop-motion-card-icon flex size-10 shrink-0 self-start items-center justify-center rounded-xl",
            "bg-brand-500/10 text-brand-600/65",
            "group-hover:bg-sky-500/20 group-hover:text-sky-700",
            "dark:bg-brand-400/12 dark:text-brand-400/70",
            "dark:group-hover:bg-sky-500/28 dark:group-hover:text-sky-300",
          )}
          aria-hidden
        >
          <Icon className="size-5 text-current" strokeWidth={1.75} />
        </span>
        <p className="col-span-2 text-sm leading-6 text-brand-600 dark:text-brand-400">
          {body}
        </p>
      </div>
    </li>
  );
}
