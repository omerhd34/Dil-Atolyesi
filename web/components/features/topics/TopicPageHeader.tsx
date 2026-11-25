"use client";

import { useTranslations } from "next-intl";
import {
  ArrowLeft,
  BookOpen,
  ChevronDown,
  ChevronLeft,
  ClipboardCheck,
  PencilLine,
} from "lucide-react";
import type { CefrLevel } from "@/data/grammar/dashboardTopics";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Link } from "@/i18n/navigation";
import { getDistinctSecondaryTitle } from "@/lib/bilingualTitle";
import { getCefrLevelBadgeClass } from "@/lib/topicAccess";
import { TopicProgressBadge } from "@/components/features/topics/TopicProgressBadge";
import { EnglishUiHint } from "@/components/ui/EnglishUiHint";
import { cn } from "@/lib/utils";
import {
  getAdjacentGrammarTopics,
  getGrammarTopicWorkshopHref,
} from "@/lib/topicNavigation";

export type TopicSectionNavItem = {
  id: string;
  title: string;
};

type TopicPageHeaderProps = {
  topicId: string;
  title: string;
  titleEng?: string;
  titleEx?: string;
  level: CefrLevel;
  index: number;
  activeTab: "lesson" | "exercises" | "exam";
  sections?: TopicSectionNavItem[];
  isExam?: boolean;
};

export function TopicPageHeader({
  topicId,
  title,
  titleEng,
  level,
  index,
  activeTab,
  sections = [],
  isExam = false,
}: TopicPageHeaderProps) {
  const t = useTranslations("Topic");
  const englishTitle = getDistinctSecondaryTitle(title, titleEng);

  const lessonHref = `/atolye/grammer/${topicId}/lesson`;
  const exercisesHref = `/atolye/grammer/${topicId}/exercises`;
  const examHref = `/atolye/grammer/${topicId}/exam`;
  const showSectionNav = activeTab === "lesson" && sections.length > 1;
  const showTopicExamTab = !isExam;
  const { previous: previousTopic } = getAdjacentGrammarTopics(topicId);
  const previousTopicHref = previousTopic
    ? getGrammarTopicWorkshopHref(previousTopic, activeTab)
    : null;

  return (
    <header className="space-y-4">
      <div className="flex items-center justify-between gap-3">
        <div className="flex min-w-0 flex-wrap items-center gap-2">
          <ButtonLink href="/atolye/grammer" variant="outline" size="sm">
            <ArrowLeft className="size-4" aria-hidden />
            {t("backToTopics")}
          </ButtonLink>
          {previousTopic && previousTopicHref ? (
            <ButtonLink
              href={previousTopicHref}
              variant="outline"
              size="sm"
              className="gap-1.5"
              aria-label={`${t("previousTopic")}: ${previousTopic.title}`}
            >
              <ChevronLeft className="size-4 shrink-0" aria-hidden />
              <span className="truncate">{t("previousTopic")}</span>
            </ButtonLink>
          ) : null}
        </div>
        <TopicProgressBadge topicId={topicId} />
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <p
          className={cn(
            "inline-flex w-fit rounded-md px-2 py-1 text-[11px] font-semibold tracking-wide uppercase",
            getCefrLevelBadgeClass(level),
          )}
        >
          {level}
        </p>
        <p className="inline-flex w-fit rounded-md bg-zinc-500/15 px-2 py-1 text-[11px] font-semibold tracking-wide text-zinc-700 uppercase dark:bg-zinc-400/15 dark:text-zinc-300">
          {isExam ? t("examLabel") : t("topicLabel", { index })}
        </p>
      </div>

      <div className="space-y-1">
        <h1 className="page-title">{title}</h1>
        {englishTitle ? (
          <p className="text-base font-medium tracking-wide text-brand-500 italic dark:text-brand-400">
            {englishTitle}
          </p>
        ) : null}
      </div>

      {!isExam ? (
        <div className="space-y-3 border-b border-border">
          <nav
            aria-label={t("tabsAria")}
            className="flex flex-wrap items-start gap-x-1 gap-y-0"
          >
            <EnglishUiHint hint={t("lessonHint")}>
              <Link
                href={lessonHref}
                className={cn(
                  "inline-flex items-center gap-1.5 border-b-2 px-3 py-2 text-sm font-medium transition-colors",
                  activeTab === "lesson"
                    ? "border-sky-500 text-brand-950 dark:text-brand-100"
                    : "border-transparent text-brand-500 hover:text-brand-950 dark:text-brand-400 dark:hover:text-brand-100",
                )}
                aria-current={activeTab === "lesson" ? "page" : undefined}
              >
                <BookOpen className="size-4" aria-hidden />
                {t("lesson")}
              </Link>
            </EnglishUiHint>
            <EnglishUiHint hint={t("exercisesHint")}>
              <Link
                href={exercisesHref}
                className={cn(
                  "inline-flex items-center gap-1.5 border-b-2 px-3 py-2 text-sm font-medium transition-colors",
                  activeTab === "exercises"
                    ? "border-sky-500 text-brand-950 dark:text-brand-100"
                    : "border-transparent text-brand-500 hover:text-brand-950 dark:text-brand-400 dark:hover:text-brand-100",
                )}
                aria-current={activeTab === "exercises" ? "page" : undefined}
              >
                <PencilLine className="size-4" aria-hidden />
                {t("exercises")}
              </Link>
            </EnglishUiHint>
            {showTopicExamTab ? (
              <EnglishUiHint hint={t("topicExamTabHint")}>
                <Link
                  href={examHref}
                  className={cn(
                    "inline-flex items-center gap-1.5 border-b-2 px-3 py-2 text-sm font-medium transition-colors",
                    activeTab === "exam"
                      ? "border-sky-500 text-brand-950 dark:text-brand-100"
                      : "border-transparent text-brand-500 hover:text-brand-950 dark:text-brand-400 dark:hover:text-brand-100",
                  )}
                  aria-current={activeTab === "exam" ? "page" : undefined}
                >
                  <ClipboardCheck className="size-4" aria-hidden />
                  {t("topicExamTab")}
                </Link>
              </EnglishUiHint>
            ) : null}
          </nav>

          {showSectionNav ? (
            <nav
              aria-label={t("sectionsAria")}
              className="flex flex-wrap gap-2 pb-3"
            >
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#section-${section.id}`}
                  className="inline-flex items-center gap-1 rounded-md bg-brand-100/70 px-2.5 py-1.5 text-xs font-medium text-brand-700 transition-colors hover:bg-sky-500/15 hover:text-brand-950 dark:bg-brand-900/50 dark:text-brand-300 dark:hover:bg-sky-500/20 dark:hover:text-brand-100"
                >
                  {section.title}
                  <ChevronDown className="size-3.5 shrink-0" aria-hidden />
                </a>
              ))}
            </nav>
          ) : null}
        </div>
      ) : null}
    </header>
  );
}
