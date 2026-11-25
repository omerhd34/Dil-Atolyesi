import {
  allGrammarHeadings,
  type CefrLevel,
  type GrammarHeading,
} from "./grammarHeading";
import { levelExamTopicId, resolveLevelExamTopicId } from "./levelExamTopicIds";

export type { CefrLevel };

export type DashboardSubtopic = {
  id: string;
  title: string;
  titleEng: string;
  titleEx: string;
  progress: number;
};

export type DashboardTopic = {
  id: string;
  title: string;
  titleEng: string;
  titleEx: string;
  intro: string;
  level: CefrLevel;
  isExam?: boolean;
  subtopics: DashboardSubtopic[];
};

const levelExamSeeds: GrammarHeading[] = (
  [
    ["A1", "A1 Yeterlilik Sınavı", "A1 Proficiency Exam"],
    ["A2", "A2 Yeterlilik Sınavı", "A2 Proficiency Exam"],
    ["B1", "B1 Yeterlilik Sınavı", "B1 Proficiency Exam"],
    ["B2", "B2 Yeterlilik Sınavı", "B2 Proficiency Exam"],
    ["C1", "C1 Yeterlilik Sınavı", "C1 Proficiency Exam"],
    ["C2", "C2 Yeterlilik Sınavı", "C2 Proficiency Exam"],
  ] as const
).map(([level, title, titleEng]) => ({
  id: levelExamTopicId(level),
  level,
  title,
  titleEng,
  titleEx: titleEng,
  intro: "",
}));

function toTopic(seed: GrammarHeading, isExam = false): DashboardTopic {
  return {
    id: seed.id,
    title: seed.title,
    titleEng: seed.titleEng,
    titleEx: seed.titleEx,
    intro: seed.intro,
    level: seed.level,
    isExam: isExam || undefined,
    subtopics: [
      {
        id: `${seed.id}-1`,
        title: seed.title,
        titleEng: seed.titleEng,
        titleEx: seed.titleEx,
        progress: 0,
      },
    ],
  };
}

const grammarTopics = allGrammarHeadings.map((seed) => toTopic(seed));
const levelExams = levelExamSeeds.map((seed) => toTopic(seed, true));

export const dashboardTopics: DashboardTopic[] = [
  ...grammarTopics.filter((topic) => topic.level === "A1"),
  ...levelExams.filter((topic) => topic.level === "A1"),
  ...grammarTopics.filter((topic) => topic.level === "A2"),
  ...levelExams.filter((topic) => topic.level === "A2"),
  ...grammarTopics.filter((topic) => topic.level === "B1"),
  ...levelExams.filter((topic) => topic.level === "B1"),
  ...grammarTopics.filter((topic) => topic.level === "B2"),
  ...levelExams.filter((topic) => topic.level === "B2"),
  ...grammarTopics.filter((topic) => topic.level === "C1"),
  ...levelExams.filter((topic) => topic.level === "C1"),
  ...grammarTopics.filter((topic) => topic.level === "C2"),
  ...levelExams.filter((topic) => topic.level === "C2"),
];

export function getDashboardTopicById(
  topicId: string,
): DashboardTopic | undefined {
  const direct = dashboardTopics.find((topic) => topic.id === topicId);
  if (direct) {
    return direct;
  }
  const resolved = resolveLevelExamTopicId(topicId);
  if (resolved === topicId) {
    return undefined;
  }
  return dashboardTopics.find((topic) => topic.id === resolved);
}

export function getTopicTitleEx(topicId: string, fallback = ""): string {
  return getDashboardTopicById(topicId)?.titleEx ?? fallback;
}
