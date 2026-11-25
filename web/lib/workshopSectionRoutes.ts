import { WORKSHOP_PATH } from "@/lib/appPaths";
import type { ContinueActivitySkill } from "@/lib/continueActivityStorage";

export const WORKSHOP_GRAMMER_PATH = `${WORKSHOP_PATH}/grammer`;
export const WORKSHOP_VOCABULARY_PATH = `${WORKSHOP_PATH}/vocabulary`;
export const WORKSHOP_READING_PATH = `${WORKSHOP_PATH}/reading`;
export const WORKSHOP_LISTENING_PATH = `${WORKSHOP_PATH}/listening`;
export const WORKSHOP_WRITING_PATH = `${WORKSHOP_PATH}/writing`;
export const WORKSHOP_SPEAKING_PATH = `${WORKSHOP_PATH}/speaking`;
export const WORKSHOP_PROGRESS_PATH = `${WORKSHOP_PATH}/progress`;
export const WORKSHOP_HELP_PATH = `${WORKSHOP_PATH}/help`;
export const WORKSHOP_NOTIFICATIONS_PATH = `${WORKSHOP_PATH}/notifications`;

export const LEGACY_WORKSHOP_HASH_TO_SEGMENT: Record<string, string> = {
  grammer: "grammer",
  vocabulary: "vocabulary",
  reading: "reading",
  listening: "listening",
  writing: "writing",
  speaking: "speaking",
  progress: "progress",
  help: "help",
};

const SEGMENT_TO_SKILL: Record<string, ContinueActivitySkill> = {
  grammer: "topics",
  vocabulary: "vocabulary",
  reading: "reading",
  listening: "listening",
  writing: "writing",
  speaking: "speaking",
};

const SKILL_TO_SECTION_PATH: Record<ContinueActivitySkill, string> = {
  topics: WORKSHOP_GRAMMER_PATH,
  vocabulary: WORKSHOP_VOCABULARY_PATH,
  reading: WORKSHOP_READING_PATH,
  listening: WORKSHOP_LISTENING_PATH,
  writing: WORKSHOP_WRITING_PATH,
  speaking: WORKSHOP_SPEAKING_PATH,
};

export function workshopSkillHubPath(skill: ContinueActivitySkill): string {
  return SKILL_TO_SECTION_PATH[skill];
}

export function parseWorkshopSkillHubSegment(
  pathname: string,
): ContinueActivitySkill | null {
  const match = pathname.match(/^\/atolye\/([^/]+)$/);
  if (!match) {
    return null;
  }
  return SEGMENT_TO_SKILL[match[1]] ?? null;
}

export function resolveLegacyWorkshopHref(href: string): string {
  const hashIndex = href.indexOf("#");
  if (hashIndex < 0) {
    return href;
  }

  const path = href.slice(0, hashIndex) || WORKSHOP_PATH;
  const section = href.slice(hashIndex + 1);
  const segment = LEGACY_WORKSHOP_HASH_TO_SEGMENT[section];

  if ((path === WORKSHOP_PATH || path === "/") && segment) {
    return `${WORKSHOP_PATH}/${segment}`;
  }

  return href;
}
