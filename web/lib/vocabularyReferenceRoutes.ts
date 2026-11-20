export const VOCABULARY_REFERENCE_IDS = [
  "today-worked",
  "known-words",
  "verbs",
  "false-friends",
  "phrasal-verbs",
  "prepositions",
] as const;

export type VocabularyReferenceId = (typeof VOCABULARY_REFERENCE_IDS)[number];

const VOCABULARY_REFERENCE_ID_SET = new Set<string>(VOCABULARY_REFERENCE_IDS);

export function isVocabularyReferenceId(
  value: string,
): value is VocabularyReferenceId {
  return VOCABULARY_REFERENCE_ID_SET.has(value);
}
