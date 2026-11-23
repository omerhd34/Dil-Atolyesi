import fs from "node:fs";
import path from "node:path";

const grammarDir = path.join(process.cwd(), "data", "grammar");

const SKIP_FILES = new Set([
 "types.ts",
 "topicExercises.ts",
 "index.ts",
 "createTopicContent.ts",
 "dashboardTopics.ts",
 "grammarHeading.ts",
 "levelExamClues.ts",
]);

function extractTopicId(content) {
 const match = content.match(/topicId:\s*["']([^"']+)["']/);
 return match?.[1] ?? null;
}

function extractFirstSubtopicId(content) {
 const match = content.match(
  /lesson:\s*\{[\s\S]*?parts:\s*\[[\s\S]*?id:\s*["']([^"']+)["']/,
 );
 return match?.[1] ?? null;
}

function extractSpeakText(content) {
 const fillBlank = content.match(
  /exercisesFillBlank:\s*\[[\s\S]*?answer:\s*["']([^"']+)["']/,
 );
 if (fillBlank?.[1]) {
  return fillBlank[1];
 }

 const exampleEn = content.match(/exampleEn:\s*["']([^"']+)["']/);
 if (exampleEn?.[1] && exampleEn[1].trim().length >= 2) {
  return exampleEn[1].trim();
 }

 const exampleWord = content.match(
  /examples:\s*\[[\s\S]*?en:\s*["']([^"']{2,})["']/,
 );
 if (exampleWord?.[1]) {
  return exampleWord[1].trim();
 }

 return "hello";
}

function buildListeningBlock(topicId, subtopicId, speakText) {
 const lower = speakText.toLocaleLowerCase("en-US");
 const accepted =
  speakText === lower
   ? [speakText]
   : [`      acceptedAnswers: [${JSON.stringify(speakText)}, ${JSON.stringify(lower)}],`];

 const acceptedLine =
  speakText === lower
   ? `      acceptedAnswers: [${JSON.stringify(speakText)}],`
   : `      acceptedAnswers: [${JSON.stringify(speakText)}, ${JSON.stringify(lower)}],`;

 return `  exercisesListening: [
    {
      id: "${topicId}-listen-01",
      subtopicId: "${subtopicId}",
      type: "listening",
      prompt: "Dinlediğini İngilizce olarak yaz.",
      speakText: ${JSON.stringify(speakText)},
      answer: ${JSON.stringify(speakText)},
${acceptedLine}
    },
  ],`;
}

function insertListening(content, block) {
 if (/\n  quiz:\s*\[/.test(content)) {
  return content.replace(/\n  quiz:\s*\[/, `\n${block}\n  quiz: [`);
 }
 return content.replace(/\n};\s*$/, `\n${block}\n};`);
}

const files = fs
 .readdirSync(grammarDir)
 .filter((name) => name.endsWith(".ts") && !SKIP_FILES.has(name));

let updated = 0;
let skipped = 0;

for (const file of files) {
 const filePath = path.join(grammarDir, file);
 let content = fs.readFileSync(filePath, "utf8");

 if (!content.includes("export const topicContent")) {
  continue;
 }

 if (content.includes("exercisesListening:")) {
  skipped += 1;
  continue;
 }

 const topicId = extractTopicId(content);
 const subtopicId = extractFirstSubtopicId(content);
 if (!topicId || !subtopicId) {
  console.warn(`Skip ${file}: missing topicId or subtopicId`);
  continue;
 }

 const speakText = extractSpeakText(content);
 const block = buildListeningBlock(topicId, subtopicId, speakText);
 const next = insertListening(content, block);

 if (next === content) {
  console.warn(`Skip ${file}: could not find insertion point`);
  continue;
 }

 fs.writeFileSync(filePath, next, "utf8");
 updated += 1;
}

console.log(`Updated ${updated} files, skipped ${skipped} (already had listening).`);