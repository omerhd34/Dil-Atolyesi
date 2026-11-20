"use client";

import { useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { PhrasalVerbsTable } from "@/components/features/vocabulary/PhrasalVerbsTable";
import {
  filterPhrasalVerbs,
  phrasalVerbs,
  type PhrasalVerbListFilter,
} from "@/data/vocabulary/phrasalVerbs";
import { useRouter } from "@/i18n/navigation";
import {
  CEFR_LEVEL_FILTER_ACTIVE_CLASS,
  FILTER_CHIP_BUTTON_CLASS,
  VERB_LIST_FILTER_INACTIVE_CLASS,
} from "@/lib/topicAccess";
import { cn } from "@/lib/utils";

export function PhrasalVerbsReferenceSection() {
  const t = useTranslations("Vocabulary");
  const router = useRouter();
  const searchParams = useSearchParams();

  const filterParam = searchParams.get("filter");
  const listFilter: PhrasalVerbListFilter =
    filterParam === "separable" || filterParam === "inseparable"
      ? filterParam
      : "all";

  const filtered = useMemo(
    () => filterPhrasalVerbs(phrasalVerbs, listFilter),
    [listFilter],
  );

  const filterOptions: { id: PhrasalVerbListFilter; label: string }[] = [
    { id: "all", label: t("phrasalVerbsFilterAll") },
    { id: "separable", label: t("phrasalVerbsFilterSeparable") },
    { id: "inseparable", label: t("phrasalVerbsFilterInseparable") },
  ];

  function handleFilterChange(next: PhrasalVerbListFilter) {
    if (next === listFilter) {
      return;
    }

    const params = new URLSearchParams(searchParams.toString());
    if (next === "all") {
      params.delete("filter");
    } else {
      params.set("filter", next);
    }

    const query = params.toString();
    router.replace(
      query
        ? `/atolye/vocabulary/phrasal-verbs?${query}`
        : "/atolye/vocabulary/phrasal-verbs",
      { scroll: false },
    );
  }

  return (
    <section aria-labelledby="phrasal-verbs-heading" className="space-y-6">
      <div>
        <h1 id="phrasal-verbs-heading" className="page-title">
          {t("phrasalVerbsTitle")}
        </h1>
        <p className="page-subtitle max-w-3xl">{t("phrasalVerbsSubtitle")}</p>
      </div>

      <div className="rounded-2xl border border-dashed border-brand-300/80 bg-brand-50/50 px-4 py-3 text-sm text-brand-900 dark:border-brand-700 dark:bg-brand-950/30 dark:text-brand-100">
        {t("phrasalVerbsHint")}
      </div>

      <nav
        role="tablist"
        aria-label={t("phrasalVerbsFilterAria")}
        className="flex flex-wrap gap-2"
      >
        {filterOptions.map((option) => {
          const active = listFilter === option.id;
          return (
            <button
              key={option.id}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => handleFilterChange(option.id)}
              className={cn(
                FILTER_CHIP_BUTTON_CLASS,
                active
                  ? CEFR_LEVEL_FILTER_ACTIVE_CLASS.A1
                  : VERB_LIST_FILTER_INACTIVE_CLASS,
              )}
            >
              {option.label}
            </button>
          );
        })}
      </nav>

      <PhrasalVerbsTable entries={filtered} />
    </section>
  );
}
