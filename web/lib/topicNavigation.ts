import {
  buildTopicGridItems,
  type TopicGridItem,
} from "@/data/combinedExercises";
import {
  getDashboardTopicById,
  type DashboardTopic,
} from "@/data/grammar/dashboardTopics";

export type AdjacentGrammarTopic = Pick<
  DashboardTopic,
  "id" | "title" | "isExam"
>;

function gridTopicsForLevel(level: DashboardTopic["level"]): DashboardTopic[] {
  return buildTopicGridItems(level)
    .filter(
      (item): item is TopicGridItem & { kind: "topic" } =>
        item.kind === "topic",
    )
    .map((item) => item.topic);
}

export function getAdjacentGrammarTopics(topicId: string): {
  previous: AdjacentGrammarTopic | null;
  next: AdjacentGrammarTopic | null;
} {
  const current = getDashboardTopicById(topicId);
  if (!current) {
    return { previous: null, next: null };
  }

  const topics = gridTopicsForLevel(current.level);
  const index = topics.findIndex((topic) => topic.id === topicId);
  if (index < 0) {
    return { previous: null, next: null };
  }

  const pick = (topic: DashboardTopic): AdjacentGrammarTopic => ({
    id: topic.id,
    title: topic.title,
    isExam: topic.isExam,
  });

  return {
    previous: index > 0 ? pick(topics[index - 1]) : null,
    next: index < topics.length - 1 ? pick(topics[index + 1]) : null,
  };
}

export function getGrammarTopicPanelHref(
  topic: Pick<DashboardTopic, "id" | "isExam">,
  activeTab: "lesson" | "exercises" | "exam",
): string {
  if (topic.isExam) {
    return `/panel/grammer/${topic.id}/exercises`;
  }
  if (activeTab === "exam") {
    return `/panel/grammer/${topic.id}/exam`;
  }
  return `/panel/grammer/${topic.id}/${activeTab}`;
}
