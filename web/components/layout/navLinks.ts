import type { LucideIcon } from "lucide-react";
import { Box, CircleHelp, GraduationCap, Mail, Trophy } from "lucide-react";

export type MarketingNavItem =
  | {
      kind: "section";
      sectionId: string;
      labelKey: string;
      Icon: LucideIcon;
    }
  | {
      kind: "route";
      href: "/iletisim";
      labelKey: string;
      Icon: LucideIcon;
    };

export const navLinks: MarketingNavItem[] = [
  {
    kind: "section",
    sectionId: "egitim-sistemi",
    labelKey: "educationSystem",
    Icon: GraduationCap,
  },
  {
    kind: "section",
    sectionId: "kazanimlar",
    labelKey: "benefits",
    Icon: Trophy,
  },
  {
    kind: "section",
    sectionId: "paketler",
    labelKey: "packages",
    Icon: Box,
  },
  {
    kind: "section",
    sectionId: "sss",
    labelKey: "sss",
    Icon: CircleHelp,
  },
  {
    kind: "route",
    href: "/iletisim",
    labelKey: "contact",
    Icon: Mail,
  },
];

export type NavLinkLabelKey = MarketingNavItem["labelKey"];

export function marketingNavItemKey(item: MarketingNavItem): string {
  return item.kind === "section" ? item.sectionId : item.href;
}