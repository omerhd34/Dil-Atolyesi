import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type GeneralRuleItemProps = {
  icon: LucideIcon;
  children: string;
  className?: string;
};

export function GeneralRuleItem({
  icon: Icon,
  children,
  className,
}: GeneralRuleItemProps) {
  return (
    <li
      className={cn(
        "panel-motion-card panel-motion-card--icons-static group flex gap-3.5 rounded-2xl border border-border/50 bg-background/30 p-4 shadow-sm",
        "hover:bg-(--glass-btn-hover) dark:border-border/40 dark:bg-background/20",
        className,
      )}
    >
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
      <p className="min-w-0 text-sm leading-6 text-brand-600 dark:text-brand-400">
        {children}
      </p>
    </li>
  );
}
