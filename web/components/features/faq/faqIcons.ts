import {
  Bot,
  Clock,
  GraduationCap,
  HelpCircle,
  Mail,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import type { FaqKey } from "@/components/features/faq/faqKeys";

export const FAQ_ICONS: Record<FaqKey, LucideIcon> = {
  what: HelpCircle,
  level: GraduationCap,
  ai: Bot,
  free: Sparkles,
  pace: Clock,
  contact: Mail,
};
