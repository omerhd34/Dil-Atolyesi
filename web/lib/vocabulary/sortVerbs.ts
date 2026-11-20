import type { EnglishVerb } from "@/data/vocabulary/verbs";

export type VerbTableSortKey = "default" | "infinitive" | "type";

export type VerbListFilter = "all" | "regular" | "irregular";

export const VERBS_ALPHABET_LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(
  "",
) as readonly string[];

export function parseVerbLetterFilter(raw: string | null): string | null {
  if (!raw) {
    return null;
  }
  const normalized = raw.trim().toUpperCase();
  if (normalized.length !== 1) {
    return null;
  }
  if (!VERBS_ALPHABET_LETTERS.includes(normalized)) {
    return null;
  }
  return normalized;
}

export function verbInfinitiveInitial(verb: EnglishVerb): string {
  const first = verb.infinitive.trim().charAt(0).toUpperCase();
  return VERBS_ALPHABET_LETTERS.includes(first) ? first : "";
}

export function filterVerbsByInitialLetter(
  verbs: readonly EnglishVerb[],
  letter: string | null,
): EnglishVerb[] {
  if (!letter) {
    return [...verbs];
  }
  const target = letter.toUpperCase();
  return verbs.filter((verb) => verbInfinitiveInitial(verb) === target);
}

export function collectVerbInitialLetters(
  verbs: readonly EnglishVerb[],
): ReadonlySet<string> {
  const letters = new Set<string>();
  for (const verb of verbs) {
    const initial = verbInfinitiveInitial(verb);
    if (initial) {
      letters.add(initial);
    }
  }
  return letters;
}

function compareInfinitive(a: EnglishVerb, b: EnglishVerb): number {
  return a.infinitive.localeCompare(b.infinitive, "en", {
    sensitivity: "base",
  });
}

export function applyVerbTableSort(
  verbs: readonly EnglishVerb[],
  sortKey: VerbTableSortKey,
  listFilter: VerbListFilter,
  infinitiveDescending: boolean,
): EnglishVerb[] {
  const items = [...verbs];

  if (sortKey === "infinitive") {
    return items.sort((a, b) => {
      const cmp = compareInfinitive(a, b);
      return infinitiveDescending ? -cmp : cmp;
    });
  }

  if (sortKey === "type" && listFilter === "all") {
    return items.sort((a, b) => {
      if (a.regular !== b.regular) {
        return a.regular ? 1 : -1;
      }
      return compareInfinitive(a, b);
    });
  }

  return items.sort((a, b) => {
    if (listFilter === "all" && a.regular !== b.regular) {
      return a.regular ? -1 : 1;
    }
    return compareInfinitive(a, b);
  });
}
