"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type CSSProperties,
} from "react";
import { createPortal } from "react-dom";
import { useTranslations } from "next-intl";
import { Bell } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { NotificationsPanel } from "@/components/features/dashboard/NotificationsPanel";
import { useAppNotifications } from "@/hooks/useAppNotifications";
import { sidebarNavButtonClassName } from "@/components/layout/app/sidebarNavButton";
import { SidebarMenuButton, useSidebar } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

const NOTIFICATIONS_POPOVER_WIDTH = 352;
const NOTIFICATIONS_POPOVER_GAP = 25;
const VIEWPORT_MARGIN = 16;

type NotificationsMenuProps = {
  variant?: "inline" | "sidebar";
  triggerClassName?: string;
};

export function NotificationsMenu({
  variant = "inline",
  triggerClassName,
}: NotificationsMenuProps) {
  const t = useTranslations("Dashboard");
  const { unreadCount, open, toggleMenu, closeMenu } = useAppNotifications();
  const rootRef = useRef<HTMLDivElement>(null);
  const workshopPopoverRef = useRef<HTMLDivElement>(null);
  const [workshopPopoverStyle, setWorkshopPopoverStyle] =
    useState<CSSProperties>({});
  const isSidebar = variant === "sidebar";
  const { isMobile } = useSidebar();

  const updatePosition = useCallback(() => {
    const root = rootRef.current;
    if (!root) {
      return;
    }

    const rect = root.getBoundingClientRect();
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const width = Math.min(
      NOTIFICATIONS_POPOVER_WIDTH,
      vw - VIEWPORT_MARGIN * 2,
    );

    if (isSidebar) {
      const left = Math.min(
        rect.right + NOTIFICATIONS_POPOVER_GAP,
        vw - width - VIEWPORT_MARGIN,
      );
      setWorkshopPopoverStyle({
        left: Math.max(VIEWPORT_MARGIN, left),
        bottom: Math.max(VIEWPORT_MARGIN, vh - rect.bottom),
        width,
        maxHeight: vh - VIEWPORT_MARGIN * 2,
      });
      return;
    }

    const top = rect.bottom + 8;
    setWorkshopPopoverStyle({
      top,
      right: Math.max(VIEWPORT_MARGIN, vw - rect.right),
      width,
      maxHeight: vh - top - VIEWPORT_MARGIN,
    });
  }, [isSidebar]);

  useLayoutEffect(() => {
    if (!open) {
      return;
    }

    updatePosition();
    window.addEventListener("resize", updatePosition);
    window.addEventListener("scroll", updatePosition, true);
    return () => {
      window.removeEventListener("resize", updatePosition);
      window.removeEventListener("scroll", updatePosition, true);
    };
  }, [open, updatePosition]);

  useEffect(() => {
    if (!open) {
      return;
    }

    function handlePointerDown(event: MouseEvent) {
      const target = event.target as Node;
      if (
        !rootRef.current?.contains(target) &&
        !workshopPopoverRef.current?.contains(target)
      ) {
        closeMenu();
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeMenu();
      }
    }

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, closeMenu]);

  const workshopPopover = (
    <div
      ref={workshopPopoverRef}
      role="dialog"
      aria-label={t("notifications")}
      style={{
        ...workshopPopoverStyle,
        backgroundColor: "var(--background, #ffffff)",
        backgroundImage: "linear-gradient(var(--sidebar), var(--sidebar))",
      }}
      className="fixed z-1000 flex flex-col overflow-hidden rounded-2xl border border-border text-foreground shadow-2xl"
    >
      <NotificationsPanel layout="popover" onItemOpen={closeMenu} />
    </div>
  );

  const notificationTrigger = isSidebar ? (
    <SidebarMenuButton
      type="button"
      isActive={open}
      tooltip={isMobile ? undefined : t("notificationsTooltip")}
      className={cn(sidebarNavButtonClassName, triggerClassName)}
      aria-label={t("notifications")}
      aria-expanded={open}
      aria-haspopup="dialog"
      onClick={toggleMenu}
    >
      <Bell className="size-4" strokeWidth={1.75} aria-hidden />
      <span>{t("notifications")}</span>
    </SidebarMenuButton>
  ) : (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      className="size-11 text-brand-800 shadow-none hover:bg-transparent hover:text-brand-950 dark:text-brand-400 dark:hover:bg-transparent dark:hover:text-brand-100 [&_svg:not([class*='size-'])]:size-5"
      aria-label={t("notifications")}
      aria-expanded={open}
      aria-haspopup="dialog"
      title={t("notifications")}
      onClick={toggleMenu}
    >
      <Bell className="size-5" strokeWidth={1.75} aria-hidden />
    </Button>
  );

  return (
    <div
      ref={rootRef}
      className={cn(
        "relative",
        isSidebar
          ? "w-full"
          : "flex h-full flex-col items-center justify-center",
      )}
    >
      <span
        className={cn("bar-badged", isSidebar && "is-nav flex w-full")}
        {...(isSidebar ? { "data-nav-lift": "" } : {})}
      >
        {notificationTrigger}
        {unreadCount > 0 ? (
          <>
            <span
              className={cn("bar-badge", unreadCount > 9 && "is-wide")}
              aria-hidden="true"
            >
              {unreadCount > 99 ? "99+" : unreadCount}
            </span>
            <span className="sr-only">
              {t("unreadNotifications", { count: unreadCount })}
            </span>
          </>
        ) : null}
      </span>

      {open && typeof document !== "undefined"
        ? createPortal(workshopPopover, document.body)
        : null}
    </div>
  );
}
