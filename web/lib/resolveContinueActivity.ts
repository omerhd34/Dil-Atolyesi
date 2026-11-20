import { getCombinedExerciseById } from "@/data/combinedExercises";
import { getDashboardTopicById } from "@/data/grammar/dashboardTopics";
import { getListeningSectionById } from "@/data/listenings";
import { getReadingSectionById } from "@/data/readings";
import { getWritingSectionById } from "@/data/writings";
import { getVocabularyCategoryById } from "@/data/vocabulary";
import { isVocabularyReferenceId } from "@/lib/vocabularyReferenceRoutes";
import { getSpeakingSectionById } from "@/lib/speakingContent";
import type {
  ContinueActivity,
  ContinueActivityKind,
  ContinueActivitySkill,
} from "@/lib/continueActivityStorage";
import { activitySkill } from "@/lib/continueActivityStorage";
import { LISTENING_SECTION_ANCHORS } from "@/lib/listeningSectionTab";
import {
  isReadingPracticeHash,
  READING_SECTION_ANCHORS,
} from "@/lib/readingSectionTab";
import { SPEAKING_SECTION_ANCHORS } from "@/lib/speakingSectionTab";
import { WRITING_SECTION_ANCHORS } from "@/lib/writingSectionTab";

const PANEL_HUB_BY_HASH: Record<string, ContinueActivitySkill> = {
  grammer: "topics",
  vocabulary: "vocabulary",
  reading: "reading",
  listening: "listening",
  writing: "writing",
  speaking: "speaking",
};

const PANEL_HASH_BY_SKILL: Record<ContinueActivitySkill, string> = {
  topics: "grammer",
  vocabulary: "vocabulary",
  reading: "reading",
  listening: "listening",
  writing: "writing",
  speaking: "speaking",
};

