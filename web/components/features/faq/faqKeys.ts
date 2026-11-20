export const FAQ_KEYS = [
  "what",
  "level",
  "ai",
  "free",
  "pace",
  "contact",
] as const;

export type FaqKey = (typeof FAQ_KEYS)[number];
