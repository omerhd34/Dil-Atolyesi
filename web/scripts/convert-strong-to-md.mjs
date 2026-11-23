import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");

for (const locale of ["tr", "en"]) {
 const filePath = path.join(root, "messages", `${locale}.json`);
 const source = readFileSync(filePath, "utf8");
 const converted = source.replace(
  /<strong>([^<]*)<\/strong>/g,
  (_match, inner) => `**${inner}**`,
 );
 writeFileSync(filePath, converted, "utf8");
}