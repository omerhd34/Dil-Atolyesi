"use client";

import { useLocale, useTranslations } from "next-intl";
import { Check, Languages } from "lucide-react";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing, type AppLocale } from "@/i18n/routing";
import { UI_LOCALE_OPTIONS } from "@/lib/localeUi";
import { cn } from "@/lib/utils";

export function LocaleSetting() {
  const t = useTranslations("Settings");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function selectLocale(nextLocale: AppLocale) {
    if (nextLocale === locale) {
      return;
    }

    if (!(routing.locales as readonly string[]).includes(nextLocale)) {
      return;
    }

    router.replace(pathname, { locale: nextLocale, scroll: false });
  }

  return (
    <div className="space-y-2">
      <p className="text-sm font-medium text-brand-950 dark:text-brand-100">
        {t("localeLabel")}
      </p>
      <ul
        className="grid grid-cols-2 gap-2"
        role="group"
        aria-label={t("localeLabel")}
      >
        {UI_LOCALE_OPTIONS.map((option) => {
          const selected = option.available && option.id === locale;
          const title =
            option.id === "tr" ? t("localeTurkish") : t("localeEnglish");

          return (
            <li key={option.id} className="min-w-0">
              <button
                type="button"
                aria-pressed={selected}
                disabled={!option.available}
                aria-label={
                  option.available
                    ? title
                    : `${title} (${t("localeComingSoon")})`
                }
                onClick={() => {
                  if (option.available) {
                    selectLocale(option.id as AppLocale);
                  }
                }}
                className={cn(
                  "settings-tile-button interaction-motion group/settings-tile relative flex h-full w-full min-w-0 cursor-pointer items-center gap-2 rounded-xl border px-3 py-2.5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/40 disabled:cursor-not-allowed disabled:opacity-60",
                  selected
                    ? "border-sky-500/45 bg-sky-500/5 dark:border-sky-400/40 dark:bg-sky-400/10"
                    : "border-border bg-background/80 hover:border-sky-500/45 hover:bg-sky-500/5 disabled:hover:border-border disabled:hover:bg-background/80 dark:bg-brand-950/40 dark:disabled:hover:bg-brand-950/40",
                )}
              >
                <span className="inline-flex size-7 shrink-0 items-center justify-center rounded-lg bg-brand-100 text-brand-700 transition-colors duration-950 ease-[cubic-bezier(0.33,0,0.2,1)] group-hover/settings-tile:text-sky-700 dark:bg-brand-900 dark:text-brand-200 dark:group-hover/settings-tile:text-sky-300">
                  <Languages className="size-3.5" aria-hidden />
                </span>
                <span className="min-w-0 flex-1 pe-5 text-sm font-medium text-brand-950 dark:text-brand-100">
                  {title}
                </span>
                <span
                  className={cn(
                    "absolute top-1/2 right-2.5 inline-flex size-5 -translate-y-1/2 items-center justify-center rounded-full transition-colors",
                    selected
                      ? "bg-sky-600 text-white dark:bg-sky-500 dark:text-sky-950"
                      : "bg-brand-100 text-transparent dark:bg-brand-900",
                  )}
                  aria-hidden
                >
                  <Check className="size-3" strokeWidth={2.5} />
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
