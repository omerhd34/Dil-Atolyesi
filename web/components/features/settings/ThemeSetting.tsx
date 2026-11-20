"use client";

import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import { Check, Moon, Sun } from "lucide-react";
import { useSyncExternalStore } from "react";
import { cn } from "@/lib/utils";

const subscribe = () => () => {};

function useIsMounted() {
  return useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );
}

export function ThemeSetting() {
  const t = useTranslations("Settings");
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useIsMounted();
  const isDark = mounted && resolvedTheme === "dark";

  const options = [
    {
      id: "light" as const,
      selected: mounted && !isDark,
      title: t("themeLight"),
      icon: <Sun className="size-3.5" aria-hidden />,
    },
    {
      id: "dark" as const,
      selected: isDark,
      title: t("themeDark"),
      icon: <Moon className="size-3.5" aria-hidden />,
    },
  ];

  return (
    <ul
      className="grid grid-cols-2 gap-2"
      role="group"
      aria-label={t("appearance")}
    >
      {options.map((option) => (
        <li key={option.id} className="min-w-0">
          <button
            type="button"
            aria-pressed={option.selected}
            disabled={!mounted}
            onClick={() => setTheme(option.id)}
            className={cn(
              "settings-tile-button interaction-motion group/settings-tile relative flex h-full w-full min-w-0 cursor-pointer items-center gap-2 rounded-xl border px-3 py-2.5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/40 disabled:cursor-not-allowed disabled:opacity-60",
              option.selected
                ? "border-sky-500/45 bg-sky-500/5 dark:border-sky-400/40 dark:bg-sky-400/10"
                : "border-border bg-background/80 hover:border-sky-500/45 hover:bg-sky-500/5 dark:bg-brand-950/40 dark:hover:text-sky-300",
            )}
          >
            <span className="inline-flex size-7 shrink-0 items-center justify-center rounded-lg bg-brand-100 text-brand-700 transition-colors duration-950 ease-[cubic-bezier(0.33,0,0.2,1)] group-hover/settings-tile:text-sky-700 dark:bg-brand-900 dark:text-brand-200 dark:group-hover/settings-tile:text-sky-300">
              {option.icon}
            </span>
            <span className="min-w-0 flex-1 pe-5 text-sm font-medium text-brand-950 dark:text-brand-100">
              {option.title}
            </span>
            <span
              className={cn(
                "absolute top-1/2 right-2.5 inline-flex size-5 -translate-y-1/2 items-center justify-center rounded-full transition-colors",
                option.selected
                  ? "bg-sky-600 text-white dark:bg-sky-500 dark:text-sky-950"
                  : "bg-brand-100 text-transparent dark:bg-brand-900",
              )}
              aria-hidden
            >
              <Check className="size-3" strokeWidth={2.5} />
            </span>
          </button>
        </li>
      ))}
    </ul>
  );
}
