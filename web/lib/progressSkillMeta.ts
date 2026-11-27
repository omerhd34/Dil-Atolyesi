import type { LucideIcon } from "lucide-react";
import {
  BookA,
  BookOpen,
  Headphones,
  Mic,
  PenLine,
  SpellCheck2,
} from "lucide-react";
import type { LevelSkillKey } from "@/lib/levelStatus";
import {
  WORKSHOP_GRAMMER_PATH,
  WORKSHOP_LISTENING_PATH,
  WORKSHOP_READING_PATH,
  WORKSHOP_SPEAKING_PATH,
  WORKSHOP_VOCABULARY_PATH,
  WORKSHOP_WRITING_PATH,
} from "@/lib/workshopSectionRoutes";

export type ProgressSkillNavKey =
  | "topics"
  | "vocabulary"
  | "reading"
  | "listening"
  | "writing"
  | "speaking";

export type ProgressSkillMeta = {
  key: LevelSkillKey;
  navKey: ProgressSkillNavKey;
  href: string;
  Icon: LucideIcon;
  tileClass: string;
  barClass: string;
};

export const PROGRESS_SKILL_META: ProgressSkillMeta[] = [
  {
    key: "grammar",
    navKey: "topics",
    href: WORKSHOP_GRAMMER_PATH,
    Icon: SpellCheck2,
    tileClass:
      "bg-sky-500/12 text-sky-800 dark:bg-sky-400/15 dark:text-sky-100",
    barClass: "bg-sky-600 dark:bg-sky-300",
  },
  {
    key: "vocabulary",
    navKey: "vocabulary",
    href: WORKSHOP_VOCABULARY_PATH,
    Icon: BookA,
    tileClass:
      "bg-teal-500/12 text-teal-800 dark:bg-teal-400/15 dark:text-teal-100",
    barClass: "bg-teal-600 dark:bg-teal-300",
  },
  {
    key: "reading",
    navKey: "reading",
    href: WORKSHOP_READING_PATH,
    Icon: BookOpen,
    tileClass:
      "bg-indigo-500/12 text-indigo-800 dark:bg-indigo-400/15 dark:text-indigo-100",
    barClass: "bg-indigo-600 dark:bg-indigo-300",
  },
  {
    key: "listening",
    navKey: "listening",
    href: WORKSHOP_LISTENING_PATH,
    Icon: Headphones,
    tileClass:
      "bg-violet-500/12 text-violet-800 dark:bg-violet-400/15 dark:text-violet-100",
    barClass: "bg-violet-600 dark:bg-violet-300",
  },
  {
    key: "writing",
    navKey: "writing",
    href: WORKSHOP_WRITING_PATH,
    Icon: PenLine,
    tileClass:
      "bg-amber-500/12 text-amber-900 dark:bg-amber-400/15 dark:text-amber-100",
    barClass: "bg-amber-600 dark:bg-amber-300",
  },
  {
    key: "speaking",
    navKey: "speaking",
    href: WORKSHOP_SPEAKING_PATH,
    Icon: Mic,
    tileClass:
      "bg-rose-500/12 text-rose-800 dark:bg-rose-400/15 dark:text-rose-100",
    barClass: "bg-rose-600 dark:bg-rose-300",
  },
];

export function progressSkillMetaByKey(
  key: LevelSkillKey,
): ProgressSkillMeta | undefined {
  return PROGRESS_SKILL_META.find((meta) => meta.key === key);
}
