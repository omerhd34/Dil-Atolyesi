"use client";

import { cn } from "@/lib/utils";
import { useSidebar } from "@/components/ui/sidebar";

const sidebarToggleIcons = {
  expand: "/dashboard/nav-icons/sidebar-expand.webp",
  collapse: "/dashboard/nav-icons/sidebar-collapse.webp",
} as const;

type SidebarToggleIconProps = {
  className?: string;
};

export function SidebarToggleIcon({ className }: SidebarToggleIconProps) {
  const { state, isMobile, openMobile } = useSidebar();
  const collapsed = state === "collapsed";
  const showExpand = isMobile ? !openMobile : collapsed;

  return (
    <img
      src={showExpand ? sidebarToggleIcons.expand : sidebarToggleIcons.collapse}
      alt=""
      aria-hidden
      width={18}
      height={18}
      decoding="async"
      className={cn(
        "size-4.5 shrink-0 object-contain opacity-90 dark:invert",
        className,
      )}
    />
  );
}
