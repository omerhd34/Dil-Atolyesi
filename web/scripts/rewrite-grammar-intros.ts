import { writeFileSync } from "node:fs";
import path from "node:path";
import type { CefrLevel, GrammarHeading } from "@/data/grammar/grammarHeading";
import { allGrammarHeadings } from "@/data/grammar/grammarHeading";
import {
  enrichHeadingIntro,
  isTemplateIntro,
} from "@/lib/grammar/craftGrammarIntro";

const LEVELS: CefrLevel[] = ["A1", "A2", "B1", "B2", "C1", "C2"];

const FILE_HEADER = `export type CefrLevel = "A1" | "A2" | "B1" | "B2" | "C1" | "C2";

export type GrammarHeading = {
  id: string;
  level: CefrLevel;
  title: string;
  titleEng: string;
  titleEx: string;
  intro: string;
};

`;

function formatHeading(h: GrammarHeading): string {
  const introLines =
    h.intro.length > 96
      ? `      intro:\n        ${JSON.stringify(h.intro)},`
      : `      intro: ${JSON.stringify(h.intro)},`;

  return `    {
      id: ${JSON.stringify(h.id)},
      level: ${JSON.stringify(h.level)},
      title: ${JSON.stringify(h.title.trim())},
      titleEng: ${JSON.stringify(h.titleEng.trim())},
      titleEx: ${JSON.stringify(h.titleEx)},
${introLines}
    },`;
}

function buildFile(headings: GrammarHeading[]): string {
  const byLevel = new Map<CefrLevel, GrammarHeading[]>();
  for (const level of LEVELS) {
    byLevel.set(level, []);
  }
  for (const h of headings) {
    byLevel.get(h.level)?.push(h);
  }

  const levelBlocks = LEVELS.map((level) => {
    const items = byLevel.get(level) ?? [];
    return `  ${level}: [\n${items.map(formatHeading).join("\n")}\n  ],`;
  }).join("\n");

  return `${FILE_HEADER}export const grammarHeadings: Record<CefrLevel, GrammarHeading[]> = {
${levelBlocks}
};

export const allGrammarHeadings: GrammarHeading[] = (
  Object.keys(grammarHeadings) as CefrLevel[]
)
  .flatMap((level) => grammarHeadings[level])
  .sort((a, b) => Number.parseInt(a.id, 10) - Number.parseInt(b.id, 10));
`;
}

function main(): void {
  const forceAll = process.argv.includes("--force-all");
  const enriched = allGrammarHeadings.map((h) =>
    enrichHeadingIntro(h, { force: forceAll }),
  );

  const stillTemplate = enriched.filter((h) => isTemplateIntro(h.intro)).length;
  const outPath = path.join(
    process.cwd(),
    "data",
    "grammar",
    "grammarHeading.ts",
  );
  writeFileSync(outPath, buildFile(enriched), "utf8");

  console.log(
    `grammarHeading.ts: ${enriched.length} intro güncellendi; şablon kalan: ${stillTemplate}.`,
  );
}

main();
