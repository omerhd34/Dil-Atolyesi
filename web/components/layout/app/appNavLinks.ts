import type { LucideIcon } from "lucide-react";
import {
  BookA,
  BookOpen,
  CalendarDays,
  ChartColumnIncreasing,
  CircleCheck,
  CircleHelp,
  Headphones,
  Home,
  Languages,
  ListOrdered,
  Mic,
  PenLine,
  SpellCheck2,
} from "lucide-react";
import {
  WORKSHOP_GRAMMER_PATH,
  WORKSHOP_HELP_PATH,
  WORKSHOP_LISTENING_PATH,
  WORKSHOP_PROGRESS_PATH,
  WORKSHOP_READING_PATH,
  WORKSHOP_SPEAKING_PATH,
  WORKSHOP_VOCABULARY_PATH,
  WORKSHOP_WRITING_PATH,
} from "@/lib/workshopSectionRoutes";

export type AppNavTooltipKey = `${AppNavLabelKey}Tooltip`;

export function appNavTooltipKey(labelKey: AppNavLabelKey): AppNavTooltipKey {
  return `${labelKey}Tooltip`;
}

export type AppNavLabelKey =
  | "home"
  | "topics"
  | "vocabulary"
  | "vocabularyStudiedToday"
  | "vocabularyKnown"
  | "vocabularyVerbs"
  | "vocabularyFalseFriends"
  | "listening"
  | "writing"
  | "speaking"
  | "reading"
  | "exercises"
  | "progress"
  | "help";

export type AppNavLink = {
  href: string;
  labelKey: AppNavLabelKey;
  Icon: LucideIcon;
};

export const vocabularySubNav = [
  {
    href: "/atolye/vocabulary/today-worked",
    labelKey: "vocabularyStudiedToday",
    Icon: CalendarDays,
  },
  {
    href: "/atolye/vocabulary/known-words",
    labelKey: "vocabularyKnown",
    Icon: CircleCheck,
  },
  {
    href: "/atolye/vocabulary/verbs",
    labelKey: "vocabularyVerbs",
    Icon: ListOrdered,
  },
  {
    href: "/atolye/vocabulary/false-friends",
    labelKey: "vocabularyFalseFriends",
    Icon: Languages,
  },
] as const satisfies readonly {
  href: string;
  labelKey: AppNavLabelKey;
  Icon: LucideIcon;
}[];

export const appNavLinks: AppNavLink[] = [
  { href: "/atolye", labelKey: "home", Icon: Home },
  {
    href: WORKSHOP_GRAMMER_PATH,
    labelKey: "topics",
    Icon: SpellCheck2,
  },
  {
    href: WORKSHOP_VOCABULARY_PATH,
    labelKey: "vocabulary",
    Icon: BookA,
  },
  {
    href: WORKSHOP_READING_PATH,
    labelKey: "reading",
    Icon: BookOpen,
  },
  {
    href: WORKSHOP_LISTENING_PATH,
    labelKey: "listening",
    Icon: Headphones,
  },
  {
    href: WORKSHOP_WRITING_PATH,
    labelKey: "writing",
    Icon: PenLine,
  },
  {
    href: WORKSHOP_SPEAKING_PATH,
    labelKey: "speaking",
    Icon: Mic,
  },

  {
    href: WORKSHOP_PROGRESS_PATH,
    labelKey: "progress",
    Icon: ChartColumnIncreasing,
  },
  {
    href: WORKSHOP_HELP_PATH,
    labelKey: "help",
    Icon: CircleHelp,
  },
];
