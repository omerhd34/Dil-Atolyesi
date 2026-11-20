"use client";

import { useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { PrepositionsTable } from "@/components/features/vocabulary/PrepositionsTable";
import {
  filterPrepositions,
  prepositions,
  type PrepositionListFilter,
} from "@/data/vocabulary/prepositions";
import { useRouter } from "@/i18n/navigation";
import {
  CEFR_LEVEL_FILTER_ACTIVE_CLASS,
  FILTER_CHIP_BUTTON_CLASS,
  VERB_LIST_FILTER_INACTIVE_CLASS,
} from "@/lib/topicAccess";
import { cn } from "@/lib/utils";

export function PrepositionsSection() {
  const t = useTranslations("Vocabulary");
  const router = useRouter();
  const searchParams = useSearchParams();

  const filterParam = searchParams.get("filter");
  const listFilter: PrepositionListFilter =
    filterParam === "time" ||
    filterParam === "place" ||
    filterParam === "movement" ||
    filterParam === "other"
      ? filterParam
      : "all";

  const filtered = useMemo(
    () => filterPrepositions(prepositions, listFilter),
    [listFilter],
  );

  const filterOptions: { id: PrepositionListFilter; label: string }[] = [
    { id: "all", label: t("prepositionsFilterAll") },
    { id: "time", label: t("prepositionsFilterTime") },
    { id: "place", label: t("prepositionsFilterPlace") },
    { id: "movement", label: t("prepositionsFilterMovement") },
    { id: "other", label: t("prepositionsFilterOther") },
  ];

  function handleFilterChange(next: PrepositionListFilter) {
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
        ? `/atolye/vocabulary/prepositions?${query}`
        : "/atolye/vocabulary/prepositions",
      { scroll: false },
    );
  }

  return (
    <section aria-labelledby="prepositions-heading" className="space-y-6">
      <div>
        <h1 id="prepositions-heading" className="page-title">
          {t("prepositionsTitle")}
        </h1>
        <p className="page-subtitle max-w-3xl">{t("prepositionsSubtitle")}</p>
      </div>

      <div className="rounded-2xl border border-dashed border-brand-300/80 bg-brand-50/50 px-4 py-3 text-sm text-brand-900 dark:border-brand-700 dark:bg-brand-950/30 dark:text-brand-100">
        {t("prepositionsHint")}
      </div>

      <nav
        role="tablist"
        aria-label={t("prepositionsFilterAria")}
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

      <PrepositionsTable entries={filtered} />
    </section>
  );
}
