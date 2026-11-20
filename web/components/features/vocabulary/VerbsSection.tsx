"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";
import {
  VocabularyCategoryTabs,
  type VocabularyCategoryTab,
} from "@/components/features/vocabulary/VocabularyCategoryTabs";
import { VerbsTable } from "@/components/features/vocabulary/VerbsTable";
import { TopicExercisesView } from "@/components/features/topics/TopicExercisesView";
import {
  allEnglishVerbs,
  irregularVerbs,
  regularVerbs,
  VERBS_REFERENCE_ID,
} from "@/data/vocabulary/verbs";
import {
  generateVerbExercises,
  type VerbExerciseSessionSeeds,
} from "@/lib/vocabulary/generateVerbExercises";
import type { ExerciseType } from "@/data/grammar/types";
import { VerbsAlphabetFilter } from "@/components/features/vocabulary/VerbsAlphabetFilter";
import {
  applyVerbTableSort,
  collectVerbInitialLetters,
  filterVerbsByInitialLetter,
  parseVerbLetterFilter,
  type VerbListFilter,
  type VerbTableSortKey,
} from "@/lib/vocabulary/sortVerbs";
import { vocabularyExerciseProgressKey } from "@/lib/vocabularySectionProgress";
import {
  CEFR_LEVEL_FILTER_ACTIVE_CLASS,
  FILTER_CHIP_BUTTON_CLASS,
  VERB_LIST_FILTER_INACTIVE_CLASS,
} from "@/lib/topicAccess";
import { useRouter } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

export type { VerbListFilter } from "@/lib/vocabulary/sortVerbs";

