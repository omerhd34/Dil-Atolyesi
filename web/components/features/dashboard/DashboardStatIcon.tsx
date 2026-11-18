import { cn } from "@/lib/utils";

export type DashboardStatIconKind =
  | "levelStatus"
  | "wordTimer"
  | "quickContinue";

const statIcons: Record<
  DashboardStatIconKind,
  { src: string; className?: string }
> = {
  levelStatus: {
    src: "/dashboard/stat-icons/level-status.webp",
    className: "dark:invert",
  },
  wordTimer: {
    src: "/dashboard/stat-icons/word-timer.webp",
    className: "dark:invert",
  },
  quickContinue: {
    src: "/dashboard/stat-icons/quick-continue.webp",
    className: "dark:invert",
  },
};

type DashboardStatIconProps = {
  kind: DashboardStatIconKind;
  className?: string;
};

export function DashboardStatIcon({ kind, className }: DashboardStatIconProps) {
  const { src, className: kindClassName } = statIcons[kind];

  return (
    <img
      src={src}
      alt=""
      aria-hidden
      width={20}
      height={20}
      decoding="async"
      className={cn("size-5 shrink-0 object-contain", kindClassName, className)}
    />
  );
}
