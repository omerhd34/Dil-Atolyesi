export const EXAM_PASS_RATIO = 0.9;
export const EXAM_PASS_PERCENT = Math.round(EXAM_PASS_RATIO * 100);

export const examPassCopy = { percent: EXAM_PASS_PERCENT } as const;

export function didPassExamScore(correct: number, total: number): boolean {
  if (total <= 0) {
    return false;
  }
  return correct / total >= EXAM_PASS_RATIO;
}