export function VerbsSection() {
  const t = useTranslations("Vocabulary");
  const router = useRouter();
  const searchParams = useSearchParams();

  const tab: VocabularyCategoryTab =
    searchParams.get("tab") === "exercises" ? "exercises" : "words";

  const filterParam = searchParams.get("filter");
  const listFilter: VerbListFilter =
    filterParam === "regular" || filterParam === "irregular"
      ? filterParam
      : "all";

  const letterFilter = parseVerbLetterFilter(searchParams.get("letter"));

  const [sortKey, setSortKey] = useState<VerbTableSortKey>("default");
  const [infinitiveDescending, setInfinitiveDescending] = useState(false);

  useEffect(() => {
    setSortKey("default");
    setInfinitiveDescending(false);
  }, [listFilter]);

  function createVerbExerciseSeeds(): VerbExerciseSessionSeeds {
    return {
      multiple_choice: crypto.randomUUID(),
      fill_blank: crypto.randomUUID(),
      matching: crypto.randomUUID(),
      listening: crypto.randomUUID(),
      true_false: crypto.randomUUID(),
      crossword: crypto.randomUUID(),
    };
  }

  const [exerciseSeeds, setExerciseSeeds] = useState(createVerbExerciseSeeds);

  const refreshExerciseSet = useCallback((type?: ExerciseType) => {
    setExerciseSeeds((prev) => {
      if (type) {
        return { ...prev, [type]: crypto.randomUUID() };
      }
      return {
        ...prev,
        multiple_choice: crypto.randomUUID(),
        fill_blank: crypto.randomUUID(),
      };
    });
  }, []);

  const exercises = useMemo(
    () =>
      generateVerbExercises(allEnglishVerbs, VERBS_REFERENCE_ID, exerciseSeeds),
    [exerciseSeeds],
  );

  function handleSortInfinitive() {
    if (sortKey !== "infinitive") {
      setSortKey("infinitive");
      setInfinitiveDescending(true);
      return;
    }
    setInfinitiveDescending((prev) => !prev);
  }

  function handleSortType() {
    if (listFilter !== "all") {
      return;
    }
    setInfinitiveDescending(false);
    setSortKey((prev) => (prev === "type" ? "default" : "type"));
  }

  function handleTabChange(next: VocabularyCategoryTab) {
    if (next === tab) {
      return;
    }

    const params = new URLSearchParams(searchParams.toString());
    if (next === "exercises") {
      params.set("tab", "exercises");
    } else {
      params.delete("tab");
    }

    const query = params.toString();
    router.replace(
      query ? `/atolye/vocabulary/verbs?${query}` : "/atolye/vocabulary/verbs",
      { scroll: false },
    );
  }

  function buildVerbsListUrl(params: URLSearchParams): string {
    const query = params.toString();
    return query
      ? `/atolye/vocabulary/verbs?${query}`
      : "/atolye/vocabulary/verbs";
  }

  function handleFilterChange(next: VerbListFilter) {
    if (next === listFilter) {
      return;
    }

    const params = new URLSearchParams(searchParams.toString());
    if (next === "all") {
      params.delete("filter");
    } else {
      params.set("filter", next);
    }
    if (tab === "exercises") {
      params.set("tab", "exercises");
    }

    router.replace(buildVerbsListUrl(params), { scroll: false });
  }

  function handleLetterChange(next: string | null) {
    const resolved =
      next && letterFilter === next.toUpperCase()
        ? null
        : (next?.toUpperCase() ?? null);

    if (resolved === letterFilter) {
      return;
    }

    const params = new URLSearchParams(searchParams.toString());
    if (resolved) {
      params.set("letter", resolved);
    } else {
      params.delete("letter");
    }

    router.replace(buildVerbsListUrl(params), { scroll: false });
  }

  const sortedVerbsBeforeLetter = useMemo(() => {
    const source =
      listFilter === "regular"
        ? regularVerbs
        : listFilter === "irregular"
          ? irregularVerbs
          : allEnglishVerbs;
    return applyVerbTableSort(
      source,
      sortKey,
      listFilter,
      infinitiveDescending,
    );
  }, [listFilter, sortKey, infinitiveDescending]);

  const availableLetters = useMemo(
    () => collectVerbInitialLetters(sortedVerbsBeforeLetter),
    [sortedVerbsBeforeLetter],
  );

  useEffect(() => {
    if (!letterFilter || availableLetters.has(letterFilter)) {
      return;
    }
    const params = new URLSearchParams(searchParams.toString());
    params.delete("letter");
    router.replace(buildVerbsListUrl(params), { scroll: false });
  }, [availableLetters, letterFilter, router, searchParams]);

  const listVerbs = useMemo(
    () => filterVerbsByInitialLetter(sortedVerbsBeforeLetter, letterFilter),
    [sortedVerbsBeforeLetter, letterFilter],
  );

  const filterOptions: { id: VerbListFilter; label: string }[] = [
    { id: "all", label: t("verbsFilterAll") },
    { id: "regular", label: t("verbsFilterRegular") },
    { id: "irregular", label: t("verbsFilterIrregular") },
  ];

  return (
    <section aria-labelledby="verbs-heading" className="space-y-6">
      <div>
        <h1 id="verbs-heading" className="page-title">
          {t("verbsTitle")}
        </h1>
        <p className="page-subtitle max-w-3xl">{t("verbsSubtitle")}</p>
      </div>

      <VocabularyCategoryTabs activeTab={tab} onChange={handleTabChange} />

      {tab === "words" ? (
        <div className="space-y-4">
          <div className="flex w-full flex-wrap items-center justify-between gap-x-4 gap-y-2">
            <nav
              role="tablist"
              aria-label={t("verbsFilterAria")}
              className="flex shrink-0 flex-wrap items-center gap-2"
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

            <VerbsAlphabetFilter
              activeLetter={letterFilter}
              availableLetters={availableLetters}
              onLetterChange={handleLetterChange}
              className="ml-auto min-w-0 justify-end"
            />
          </div>

          <div
            className={cn(
              "grid rounded-2xl border border-dashed border-brand-300/80 bg-brand-50/50 px-4 py-3 text-sm text-brand-900",
              "dark:border-brand-700 dark:bg-brand-950/30 dark:text-brand-100",
              "*:col-start-1 *:row-start-1",
            )}
          >
            <p
              className={cn(
                "interaction-motion",
                listFilter !== "irregular" && "pointer-events-none opacity-0",
              )}
              aria-hidden={listFilter !== "irregular"}
            >
              {t("verbsIrregularHint")}
            </p>
            <p
              className={cn(
                "interaction-motion",
                listFilter === "irregular" && "pointer-events-none opacity-0",
              )}
              aria-hidden={listFilter === "irregular"}
            >
              {t("verbsRegularHint")}
            </p>
          </div>

          <VerbsTable
            verbs={listVerbs}
            listFilter={listFilter}
            sortKey={sortKey}
            infinitiveDescending={infinitiveDescending}
            onSortInfinitive={handleSortInfinitive}
            onSortType={handleSortType}
          />
        </div>
      ) : (
        <TopicExercisesView
          progressKey={vocabularyExerciseProgressKey(VERBS_REFERENCE_ID)}
          exercises={exercises}
          showHints={false}
          onExerciseSessionStart={refreshExerciseSet}
          typeDescOverrides={{
            matching: t("verbsFormMatchingDesc"),
          }}
        />
      )}
    </section>
  );
}
