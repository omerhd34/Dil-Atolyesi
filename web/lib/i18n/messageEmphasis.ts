export function normalizeMessageEmphasis(text: string): string {
  return text.replaceAll(/<strong>([^<]*)<\/strong>/g, "**$1**");
}
