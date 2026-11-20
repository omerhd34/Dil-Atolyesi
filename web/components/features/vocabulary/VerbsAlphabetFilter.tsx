"use client";

import { useTranslations } from "next-intl";
import {
  CEFR_LEVEL_FILTER_ACTIVE_CLASS,
  VERB_LIST_FILTER_INACTIVE_CLASS,
} from "@/lib/topicAccess";
import { VERBS_ALPHABET_LETTERS } from "@/lib/vocabulary/sortVerbs";
import { cn } from "@/lib/utils";

const LETTER_BUTTON_CLASS = cn(
  "interaction-motion inline-flex min-h-7 min-w-7 cursor-pointer items-center justify-center rounded-md px-1.5 text-xs font-semibold tabular-nums",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/40",
);

type VerbsAlphabetFilterProps = {
  activeLetter: string | null;
  availableLetters: ReadonlySet<string>;
  onLetterChange: (letter: string | null) => void;
  className?: string;
};

export function VerbsAlphabetFilter({
  activeLetter,
  availableLetters,
  onLetterChange,
  className,
}: VerbsAlphabetFilterProps) {
  const t = useTranslations("Vocabulary");

  return (
    <nav
      role="tablist"
      aria-label={t("verbsLetterFilterAria")}
      className={cn("flex flex-wrap items-center gap-1", className)}
    >
      <button
        type="button"
        role="tab"
        aria-selected={activeLetter === null}
        onClick={() => onLetterChange(null)}
        className={cn(
          LETTER_BUTTON_CLASS,
          activeLetter === null
            ? CEFR_LEVEL_FILTER_ACTIVE_CLASS.A1
            : VERB_LIST_FILTER_INACTIVE_CLASS,
        )}
      >
        {t("verbsFilterAll")}
      </button>
      {VERBS_ALPHABET_LETTERS.filter((letter) =>
        availableLetters.has(letter),
      ).map((letter) => {
        const active = activeLetter === letter;
        return (
          <button
            key={letter}
            type="button"
            role="tab"
            aria-selected={active}
            onClick={() => onLetterChange(letter)}
            className={cn(
              LETTER_BUTTON_CLASS,
              active
                ? CEFR_LEVEL_FILTER_ACTIVE_CLASS.A1
                : VERB_LIST_FILTER_INACTIVE_CLASS,
            )}
          >
            {letter}
          </button>
        );
      })}
    </nav>
  );
}
