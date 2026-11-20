"use client";

import { useTranslations } from "next-intl";
import { BookOpen, ClipboardCheck, Lock, PencilLine } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ButtonLink } from "@/components/ui/ButtonLink";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import type { DashboardTopic } from "@/data/grammar/dashboardTopics";
import { useTopicProgress } from "@/hooks/useTopicProgress";
import { getDistinctSecondaryTitle } from "@/lib/bilingualTitle";
import { EnglishUiHint } from "@/components/ui/EnglishUiHint";
import { cn } from "@/lib/utils";

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
    <div
      className={cn(
        "relative h-full rounded-2xl",
        "[--progress-track:#dce3ef] dark:[--progress-track:#303d59]",
        locked && "opacity-70",
      )}
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={progress}
      aria-label={t("topicProgressAria", { progress })}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-2xl ring-[3px] ring-(--progress-track) ring-inset"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-2xl transition-[background] duration-500 ease-out"
        style={{
          padding: 3,
          background: `conic-gradient(from -90deg, #0ea5e9 ${progress}%, transparent 0)`,
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />

      <Card className="relative h-full">
        <CardHeader>
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="secondary">{t("topicLabel", { index })}</Badge>
            {locked ? (
              <Badge
                variant="outline"
                className="gap-1 border-amber-500/40 text-amber-700 dark:text-amber-300"
              >
                <Lock className="size-3" aria-hidden />
                {t("locked")}
              </Badge>
            ) : null}
            <Badge variant="outline" className="ml-auto tabular-nums">
              %{progress}
            </Badge>
          </div>

          <div className="space-y-1">
            <CardTitle>{topic.title}</CardTitle>
            {titleEng ? (
              <CardDescription className="font-medium tracking-wide text-brand-500 italic dark:text-brand-400">
                {titleEng}
              </CardDescription>
            ) : null}
            {titleEx ? (
              <CardDescription className="text-brand-600 dark:text-brand-300">
                {titleEx}
              </CardDescription>
            ) : null}
          </div>
        </CardHeader>

        <CardFooter className="mt-auto grid grid-cols-1 items-start gap-x-2 gap-y-1 sm:grid-cols-3">
          {locked ? (
            <>
              <EnglishUiHint hint={t("lessonHint")} wrapperClassName="w-full">
                <Button type="button" variant="outline" size="sm" disabled>
                  <BookOpen className="text-current" aria-hidden />
                  {t("lesson")}
                </Button>
              </EnglishUiHint>
              <EnglishUiHint
                hint={t("exercisesHint")}
                wrapperClassName="w-full"
              >
                <Button type="button" variant="outline" size="sm" disabled>
                  <PencilLine className="text-current" aria-hidden />
                  {t("exercises")}
                </Button>
              </EnglishUiHint>
              <EnglishUiHint
                hint={t("topicExamHint")}
                wrapperClassName="w-full"
              >
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
              <EnglishUiHint
                hint={t("exercisesHint")}
                wrapperClassName="w-full"
              >
                <ButtonLink
                  href={`/panel/grammer/${topic.id}/exercises`}
                  variant="outline"
                  size="sm"
                >
                  <PencilLine className="text-current" aria-hidden />
                  {t("exercises")}
                </ButtonLink>
              </EnglishUiHint>
              <EnglishUiHint
                hint={t("topicExamHint")}
                wrapperClassName="w-full"
              >
                <ButtonLink href={`/panel/grammer/${topic.id}/exam`} size="sm">
                  <ClipboardCheck className="text-current" aria-hidden />
                  {t("topicExam")}
                </ButtonLink>
              </EnglishUiHint>
            </>
          )}
        </CardFooter>
      </Card>
    </div>
  );
}
