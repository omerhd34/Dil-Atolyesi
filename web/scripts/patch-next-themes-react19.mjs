import fs from "node:fs";
import path from "node:path";

const distDir = path.join(process.cwd(), "node_modules", "next-themes", "dist");
const disabledMjs = "_=t.memo(()=>null),H=";
const disabledJs = "Y=t.memo(()=>null),Z=";

function disableThemeScript(content, begin, endMarker, replacement) {
 if (content.includes(replacement)) {
  return content;
 }
 const start = content.indexOf(begin);
 if (start === -1) {
  return content;
 }
 const end = content.indexOf(endMarker, start);
 if (end === -1) {
  return content;
 }
 return content.slice(0, start) + replacement + content.slice(end + endMarker.length);
}

if (!fs.existsSync(distDir)) {
 process.exit(0);
}

const files = [
 {
  file: "index.mjs",
  begin: "_=t.memo(",
  end: "}),H=",
  replacement: disabledMjs,
 },
 {
  file: "index.js",
  begin: "Y=t.memo(",
  end: "}),Z=",
  replacement: disabledJs,
 },
];

for (const { file, begin, end, replacement } of files) {
 const filePath = path.join(distDir, file);
 if (!fs.existsSync(filePath)) {
  continue;
 }

 const before = fs.readFileSync(filePath, "utf8");
 const after = disableThemeScript(before, begin, end, replacement);
 if (after === before) {
  if (!before.includes(replacement)) {
   console.warn(
    `[patch-next-themes] ${file}: ThemeScript bulunamadı (sürüm değişmiş olabilir).`,
   );
  }
  continue;
 }

 fs.writeFileSync(filePath, after);
 console.log(`[patch-next-themes] ${file} — ThemeScript devre dışı.`);
}