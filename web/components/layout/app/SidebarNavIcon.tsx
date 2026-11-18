import { cn } from "@/lib/utils";

export type SidebarNavIconKind =
  | "home"
  | "notifications"
  | "logout"
  | "settings"
  | "grammar"
  | "vocabulary"
  | "reading"
  | "writing"
  | "speaking"
  | "listening"
  | "progress";

const navIcons: Record<SidebarNavIconKind, string> = {
  home: "/dashboard/nav-icons/home.webp",
  notifications: "/dashboard/nav-icons/notifications.webp",
  logout: "/dashboard/nav-icons/logout.webp",
  settings: "/dashboard/nav-icons/settings.webp",
  grammar: "/dashboard/nav-icons/grammar.webp",
  vocabulary: "/dashboard/nav-icons/vocabulary.webp",
  reading: "/dashboard/nav-icons/reading.webp",
  writing: "/dashboard/nav-icons/writing.webp",
  speaking: "/dashboard/nav-icons/speaking.webp",
  listening: "/dashboard/nav-icons/listening.webp",
  progress: "/dashboard/nav-icons/progress.webp",
};

type SidebarNavIconProps = {
  kind: SidebarNavIconKind;
  className?: string;
};

export function SidebarNavIcon({ kind, className }: SidebarNavIconProps) {
  return (
    <img
      src={navIcons[kind]}
      alt=""
      aria-hidden
      width={16}
      height={16}
      decoding="async"
      className={cn(
        "size-4 shrink-0 object-contain opacity-90 dark:invert",
        className,
      )}
    />
  );
}
