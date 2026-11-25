import type { CefrLevel } from "./grammarHeading";

export const LEVEL_EXAM_TOPIC_IDS = new Set([
  "exam-a1",
  "exam-a2",
  "exam-b1",
  "exam-b2",
  "exam-c1",
  "exam-c2",
]);

const LEGACY_LEVEL_EXAM_NUMERIC_IDS = new Set([
  "123",
  "124",
  "125",
  "126",
  "127",
  "128",
]);

const LEGACY_EXAM_TO_LEVEL: Record<string, CefrLevel> = {
  "123": "A1",
  "124": "A2",
  "125": "B1",
  "126": "B2",
  "127": "C1",
  "128": "C2",
};

export function levelExamTopicId(level: CefrLevel): string {
  return `exam-${level.toLowerCase()}`;
}

export function isLevelExamTopicId(topicId: string): boolean {
  return LEVEL_EXAM_TOPIC_IDS.has(topicId);
}

export function resolveLevelExamTopicId(topicId: string): string {
  if (LEVEL_EXAM_TOPIC_IDS.has(topicId)) {
    return topicId;
  }
  const level = LEGACY_EXAM_TO_LEVEL[topicId];
  return level ? levelExamTopicId(level) : topicId;
}

export function isLegacyLevelExamTopicId(topicId: string): boolean {
  return LEGACY_LEVEL_EXAM_NUMERIC_IDS.has(topicId);
}

export function levelExamContentFileName(level: CefrLevel): string {
  return levelExamTopicId(level);
}

export function levelExamContentExportName(level: CefrLevel): string {
  return `topicContentExam${level}`;
}
