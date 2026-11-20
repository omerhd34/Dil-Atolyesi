export function vocabularyQuizTrueFalseAnswer(
  wordId: string,
): "Doğru" | "Yanlış" {
  const statementUsesCorrectMeaning = wordId.length % 2 === 0;
  return statementUsesCorrectMeaning ? "Doğru" : "Yanlış";
}

export function vocabularyQuizTrueFalseUsesCorrectMeaning(
  wordId: string,
): boolean {
  return wordId.length % 2 === 0;
}
