import type { CefrLevel } from "@/data/grammar/dashboardTopics";
import { awardPointsActivity } from "@/lib/points/award";
import {
  clientStorageEvent,
  clientStorageKey,
  migrateLocalStorageKey,
} from "@/lib/clientStorageKeys";
import { CEFR_LEVEL_ORDER } from "@/lib/topicAccess";

const STORAGE_SUFFIX = "passed-level-exams";
export const PASSED_LEVEL_EXAMS_COOKIE = clientStorageKey(STORAGE_SUFFIX);
export const LEGACY_PASSED_LEVEL_EXAMS_COOKIES = [
  "dilatolyesi-passed-level-exams",
] as const;
export const PASSED_LEVEL_EXAMS_CHANGED_EVENT = clientStorageEvent(
  "passed-level-exams-changed",
);

const CEFR_LEVEL_SET = new Set<string>(CEFR_LEVEL_ORDER);

function canUseDom(): boolean {
  return typeof window !== "undefined";
}

function storageKey(): string {
  return migrateLocalStorageKey(STORAGE_SUFFIX);
}

export function readPassedLevelExamsFromCookieValues(
  ...rawValues: Array<string | undefined>
): CefrLevel[] {
  for (const raw of rawValues) {
    const parsed = parsePassedLevelExams(raw);
    if (parsed.length > 0) {
      return parsed;
    }
  }
  return [];
}

function isCefrLevel(value: unknown): value is CefrLevel {
  return typeof value === "string" && CEFR_LEVEL_SET.has(value);
}

function normalizeLevels(value: unknown): CefrLevel[] {
  if (!Array.isArray(value)) {
    return [];
  }
  const filtered = value.filter(isCefrLevel);
  return CEFR_LEVEL_ORDER.filter((level) => filtered.includes(level));
}

export function parsePassedLevelExams(
  raw: string | undefined | null,
): CefrLevel[] {
  if (!raw) {
    return [];
  }

  const candidates = [raw];
  try {
    candidates.push(decodeURIComponent(raw));
  } catch {}

  for (const candidate of candidates) {
    try {
      return normalizeLevels(JSON.parse(candidate));
    } catch {}
  }

  return [];
}

function emitChanged(): void {
  if (!canUseDom()) {
    return;
  }
  window.dispatchEvent(new Event(PASSED_LEVEL_EXAMS_CHANGED_EVENT));
}

function syncCookie(levels: readonly CefrLevel[]): void {
  if (!canUseDom()) {
    return;
  }

  const value = encodeURIComponent(JSON.stringify(levels));
  const maxAge = 60 * 60 * 24 * 365;
  document.cookie = `${PASSED_LEVEL_EXAMS_COOKIE}=${value}; path=/; max-age=${maxAge}; samesite=lax`;
  for (const legacy of LEGACY_PASSED_LEVEL_EXAMS_COOKIES) {
    document.cookie = `${legacy}=; path=/; max-age=0; samesite=lax`;
  }
}

function readFromCookie(): CefrLevel[] {
  if (!canUseDom()) {
    return [];
  }

  const cookieParts = document.cookie.split("; ");
  const names = [
    PASSED_LEVEL_EXAMS_COOKIE,
    ...LEGACY_PASSED_LEVEL_EXAMS_COOKIES,
  ];
  for (const name of names) {
    const match = cookieParts.find((part) => part.startsWith(`${name}=`));
    if (match) {
      return parsePassedLevelExams(match.slice(name.length + 1));
    }
  }

  return [];
}

export function readPassedLevelExams(): CefrLevel[] {
  if (!canUseDom()) {
    return [];
  }

  try {
    const raw = window.localStorage.getItem(storageKey());
    if (raw !== null) {
      return parsePassedLevelExams(raw);
    }
  } catch {}

  return readFromCookie();
}

export function writePassedLevelExams(levels: readonly CefrLevel[]): void {
  if (!canUseDom()) {
    return;
  }

  const unique = normalizeLevels([...levels]);
  window.localStorage.setItem(storageKey(), JSON.stringify(unique));
  syncCookie(unique);
  emitChanged();
}

export function markLevelExamPassed(level: CefrLevel): CefrLevel[] {
  const current = readPassedLevelExams();
  if (current.includes(level)) {
    return current;
  }
  const next = [...current, level];
  writePassedLevelExams(next);
  awardPointsActivity("GRAMMAR_LEVEL_EXAM", `grammar:level:${level}`);
  return next;
}

export function clearPassedLevelExams(): void {
  if (!canUseDom()) {
    return;
  }

  window.localStorage.removeItem(storageKey());
  for (const name of [
    PASSED_LEVEL_EXAMS_COOKIE,
    ...LEGACY_PASSED_LEVEL_EXAMS_COOKIES,
  ]) {
    document.cookie = `${name}=; path=/; max-age=0; samesite=lax`;
  }
  emitChanged();
}

export { didPassExamScore } from "@/lib/examPassThreshold";
