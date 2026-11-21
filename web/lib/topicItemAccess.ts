import {
  dashboardTopics,
  type CefrLevel,
  getDashboardTopicById,
} from "@/data/grammar/dashboardTopics";
import {
  getCombinedExercisesForLevel,
  getCombinedExerciseById,
  TOPIC_BATCH_INTERVAL,
} from "@/data/combinedExercises";
import { isCombinedExerciseComplete } from "@/lib/combinedExerciseProgress";
import { computeDisplayedTopicProgress } from "@/lib/topicCardProgress";

export { TOPIC_BATCH_INTERVAL };

export const BYPASS_TOPIC_BATCH_LOCK = true;

function getRegularTopicsForLevel(level: CefrLevel) {
  return dashboardTopics.filter(
    (topic) => topic.level === level && !topic.isExam,
  );
}

function isTopicComplete(topicId: string): boolean {
  return computeDisplayedTopicProgress(topicId) >= 100;
}

function isBatchComplete(level: CefrLevel, batchIndex: number): boolean {
  const topics = getRegularTopicsForLevel(level);
  const combinedList = getCombinedExercisesForLevel(level);
  const start = batchIndex * TOPIC_BATCH_INTERVAL;
  const slice = topics.slice(start, start + TOPIC_BATCH_INTERVAL);

  if (slice.length === 0) {
    return false;
  }

  const topicsOk = slice.every((topic) => isTopicComplete(topic.id));
  const combined = combinedList[batchIndex];

  if (slice.length === TOPIC_BATCH_INTERVAL && combined) {
    return topicsOk && isCombinedExerciseComplete(combined.id);
  }

  return topicsOk;
}

export function countCompletedTopicBatches(level: CefrLevel): number {
  const topics = getRegularTopicsForLevel(level);
  const batchCount = Math.ceil(topics.length / TOPIC_BATCH_INTERVAL);
  let completed = 0;

  for (let i = 0; i < batchCount; i += 1) {
    if (isBatchComplete(level, i)) {
      completed += 1;
    } else {
      break;
    }
  }

  return completed;
}

export function getUnlockedTopicBatchCount(level: CefrLevel): number {
  const topics = getRegularTopicsForLevel(level);
  const batchCount = Math.ceil(topics.length / TOPIC_BATCH_INTERVAL);
  return Math.min(batchCount, countCompletedTopicBatches(level) + 1);
}

export function getTopicIndexInLevel(topicId: string): number {
  const topic = getDashboardTopicById(topicId);
  if (!topic || topic.isExam) {
    return -1;
  }
  return getRegularTopicsForLevel(topic.level).findIndex(
    (item) => item.id === topicId,
  );
}

export function getTopicDisplayIndex(topicId: string): number {
  const index = getTopicIndexInLevel(topicId);
  return index < 0 ? -1 : index + 1;
}

export function getTopicBatchIndex(topicId: string): number {
  const index = getTopicIndexInLevel(topicId);
  if (index < 0) {
    return -1;
  }
  return Math.floor(index / TOPIC_BATCH_INTERVAL);
}

export function canAccessGrammarTopic(topicId: string): boolean {
  const topic = getDashboardTopicById(topicId);
  if (!topic || topic.isExam) {
    return false;
  }

  if (BYPASS_TOPIC_BATCH_LOCK) {
    return true;
  }

  const batchIndex = getTopicBatchIndex(topicId);
  if (batchIndex < 0) {
    return false;
  }

  return batchIndex < getUnlockedTopicBatchCount(topic.level);
}

export function canAccessCombinedExercise(combinedId: string): boolean {
  const combined = getCombinedExerciseById(combinedId);
  if (!combined) {
    return false;
  }

  if (BYPASS_TOPIC_BATCH_LOCK) {
    return true;
  }

  const batchIndex = combined.index - 1;
  return batchIndex < getUnlockedTopicBatchCount(combined.level);
}

export function canAccessLevelProficiencyExam(level: CefrLevel): boolean {
  if (BYPASS_TOPIC_BATCH_LOCK) {
    return true;
  }

  const topics = getRegularTopicsForLevel(level);
  const combinedList = getCombinedExercisesForLevel(level);
  const batchCount = Math.ceil(topics.length / TOPIC_BATCH_INTERVAL);

  if (countCompletedTopicBatches(level) < batchCount) {
    return false;
  }

  const allTopics = topics.every((topic) => isTopicComplete(topic.id));
  const allCombined = combinedList.every((item) =>
    isCombinedExerciseComplete(item.id),
  );

  return allTopics && allCombined;
}

export function canAccessGrammarTopicOrExam(topicId: string): boolean {
  const topic = getDashboardTopicById(topicId);
  if (!topic) {
    return false;
  }

  if (topic.isExam) {
    return canAccessLevelProficiencyExam(topic.level);
  }

  return canAccessGrammarTopic(topicId);
}
