"use client";

import { useMemo, useState, type ReactNode } from "react";
import { useTranslations } from "next-intl";
import { CheckCheck, ChevronRight, Trash2 } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { NotificationFeaturedAlert } from "@/components/features/dashboard/NotificationFeaturedAlert";
import { NotificationItem } from "@/components/features/dashboard/NotificationItem";
import { useAppNotifications } from "@/hooks/useAppNotifications";
import { formatNotificationTime } from "@/lib/notificationsPanelUtils";
import type {
  AppNotification,
  AppNotificationType,
} from "@/lib/notificationsStorage";
import { WORKSHOP_NOTIFICATIONS_PATH } from "@/lib/workshopSectionRoutes";
import { cn } from "@/lib/utils";

type NotificationFilter = "all" | AppNotificationType;

const notificationWorkshopButtonClassName =
  "cursor-pointer rounded-md outline-none focus-visible:ring-2 focus-visible:ring-ring/50";

const notificationWorkshopTabClassName = cn(
  notificationWorkshopButtonClassName,
  "notification-filter-tab inline-flex shrink-0 items-center gap-1.5 border-b-2 px-2.5 py-2 text-xs font-medium transition-none rounded-t-lg",
);

type NotificationsPanelProps = {
  layout: "popover" | "page";
  onItemOpen?: () => void;
  showPageLink?: boolean;
};

export function NotificationsPanel({
  layout,
  onItemOpen,
  showPageLink = layout === "popover",
}: NotificationsPanelProps) {
  const t = useTranslations("Dashboard");
  const {
    notifications,
    unreadCount,
    markRead,
    markAllRead,
    dismiss,
    dismissAll,
  } = useAppNotifications();
  const [filter, setFilter] = useState<NotificationFilter>("all");
  const isPage = layout === "page";

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
    const todayItems = filtered.filter((item) => {
      const created = new Date(item.createdAt);
      return (
        created.getFullYear() === now.getFullYear() &&
        created.getMonth() === now.getMonth() &&
        created.getDate() === now.getDate()
      );
    });
    const earlierItems = filtered.filter((item) => {
      const created = new Date(item.createdAt);
      return !(
        created.getFullYear() === now.getFullYear() &&
        created.getMonth() === now.getMonth() &&
        created.getDate() === now.getDate()
      );
    });
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
                onItemOpen?.();
              }}
              onDismiss={() => dismiss(item.id)}
            />
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "flex flex-col overflow-hidden",
        isPage &&
          "workshop-card rounded-2xl border border-border bg-card text-foreground shadow-sm",
      )}
    >
      {isPage ? (
        <header className="border-b border-border px-4 py-4 md:px-6">
          <h1 id="notifications-heading" className="page-title">
            {t("notifications")}
          </h1>
        </header>
      ) : null}

      {!isCompletelyEmpty ? (
        <div className="flex shrink-0 items-center justify-between gap-3 border-b border-border px-4 py-3">
          <div className="flex w-full items-center justify-between gap-3">
            {unreadCount > 0 ? (
              <button
                type="button"
                className={cn(
                  notificationWorkshopButtonClassName,
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
                notificationWorkshopButtonClassName,
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
                  notificationWorkshopTabClassName,
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
          isCompletelyEmpty ? "space-y-0" : "space-y-3",
          isPage ? "max-h-none flex-1" : "max-h-80",
        )}
      >
        {showFeatured && featured ? (
          <NotificationFeaturedAlert
            item={featured}
            reviewLabel={t("notificationsReview")}
            onOpen={() => {
              markRead(featured.id);
              onItemOpen?.();
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
        {showPageLink ? (
          <Link
            href={WORKSHOP_NOTIFICATIONS_PATH}
            data-btn-motion="off"
            onClick={onItemOpen}
            className={cn(
              notificationWorkshopButtonClassName,
              "notification-settings-link flex items-center justify-between gap-2 px-4 py-3 text-sm font-medium text-brand-800 hover:bg-muted/70 dark:text-brand-100 dark:hover:bg-white/5",
            )}
          >
            {t("notificationsOpenPage")}
            <ChevronRight
              className="notification-settings-chevron size-4 opacity-60"
              aria-hidden
            />
          </Link>
        ) : null}
        <Link
          href="/atolye/ayarlar#bildirimler"
          data-btn-motion="off"
          onClick={onItemOpen}
          className={cn(
            notificationWorkshopButtonClassName,
            "notification-settings-link flex items-center justify-between gap-2 px-4 py-3 text-sm font-medium text-brand-800 hover:bg-muted/70 dark:text-brand-100 dark:hover:bg-white/5",
            showPageLink && "border-t border-border",
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
}
