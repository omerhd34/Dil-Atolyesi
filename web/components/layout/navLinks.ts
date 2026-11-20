import type { LucideIcon } from "lucide-react";
import { Box, CircleHelp, Mail, Trophy } from "lucide-react";

export const navLinks = [
  { href: "/kazanimlar", labelKey: "benefits", Icon: Trophy },
  { href: "/paketler", labelKey: "packages", Icon: Box },
  { href: "/sss", labelKey: "sss", Icon: CircleHelp },
  { href: "/iletisim", labelKey: "contact", Icon: Mail },
] as const satisfies ReadonlyArray<{
  href: string;
  labelKey: string;
  Icon: LucideIcon;
}>;

export type NavLinkLabelKey = (typeof navLinks)[number]["labelKey"];
