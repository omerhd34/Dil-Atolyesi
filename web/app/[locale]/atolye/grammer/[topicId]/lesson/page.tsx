export const instant = false;

import { cookies } from "next/headers";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { TopicContentMissing } from "@/components/features/topics/TopicContentMissing";
import { TopicLessonProgressTracker } from "@/components/features/topics/TopicLessonProgressTracker";
import { TopicLessonView } from "@/components/features/topics/TopicLessonView";
import { TopicGrammarAccessGate } from "@/components/features/topics/TopicGrammarAccessGate";
import { TopicLevelLocked } from "@/components/features/topics/TopicLevelLocked";
import { TopicAdjacentNav } from "@/components/features/topics/TopicAdjacentNav";
import { TopicPageHeader } from "@/components/features/topics/TopicPageHeader";
import {
  dashboardTopics,
  getDashboardTopicById,
} from "@/data/grammar/dashboardTopics";
import { getTopicContent } from "@/data/grammar";
import type { TopicLesson } from "@/data/grammar/types";
import { redirect } from "@/i18n/navigation";
import {
  LEGACY_PASSED_LEVEL_EXAMS_COOKIES,
  PASSED_LEVEL_EXAMS_COOKIE,
  readPassedLevelExamsFromCookieValues,
} from "@/lib/levelExamStorage";
import { buildTopicPageMetadata } from "@/lib/server/topicPageMetadata";
import { canAccessLevel, getRequiredLevelToUnlock } from "@/lib/topicAccess";

type PageProps = {
  params: Promise<{ locale: string; topicId: string }>;
};

function getLessonNavSections(lesson: TopicLesson | undefined) {
  if (!lesson) {
    return [];
  }

  const hasRootBody = Boolean(
    lesson.title ||
    (lesson.paragraphs && lesson.paragraphs.length > 0) ||
    (lesson.examples && lesson.examples.length > 0),
  );

  if (!hasRootBody && lesson.parts && lesson.parts.length > 0) {
    return lesson.parts.map((part) => ({ id: part.id, title: part.title }));
  }

  if (lesson.title) {
    return [{ id: "lesson", title: lesson.title }];
  }

  return [];
}

export function generateStaticParams() {
  return dashboardTopics.map((topic) => ({ topicId: topic.id }));
}

export async function generateMetadata({ params }: PageProps) {
  "use cache";
  const { locale, topicId } = await params;
  return buildTopicPageMetadata(locale, topicId, "lesson");
}

export default async function TopicLessonPage({ params }: PageProps) {
  const { locale, topicId } = await params;
  setRequestLocale(locale);

  const topic = getDashboardTopicById(topicId);
  if (!topic) {
    notFound();
  }

  if (topic.isExam) {
    redirect({
      href: `/atolye/grammer/${topicId}/exercises`,
      locale,
    });
  }

  const content = getTopicContent(topicId);
  const regularTopics = dashboardTopics.filter(
    (item) => item.level === topic.level && !item.isExam,
  );
  const index = topic.isExam
    ? regularTopics.length + 1
    : regularTopics.findIndex((item) => item.id === topicId) + 1;

  const cookieStore = await cookies();
  const passedExams = readPassedLevelExamsFromCookieValues(
    cookieStore.get(PASSED_LEVEL_EXAMS_COOKIE)?.value,
    ...LEGACY_PASSED_LEVEL_EXAMS_COOKIES.map(
      (name) => cookieStore.get(name)?.value,
    ),
  );
  const unlocked = canAccessLevel(topic.level, passedExams);
  const requiredLevel = getRequiredLevelToUnlock(topic.level);

  return (
    <div className="mx-auto w-full max-w-7xl space-y-8 p-4 sm:p-6 lg:p-8">
      <TopicPageHeader
        topicId={topic.id}
        title={topic.title}
        titleEng={topic.titleEng}
        titleEx={topic.titleEx}
        level={topic.level}
        index={index}
        activeTab="lesson"
        isExam={Boolean(topic.isExam)}
        sections={getLessonNavSections(content?.lesson)}
      />
      {!unlocked && requiredLevel ? (
        <TopicLevelLocked level={topic.level} requiredLevel={requiredLevel} />
      ) : content ? (
        <TopicGrammarAccessGate
          topicId={topic.id}
          lockedKind="topic"
          displayIndex={index}
        >
          <TopicLessonProgressTracker topicId={topic.id} />
          <TopicLessonView lesson={content.lesson} intro={topic.intro} />
        </TopicGrammarAccessGate>
      ) : (
        <TopicContentMissing />
      )}
      <TopicAdjacentNav topicId={topic.id} activeTab="lesson" />
    </div>
  );
}
