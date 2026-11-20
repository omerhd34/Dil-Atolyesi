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
  Link2,
  ListOrdered,
  MapPin,
  Mic,
  PenLine,
  SpellCheck2,
} from "lucide-react";

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
  | "vocabularyPhrasalVerbs"
  | "vocabularyPrepositions"
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
  {
    href: "/atolye/vocabulary/phrasal-verbs",
    labelKey: "vocabularyPhrasalVerbs",
    Icon: Link2,
  },
  {
    href: "/atolye/vocabulary/prepositions",
    labelKey: "vocabularyPrepositions",
    Icon: MapPin,
  },
] as const satisfies readonly {
  href: string;
  labelKey: AppNavLabelKey;
  Icon: LucideIcon;
}[];

export const appNavLinks: AppNavLink[] = [
  { href: "/atolye", labelKey: "home", Icon: Home },
  {
    href: "/atolye#grammer",
    labelKey: "topics",
    Icon: SpellCheck2,
  },
  {
    href: "/atolye#vocabulary",
    labelKey: "vocabulary",
    Icon: BookA,
  },
  {
    href: "/atolye#reading",
    labelKey: "reading",
    Icon: BookOpen,
  },
  {
    href: "/atolye#listening",
    labelKey: "listening",
    Icon: Headphones,
  },
  {
    href: "/atolye#writing",
    labelKey: "writing",
    Icon: PenLine,
  },
  {
    href: "/atolye#speaking",
    labelKey: "speaking",
    Icon: Mic,
  },

  {
    href: "/atolye#progress",
    labelKey: "progress",
    Icon: ChartColumnIncreasing,
  },
  {
    href: "/atolye#help",
    labelKey: "help",
    Icon: CircleHelp,
  },
];
