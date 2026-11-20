import {
  activitySkill,
  CONTINUE_ACTIVITY_LIMIT,
  type ContinueActivity,
  type ContinueActivitySkill,
} from "@/lib/continueActivityStorage";

const SKILL_HUB_HREF: Record<ContinueActivitySkill, string> = {
  vocabulary: "/panel#vocabulary",
  topics: "/panel#grammer",
  reading: "/panel#reading",
  listening: "/panel#listening",
  writing: "/panel#writing",
  speaking: "/panel#speaking",
};

const SUGGESTED_SKILL_ORDER: readonly ContinueActivitySkill[] = [
  "vocabulary",
  "topics",
  "reading",
  "listening",
  "writing",
  "speaking",
];

function skillHubSuggestion(skill: ContinueActivitySkill): ContinueActivity {
  return {
    kind: "skill_hub",
    href: SKILL_HUB_HREF[skill],
    skill,
    updatedAt: "",
  };
}

export function quickContinueActivitiesForDisplay(
  stored: ContinueActivity[],
): ContinueActivity[] {
  const result = stored.slice(0, CONTINUE_ACTIVITY_LIMIT);
  const covered = new Set<ContinueActivitySkill>();

  for (const activity of result) {
    const skill = activitySkill(activity);
    if (skill) {
      covered.add(skill);
    }
  }

  for (const skill of SUGGESTED_SKILL_ORDER) {
    if (result.length >= CONTINUE_ACTIVITY_LIMIT) {
      break;
    }
    if (covered.has(skill)) {
      continue;
    }
    result.push(skillHubSuggestion(skill));
    covered.add(skill);
  }

  return result;
}
