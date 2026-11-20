"use client";

import { useTranslations } from "next-intl";
import { BookOpen, ClipboardCheck, PencilLine } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { CardFooter } from "@/components/ui/Card";
import type { DashboardTopic } from "@/data/grammar/dashboardTopics";
import { useTopicProgress } from "@/hooks/useTopicProgress";
import { getDistinctSecondaryTitle } from "@/lib/bilingualTitle";
import { EnglishUiHint } from "@/components/ui/EnglishUiHint";
import {
  DashboardItemCardHeader,
  dashboardItemDescription,
  dashboardItemTitleSecondary,
} from "@/components/features/dashboard/DashboardItemCardHeader";
import {
  DashboardProgressCard,
  dashboardItemCardFooterClass,
} from "@/components/features/dashboard/DashboardProgressCard";

type TopicCardProps = {
  topic: DashboardTopic;
  index: number;
  locked?: boolean;
};

export function TopicCard({ topic, index, locked = false }: TopicCardProps) {
  const t = useTranslations("Dashboard");
  const progress = Math.min(100, Math.max(0, useTopicProgress(topic.id)));
  const titleEng = getDistinctSecondaryTitle(topic.title, topic.titleEng);
  const titleEx = getDistinctSecondaryTitle(topic.titleEng, topic.titleEx);

  return (
    <DashboardProgressCard
      progress={progress}
      locked={locked}
      progressAriaLabel={t("topicProgressAria", { progress })}
    >
      <DashboardItemCardHeader
        indexBadge={
          <Badge variant="secondary">{t("topicLabel", { index })}</Badge>
        }
        progressLabel={`%${progress}`}
        locked={locked}
        title={topic.title}
        titleSecondary={titleEng ? dashboardItemTitleSecondary(titleEng) : null}
        description={titleEx ? dashboardItemDescription(titleEx) : null}
      />

      <CardFooter className={dashboardItemCardFooterClass(3)}>
        {locked ? (
          <>
            <EnglishUiHint hint={t("lessonHint")} wrapperClassName="w-full">
              <Button type="button" variant="outline" size="sm" disabled>
                <BookOpen className="text-current" aria-hidden />
                {t("lesson")}
              </Button>
            </EnglishUiHint>
            <EnglishUiHint hint={t("exercisesHint")} wrapperClassName="w-full">
              <Button type="button" variant="outline" size="sm" disabled>
                <PencilLine className="text-current" aria-hidden />
                {t("exercises")}
              </Button>
            </EnglishUiHint>
            <EnglishUiHint hint={t("topicExamHint")} wrapperClassName="w-full">
              <Button type="button" size="sm" disabled>
                <ClipboardCheck className="text-current" aria-hidden />
                {t("topicExam")}
              </Button>
            </EnglishUiHint>
          </>
        ) : (
          <>
            <EnglishUiHint hint={t("lessonHint")} wrapperClassName="w-full">
              <ButtonLink
                href={`/panel/grammer/${topic.id}/lesson`}
                variant="outline"
                size="sm"
              >
                <BookOpen className="text-current" aria-hidden />
                {t("lesson")}
              </ButtonLink>
            </EnglishUiHint>
            <EnglishUiHint hint={t("exercisesHint")} wrapperClassName="w-full">
              <ButtonLink
                href={`/panel/grammer/${topic.id}/exercises`}
                variant="outline"
                size="sm"
              >
                <PencilLine className="text-current" aria-hidden />
                {t("exercises")}
              </ButtonLink>
            </EnglishUiHint>
            <EnglishUiHint hint={t("topicExamHint")} wrapperClassName="w-full">
              <ButtonLink href={`/panel/grammer/${topic.id}/exam`} size="sm">
                <ClipboardCheck className="text-current" aria-hidden />
                {t("topicExam")}
              </ButtonLink>
            </EnglishUiHint>
          </>
        )}
      </CardFooter>
    </DashboardProgressCard>
  );
}
