"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";
import { useTranslations } from "next-intl";
import { Bell, CheckCheck, ChevronRight, Trash2 } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/Button";
import { SidebarMenuButton, useSidebar } from "@/components/ui/sidebar";
import { NotificationFeaturedAlert } from "@/components/features/dashboard/NotificationFeaturedAlert";
import { NotificationItem } from "@/components/features/dashboard/NotificationItem";
import { useAppNotifications } from "@/hooks/useAppNotifications";
import type {
  AppNotification,
  AppNotificationType,
} from "@/lib/notificationsStorage";
import { sidebarNavButtonClassName } from "@/components/layout/app/sidebarNavButton";
import { cn } from "@/lib/utils";

type NotificationFilter = "all" | AppNotificationType;

const PANEL_WIDTH = 352;
const PANEL_GAP = 25;
const VIEWPORT_MARGIN = 16;

const notificationPanelButtonClassName =
  "cursor-pointer rounded-md outline-none focus-visible:ring-2 focus-visible:ring-ring/50";

const notificationPanelTabClassName = cn(
  notificationPanelButtonClassName,
  "notification-filter-tab inline-flex shrink-0 items-center gap-1.5 border-b-2 px-2.5 py-2 text-xs font-medium transition-none rounded-t-lg",
);

function isSameLocalDay(left: Date, right: Date): boolean {
  return (
    left.getFullYear() === right.getFullYear() &&
    left.getMonth() === right.getMonth() &&
    left.getDate() === right.getDate()
  );
}

