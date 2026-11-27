import {
  activitySkill,
  CONTINUE_ACTIVITY_LIMIT,
  type ContinueActivity,
  type ContinueActivitySkill,
} from "@/lib/continueActivityStorage";
import { workshopSkillHubPath } from "@/lib/workshopSectionRoutes";

export const QUICK_CONTINUE_DISPLAY_LIMIT = 2;

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
    href: workshopSkillHubPath(skill),
    skill,
    updatedAt: "",
  };
}

export function quickContinueActivitiesForDisplay(
  stored: ContinueActivity[],
  limit: number = QUICK_CONTINUE_DISPLAY_LIMIT,
): ContinueActivity[] {
  const cap = Math.min(Math.max(1, limit), CONTINUE_ACTIVITY_LIMIT);
  const result = stored.slice(0, cap);
  const covered = new Set<ContinueActivitySkill>();

  for (const activity of result) {
    const skill = activitySkill(activity);
    if (skill) {
      covered.add(skill);
    }
  }

  for (const skill of SUGGESTED_SKILL_ORDER) {
    if (result.length >= cap) {
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