function hashIdFrom(hash: string): string {
  return hash.replace(/^#/, "");
}

function isReadingPractice(hash: string, search: string): boolean {
  const hashId = hashIdFrom(hash);
  if (isReadingPracticeHash(hashId)) {
    return true;
  }

  const params = new URLSearchParams(
    search.startsWith("?") ? search.slice(1) : search,
  );
  const tab = params.get("tab");
  return tab === "practice" || tab === "exam";
}

function parseReadingActivity(
  sectionId: string,
  hash: string,
  search: string,
): Omit<ContinueActivity, "updatedAt"> | null {
  if (!getReadingSectionById(sectionId)) {
    return null;
  }

  const isPractice = isReadingPractice(hash, search);
  return {
    kind: isPractice ? "reading_exercises" : "reading_text",
    href: isPractice
      ? `/panel/reading/${sectionId}#${READING_SECTION_ANCHORS.practice}`
      : `/panel/reading/${sectionId}`,
    readingId: sectionId,
  };
}

export function parseContinueActivityFromPath(
  pathname: string,
  search = "",
  hash = "",
): Omit<ContinueActivity, "updatedAt"> | null {
  let path = pathname.replace(/\/+$/, "") || "/";
  if (path.startsWith("/panel/kelime")) {
    path = path.replace(/^\/panel\/kelime/, "/panel/vocabulary");
  }
  if (
    path === "/panel/vocabulary/sinav" ||
    path.endsWith("/bilinen") ||
    path.endsWith("/bugun-calisilan")
  ) {
    path = path
      .replace(/\/sinav$/, "/exam")
      .replace(/\/bilinen$/, "/known-words")
      .replace(/\/bugun-calisilan$/, "/today-worked");
  }

  if (path === "/panel/vocabulary/exam") {
    return {
      kind: "vocabulary_quiz",
      href: "/panel/vocabulary/exam",
    };
  }

  const vocabularyMatch = path.match(/^\/panel\/vocabulary\/([^/]+)$/);
  if (vocabularyMatch) {
    const segment = vocabularyMatch[1];
    const params = new URLSearchParams(
      search.startsWith("?") ? search.slice(1) : search,
    );
    const query = params.toString();

    if (isVocabularyReferenceId(segment)) {
      const href = query
        ? `/panel/vocabulary/${segment}?${query}`
        : `/panel/vocabulary/${segment}`;
      const isVerbExercises =
        segment === "verbs" && params.get("tab") === "exercises";
      return {
        kind: isVerbExercises
          ? "vocabulary_reference_exercises"
          : "vocabulary_reference",
        href,
        vocabularyRefId: segment,
      };
    }

    const tab = params.get("tab");
    const isExercises = tab === "exercises";
    const href = isExercises
      ? `/panel/vocabulary/${segment}?tab=exercises`
      : `/panel/vocabulary/${segment}`;

    return {
      kind: isExercises ? "vocabulary_exercises" : "vocabulary_category",
      href,
      categoryId: segment,
    };
  }

  const combinedMatch = path.match(/^\/panel\/grammer\/combined\/([^/]+)$/);
  if (combinedMatch) {
    return {
      kind: "combined_exercise",
      href: `/panel/grammer/combined/${combinedMatch[1]}`,
      combinedId: combinedMatch[1],
    };
  }

  const topicMatch = path.match(
    /^\/panel\/grammer\/([^/]+)\/(lesson|exercises|exam)$/,
  );
  if (topicMatch) {
    const topicId = topicMatch[1];
    const section = topicMatch[2];
    const kind: ContinueActivityKind =
      section === "lesson"
        ? "topic_lesson"
        : section === "exercises"
          ? "topic_exercises"
          : "topic_exam";

    return {
      kind,
      href: `/panel/grammer/${topicId}/${section}`,
      topicId,
    };
  }

  const readingNestedMatch = path.match(
    /^\/panel\/reading\/([^/]+)\/(text|practice|exam)$/,
  );
  if (readingNestedMatch) {
    const nestedHash =
      readingNestedMatch[2] === "text"
        ? ""
        : `#${READING_SECTION_ANCHORS.practice}`;
    return parseReadingActivity(readingNestedMatch[1], nestedHash, "");
  }

  const readingMatch = path.match(/^\/panel\/reading\/([^/]+)$/);
  if (readingMatch) {
    return parseReadingActivity(readingMatch[1], hash, search);
  }

  const listeningMatch = path.match(/^\/panel\/listening\/([^/]+)$/);
  if (listeningMatch) {
    const sectionId = listeningMatch[1];
    if (!getListeningSectionById(sectionId)) {
      return null;
    }
    const hashId = hash.replace(/^#/, "");
    const isPractice = hashId === LISTENING_SECTION_ANCHORS.practice;
    return {
      kind: isPractice ? "listening_exercises" : "listening_audio",
      href: isPractice
        ? `/panel/listening/${sectionId}#${LISTENING_SECTION_ANCHORS.practice}`
        : `/panel/listening/${sectionId}`,
      listeningId: sectionId,
    };
  }

  const writingMatch = path.match(/^\/panel\/writing\/([^/]+)$/);
  if (writingMatch) {
    const sectionId = writingMatch[1];
    if (!getWritingSectionById(sectionId)) {
      return null;
    }
    const hashId = hash.replace(/^#/, "");
    const isPractice = hashId === WRITING_SECTION_ANCHORS.practice;
    return {
      kind: isPractice ? "writing_exercises" : "writing_model",
      href: isPractice
        ? `/panel/writing/${sectionId}#${WRITING_SECTION_ANCHORS.practice}`
        : `/panel/writing/${sectionId}`,
      writingId: sectionId,
    };
  }

  const speakingMatch = path.match(/^\/panel\/speaking\/([^/]+)$/);
  if (speakingMatch) {
    const sectionId = speakingMatch[1];
    if (!getSpeakingSectionById(sectionId)) {
      return null;
    }
    const params = new URLSearchParams(
      search.startsWith("?") ? search.slice(1) : search,
    );
    const hashId = hash.replace(/^#/, "");
    const isPractice =
      params.get("tab") === "practice" ||
      hashId === SPEAKING_SECTION_ANCHORS.practice;
    return {
      kind: isPractice ? "speaking_exercises" : "speaking_model",
      href: isPractice
        ? `/panel/speaking/${sectionId}?tab=practice`
        : `/panel/speaking/${sectionId}`,
      speakingId: sectionId,
    };
  }

  if (path === "/panel" || path === "/") {
    const skill = PANEL_HUB_BY_HASH[hashIdFrom(hash)];
    if (skill) {
      return {
        kind: "skill_hub",
        href: `/panel#${PANEL_HASH_BY_SKILL[skill]}`,
        skill,
      };
    }
  }

  return null;
}

export type ContinueActivityDisplay = {
  title: string;
  kindLabel: string;
};

type VocabularyReferenceTitles = Record<
  | "today-worked"
  | "known-words"
  | "verbs"
  | "false-friends"
  | "phrasal-verbs"
  | "prepositions",
  string
>;

type SkillHubInnerTitles = Record<ContinueActivitySkill, string>;

type ContinueActivityLabels = {
  vocabularyQuiz: string;
  vocabularyReferenceTitles: VocabularyReferenceTitles;
  combinedExercise: string;
  skillReading: string;
  skillListening: string;
  skillWriting: string;
  skillSpeaking: string;
  skillTopics: string;
  skillVocabulary: string;
  skillHubInnerTitles: SkillHubInnerTitles;
  fallbackTitle: string;
};

function mainSectionLabel(
  skill: ContinueActivitySkill | null,
  labels: ContinueActivityLabels,
): string {
  switch (skill) {
    case "reading":
      return labels.skillReading;
    case "listening":
      return labels.skillListening;
    case "writing":
      return labels.skillWriting;
    case "speaking":
      return labels.skillSpeaking;
    case "topics":
      return labels.skillTopics;
    case "vocabulary":
      return labels.skillVocabulary;
    default:
      return labels.fallbackTitle;
  }
}

function skillHubInnerTitle(
  skill: ContinueActivitySkill | undefined,
  labels: ContinueActivityLabels,
): string {
  if (!skill) {
    return labels.fallbackTitle;
  }
  return labels.skillHubInnerTitles[skill] ?? labels.fallbackTitle;
}

export function resolveContinueActivityDisplay(
  activity: ContinueActivity,
  labels: ContinueActivityLabels,
): ContinueActivityDisplay {
  const sectionLabel = mainSectionLabel(activitySkill(activity), labels);

  switch (activity.kind) {
    case "vocabulary_quiz":
      return {
        title: labels.vocabularyQuiz,
        kindLabel: sectionLabel,
      };
    case "vocabulary_reference":
    case "vocabulary_reference_exercises": {
      const refId = activity.vocabularyRefId;
      const title =
        refId && refId in labels.vocabularyReferenceTitles
          ? labels.vocabularyReferenceTitles[
              refId as keyof VocabularyReferenceTitles
            ]
          : labels.fallbackTitle;
      return {
        title,
        kindLabel: sectionLabel,
      };
    }
    case "vocabulary_category":
    case "vocabulary_exercises": {
      const category = activity.categoryId
        ? getVocabularyCategoryById(activity.categoryId)
        : undefined;
      return {
        title: category?.title ?? labels.fallbackTitle,
        kindLabel: sectionLabel,
      };
    }
    case "topic_lesson":
    case "topic_exercises":
    case "topic_exam": {
      const topic = activity.topicId
        ? getDashboardTopicById(activity.topicId)
        : undefined;
      return {
        title: topic?.title ?? labels.fallbackTitle,
        kindLabel: sectionLabel,
      };
    }
    case "combined_exercise": {
      const combined = activity.combinedId
        ? getCombinedExerciseById(activity.combinedId)
        : undefined;
      return {
        title: combined
          ? `${combined.level} · ${labels.combinedExercise}`
          : labels.combinedExercise,
        kindLabel: sectionLabel,
      };
    }
    case "reading_text":
    case "reading_exercises": {
      const section = activity.readingId
        ? getReadingSectionById(activity.readingId)
        : null;
      return {
        title: section?.title ?? labels.fallbackTitle,
        kindLabel: sectionLabel,
      };
    }
    case "listening_audio":
    case "listening_exercises": {
      const section = activity.listeningId
        ? getListeningSectionById(activity.listeningId)
        : null;
      return {
        title: section?.title ?? labels.fallbackTitle,
        kindLabel: sectionLabel,
      };
    }
    case "writing_model":
    case "writing_exercises": {
      const section = activity.writingId
        ? getWritingSectionById(activity.writingId)
        : null;
      return {
        title: section?.title ?? labels.fallbackTitle,
        kindLabel: sectionLabel,
      };
    }
    case "speaking_model":
    case "speaking_exercises": {
      const section = activity.speakingId
        ? getSpeakingSectionById(activity.speakingId)
        : null;
      return {
        title: section?.title ?? labels.fallbackTitle,
        kindLabel: sectionLabel,
      };
    }
    case "skill_hub":
      return {
        title: skillHubInnerTitle(activity.skill, labels),
        kindLabel: sectionLabel,
      };
  }
}
