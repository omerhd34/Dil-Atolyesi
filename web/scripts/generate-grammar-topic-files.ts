import { mkdirSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import {
  createTopicContentFromHeading,
  formatTopicContentModule,
} from "@/data/grammar/createTopicContent";
import { allGrammarHeadings } from "@/data/grammar/grammarHeading";
import {
  levelExamContentExportName,
  levelExamContentFileName,
  levelExamTopicId,
} from "@/data/grammar/levelExamTopicIds";
import { CEFR_LEVEL_ORDER, type CefrLevel } from "@/lib/topicAccess";

const GRAMMAR_DIR = path.join(process.cwd(), "data", "grammar");
const TOPIC_ID_MIN = 1;
const TOPIC_ID_MAX = 207;

function headingById(): Map<string, (typeof allGrammarHeadings)[number]> {
  const map = new Map<string, (typeof allGrammarHeadings)[number]>();
  for (const heading of allGrammarHeadings) {
    map.set(heading.id, heading);
  }
  return map;
}

function generateTopicFiles(options: {
  overwrite: boolean;
  preserveRich: boolean;
}): { written: number; skipped: number } {
  let written = 0;
  let skipped = 0;

  for (const heading of allGrammarHeadings) {
    const id = heading.id;

    const filePath = path.join(GRAMMAR_DIR, `${id}.ts`);
    if (!options.overwrite && exists(filePath)) {
      skipped += 1;
      continue;
    }

    if (options.preserveRich && shouldPreserveRich(filePath)) {
      skipped += 1;
      continue;
    }

    const content = createTopicContentFromHeading(heading);
    const moduleSource = formatTopicContentModule(id, content);
    writeFileSync(filePath, moduleSource, "utf8");
    written += 1;
  }

  return { written, skipped };
}

function exists(filePath: string): boolean {
  try {
    readFileSync(filePath);
    return true;
  } catch {
    return false;
  }
}

function shouldPreserveRich(filePath: string): boolean {
  try {
    const source = readFileSync(filePath, "utf8");
    const lineCount = source.split(/\r?\n/).length;
    const hasMultipleParts =
      /parts:\s*\[[\s\S]*?\{[\s\S]*?id:\s*"[^"]+-2"/.test(source) ||
      (source.match(/id:\s*"\d+-/g) ?? []).length > 1;
    return lineCount >= 220 && hasMultipleParts;
  } catch {
    return false;
  }
}

function writeIndexFile(): void {
  const numericIds: string[] = [];
  for (let n = TOPIC_ID_MIN; n <= TOPIC_ID_MAX; n += 1) {
    numericIds.push(String(n));
  }

  const importLines: string[] = [
    'import type { TopicContent } from "@/data/grammar/types";',
    'import { resolveLevelExamTopicId } from "@/data/grammar/levelExamTopicIds";',
  ];

  for (const id of numericIds) {
    importLines.push(
      `import { topicContent${id} } from "@/data/grammar/${id}";`,
    );
  }

  for (const level of CEFR_LEVEL_ORDER) {
    const examFile = levelExamContentFileName(level);
    const exportName = levelExamContentExportName(level);
    importLines.push(
      `import { ${exportName} } from "@/data/grammar/exam/${examFile}";`,
    );
  }

  const mapEntries: string[] = [];
  for (const id of numericIds) {
    mapEntries.push(`  "${id}": topicContent${id},`);
  }

  for (const level of CEFR_LEVEL_ORDER) {
    mapEntries.push(
      `  "${levelExamTopicId(level)}": ${levelExamContentExportName(level)},`,
    );
  }

  const indexSource = `${importLines.join("\n")}

const topicContentById: Record<string, TopicContent> = {
${mapEntries.join("\n")}
};

export function getTopicContent(topicId: string): TopicContent | null {
  const direct = topicContentById[topicId];
  if (direct) {
    return direct;
  }
  const resolved = resolveLevelExamTopicId(topicId);
  return topicContentById[resolved] ?? null;
}

export function hasTopicContent(topicId: string): boolean {
  if (topicId in topicContentById) {
    return true;
  }
  const resolved = resolveLevelExamTopicId(topicId);
  return resolved in topicContentById;
}
`;

  writeFileSync(path.join(GRAMMAR_DIR, "index.ts"), indexSource, "utf8");
}

function main(): void {
  const overwrite = !process.argv.includes("--skip-existing");
  const preserveRich = process.argv.includes("--preserve-rich");

  mkdirSync(GRAMMAR_DIR, { recursive: true });
  const { written, skipped } = generateTopicFiles({ overwrite, preserveRich });
  writeIndexFile();

  const numericFiles = readdirSync(GRAMMAR_DIR).filter((name) =>
    /^\d+\.ts$/.test(name),
  );
  console.log(
    `Konu dosyaları: ${written} yazıldı, ${skipped} atlandı; klasörde ${numericFiles.length} sayısal dosya.`,
  );
  console.log(
    `index.ts: ${TOPIC_ID_MIN}–${TOPIC_ID_MAX} + sınav exam-a1 … exam-c2.`,
  );
}

main();
