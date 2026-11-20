"use client";

import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

export type VocabularyCategoryTab = "words" | "exercises";

type VocabularyCategoryTabsProps = {
  activeTab: VocabularyCategoryTab;
  onChange: (tab: VocabularyCategoryTab) => void;
};

export function VocabularyCategoryTabs({
  activeTab,
  onChange,
}: VocabularyCategoryTabsProps) {
  const t = useTranslations("Vocabulary");

  return (
    <nav
      aria-label={t("tabsAria")}
      className="flex gap-1 border-b border-border"
    >
      {(
        [
          { id: "words", label: t("tabWords") },
          { id: "exercises", label: t("tabExercises") },
        ] as const
      ).map((tab) => (
        <button
          key={tab.id}
          type="button"
          onClick={() => onChange(tab.id)}
          className={cn(
            "interaction-motion cursor-pointer px-3 py-2 text-base",
            activeTab === tab.id
              ? "font-semibold text-sky-600 dark:text-sky-400"
              : "font-medium text-brand-500 hover:text-sky-700 dark:text-brand-400 dark:hover:text-sky-300",
          )}
          aria-current={activeTab === tab.id ? "page" : undefined}
        >
          {tab.label}
        </button>
      ))}
    </nav>
  );
}