function formatNotificationTime(iso: string): string {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) {
    return "";
  }

  const dateLabel = new Intl.DateTimeFormat("tr-TR", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(date);
  const weekday = new Intl.DateTimeFormat("tr-TR", {
    weekday: "long",
  }).format(date);
  const time = new Intl.DateTimeFormat("tr-TR", {
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);

  const nbsp = "\u00A0";
  return `${dateLabel}${nbsp}${weekday}${nbsp}${time}`;
}

type NotificationsMenuProps = {
  variant?: "inline" | "sidebar";
  triggerClassName?: string;
};

export function NotificationsMenu({
  variant = "inline",
  triggerClassName,
}: NotificationsMenuProps) {
  const t = useTranslations("Dashboard");
  const {
    notifications,
    unreadCount,
    open,
    toggleMenu,
    closeMenu,
    markRead,
    markAllRead,
    dismiss,
    dismissAll,
  } = useAppNotifications();
  const rootRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const [filter, setFilter] = useState<NotificationFilter>("all");
  const [panelStyle, setPanelStyle] = useState<CSSProperties>({});
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
    const width = Math.min(PANEL_WIDTH, vw - VIEWPORT_MARGIN * 2);

    if (isSidebar) {
      const left = Math.min(
        rect.right + PANEL_GAP,
        vw - width - VIEWPORT_MARGIN,
      );
      setPanelStyle({
        left: Math.max(VIEWPORT_MARGIN, left),
        bottom: Math.max(VIEWPORT_MARGIN, vh - rect.bottom),
        width,
        maxHeight: vh - VIEWPORT_MARGIN * 2,
      });
      return;
    }

    const top = rect.bottom + 8;
    setPanelStyle({
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
        !panelRef.current?.contains(target)
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

  const counts = useMemo(() => {
    const quiz = notifications.filter((item) => item.type === "quiz_ready");
    const study = notifications.filter(
      (item) => item.type === "learn_missed_day",
    );
    return {
      all: notifications.length,
      quiz_ready: quiz.length,
      learn_missed_day: study.length,
    };
  }, [notifications]);

  const featured = useMemo(
    () =>
      notifications.find((item) => item.type === "quiz_ready" && !item.read) ??
      null,
    [notifications],
  );

  const showFeatured = Boolean(featured) && filter !== "learn_missed_day";

  const filtered = useMemo(() => {
    const byType =
      filter === "all"
        ? notifications
        : notifications.filter((item) => item.type === filter);

    if (!showFeatured || !featured) {
      return byType;
    }

    return byType.filter((item) => item.id !== featured.id);
  }, [featured, filter, notifications, showFeatured]);

  const { today, earlier } = useMemo(() => {
    const now = new Date();
    const todayItems = filtered.filter((item) =>
      isSameLocalDay(new Date(item.createdAt), now),
    );
    const earlierItems = filtered.filter(
      (item) => !isSameLocalDay(new Date(item.createdAt), now),
    );
    return { today: todayItems, earlier: earlierItems };
  }, [filtered]);

  const filters: { id: NotificationFilter; label: string; count: number }[] = [
    { id: "all", label: t("notificationsFilterAll"), count: counts.all },
    {
      id: "quiz_ready",
      label: t("notificationsFilterQuiz"),
      count: counts.quiz_ready,
    },
    {
      id: "learn_missed_day",
      label: t("notificationsFilterStudy"),
      count: counts.learn_missed_day,
    },
  ];

  const isCompletelyEmpty = notifications.length === 0;

  function typeLabel(type: AppNotificationType): string {
    return type === "quiz_ready"
      ? t("notificationsTypeQuiz")
      : t("notificationsTypeStudy");
  }

  function renderGroup(label: string, items: AppNotification[]): ReactNode {
    if (items.length === 0) {
      return null;
    }

    return (
      <div className="space-y-1">
        <p className="px-3 pt-2 text-[0.65rem] font-semibold tracking-[0.12em] text-brand-600 uppercase dark:text-brand-400">
          {label}
        </p>
        <ul className="space-y-0.5">
          {items.map((item) => (
            <NotificationItem
              key={item.id}
              item={item}
              typeLabel={typeLabel(item.type)}
              timeLabel={formatNotificationTime(item.createdAt)}
              dismissLabel={t("notificationsDismiss")}
              onOpen={() => {
                markRead(item.id);
                closeMenu();
              }}
              onDismiss={() => dismiss(item.id)}
            />
          ))}
        </ul>
      </div>
    );
  }

  const panel = (
    <div
      ref={panelRef}
      role="dialog"
      aria-label={t("notifications")}
      style={{
        ...panelStyle,
        backgroundColor: "var(--background, #ffffff)",
        backgroundImage: "linear-gradient(var(--sidebar), var(--sidebar))",
      }}
      className={cn(
        "fixed z-1000 flex flex-col overflow-hidden rounded-2xl border border-border text-foreground shadow-2xl",
      )}
    >
      {!isCompletelyEmpty ? (
        <div className="flex shrink-0 items-center justify-between gap-3 border-b border-border px-4 py-3">
          <div className="flex w-full items-center justify-between gap-3">
            {unreadCount > 0 ? (
              <button
                type="button"
                className={cn(
                  notificationPanelButtonClassName,
                  "inline-flex gap-1 px-1 py-0.5 text-xs font-medium text-brand-600 hover:text-sky-700 dark:text-brand-400 dark:hover:text-sky-300",
                )}
                onClick={markAllRead}
              >
                <CheckCheck className="size-3.5" aria-hidden />
                {t("notificationsMarkAllRead")}
              </button>
            ) : null}
            <button
              type="button"
              className={cn(
                notificationPanelButtonClassName,
                "ml-auto inline-flex items-center gap-1 px-1 py-0.5 text-xs font-medium text-brand-600 hover:text-destructive dark:text-brand-400 dark:hover:text-red-300",
              )}
              onClick={dismissAll}
            >
              {t("notificationsDismissAll")}
              <Trash2 className="size-3.5" aria-hidden />
            </button>
          </div>
        </div>
      ) : null}

      {!isCompletelyEmpty ? (
        <div
          className="flex shrink-0 gap-1 overflow-x-auto border-b border-border px-2"
          role="tablist"
          aria-label={t("notifications")}
        >
          {filters.map((item) => {
            const active = filter === item.id;
            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={active}
                data-btn-motion="off"
                className={cn(
                  notificationPanelTabClassName,
                  active
                    ? "border-sky-600 bg-sky-500/15 font-semibold text-sky-950 dark:border-sky-400 dark:bg-sky-500/22 dark:text-sky-50"
                    : "border-transparent text-brand-600/90 hover:bg-muted/40 hover:text-brand-800 dark:text-brand-400/90 dark:hover:bg-white/5 dark:hover:text-brand-100",
                )}
                onClick={() => setFilter(item.id)}
              >
                {item.label}
                <span
                  className={cn(
                    "inline-flex min-w-5 items-center justify-center rounded-full border px-1.5 py-0.5 text-[0.65rem] font-semibold transition-none",
                    active
                      ? "border-sky-700/50 bg-sky-600 text-white dark:border-sky-300/60 dark:bg-sky-400 dark:text-sky-950"
                      : "border-border bg-muted/80 text-brand-600 dark:border-white/10 dark:bg-white/5 dark:text-brand-400",
                  )}
                >
                  {item.count}
                </span>
              </button>
            );
          })}
        </div>
      ) : null}

      <div
        className={cn(
          "min-h-0 overflow-y-auto p-2",
          isCompletelyEmpty ? "space-y-0" : "max-h-80 space-y-3",
        )}
      >
        {showFeatured && featured ? (
          <NotificationFeaturedAlert
            item={featured}
            reviewLabel={t("notificationsReview")}
            onOpen={() => {
              markRead(featured.id);
              closeMenu();
            }}
          />
        ) : null}

        {filtered.length === 0 && !showFeatured ? (
          <p
            className={cn(
              "px-2 text-center text-sm text-brand-600 dark:text-brand-400",
              isCompletelyEmpty ? "py-4" : "py-8",
            )}
          >
            {t("notificationsEmpty")}
          </p>
        ) : (
          <>
            {renderGroup(t("notificationsToday"), today)}
            {renderGroup(t("notificationsEarlier"), earlier)}
          </>
        )}
      </div>

      <div className="shrink-0 border-t border-border">
        <Link
          href="/panel/ayarlar#bildirimler"
          data-btn-motion="off"
          onClick={closeMenu}
          className={cn(
            notificationPanelButtonClassName,
            "notification-settings-link flex items-center justify-between gap-2 px-4 py-3 text-sm font-medium text-brand-800 hover:bg-muted/70 dark:text-brand-100 dark:hover:bg-white/5",
          )}
        >
          {t("notificationsSettings")}
          <ChevronRight
            className="notification-settings-chevron size-4 opacity-60"
            aria-hidden
          />
        </Link>
      </div>
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
        ? createPortal(panel, document.body)
        : null}
    </div>
  );
}
