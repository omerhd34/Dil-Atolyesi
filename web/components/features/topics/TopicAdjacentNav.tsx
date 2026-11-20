"use client";

import { ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { ButtonLink } from "@/components/ui/ButtonLink";
import {
  getAdjacentGrammarTopics,
  getGrammarTopicWorkshopHref,
} from "@/lib/topicNavigation";

type TopicAdjacentNavProps = {
  topicId: string;
  activeTab: "lesson" | "exercises" | "exam";
};

export function TopicAdjacentNav({
  topicId,
  activeTab,
}: TopicAdjacentNavProps) {
  const t = useTranslations("Topic");
  const { next } = getAdjacentGrammarTopics(topicId);

  if (!next) {
    return null;
  }

  const href = getGrammarTopicWorkshopHref(next, activeTab);

  return (
    <nav
      aria-label={t("topicAdjacentNavAria")}
      className="flex justify-end border-t border-border pt-6"
    >
      <ButtonLink
        href={href}
        variant="outline"
        className="gap-2"
        aria-label={`${t("nextTopic")}: ${next.title}`}
      >
        {t("nextTopic")}
        <ChevronRight className="size-4" aria-hidden />
      </ButtonLink>
    </nav>
  );
}
