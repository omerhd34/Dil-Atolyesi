import type { LucideIcon } from "lucide-react";
import {
  CalendarDays,
  CircleCheck,
  ClipboardList,
  Library,
  ListOrdered,
} from "lucide-react";
import type { SidebarNavIconKind } from "@/components/layout/app/SidebarNavIcon";

export type AppNavTooltipKey = `${AppNavLabelKey}Tooltip`;

export function appNavTooltipKey(labelKey: AppNavLabelKey): AppNavTooltipKey {
  return `${labelKey}Tooltip`;
}

export type AppNavLabelKey =
  | "home"
  | "overview"
  | "topics"
  | "vocabulary"
  | "vocabularyWords"
  | "vocabularyStudiedToday"
  | "vocabularyKnown"
  | "vocabularyVerbs"
  | "listening"
  | "writing"
  | "speaking"
  | "reading"
  | "exercises"
  | "progress";

export type AppNavLink =
  | {
      href: string;
      labelKey: AppNavLabelKey;
      iconKind: SidebarNavIconKind;
    }
  | {
      href: string;
      labelKey: AppNavLabelKey;
      Icon: LucideIcon;
    };

export const vocabularySubNav = [
  {
    href: "/panel#vocabulary",
    labelKey: "vocabularyWords",
    Icon: Library,
  },
  {
    href: "/panel/vocabulary/today-worked",
    labelKey: "vocabularyStudiedToday",
    Icon: CalendarDays,
  },
  {
    href: "/panel/vocabulary/known-words",
    labelKey: "vocabularyKnown",
    Icon: CircleCheck,
  },
  {
    href: "/panel/vocabulary/verbs",
    labelKey: "vocabularyVerbs",
    Icon: ListOrdered,
  },
] as const satisfies readonly {
  href: string;
  labelKey: AppNavLabelKey;
  Icon: LucideIcon;
}[];

export const appNavLinks: AppNavLink[] = [
  { href: "/panel", labelKey: "home", iconKind: "home" },
  { href: "/panel#general", labelKey: "overview", Icon: ClipboardList },
  {
    href: "/panel#grammer",
    labelKey: "topics",
    iconKind: "grammar",
  },
  {
    href: "/panel#vocabulary",
    labelKey: "vocabulary",
    iconKind: "vocabulary",
  },
  {
    href: "/panel#reading",
    labelKey: "reading",
    iconKind: "reading",
  },
  {
    href: "/panel#listening",
    labelKey: "listening",
    iconKind: "listening",
  },
  {
    href: "/panel#writing",
    labelKey: "writing",
    iconKind: "writing",
  },
  {
    href: "/panel#speaking",
    labelKey: "speaking",
    iconKind: "speaking",
  },
  {
    href: "/panel#progress",
    labelKey: "progress",
    iconKind: "progress",
  },
];
