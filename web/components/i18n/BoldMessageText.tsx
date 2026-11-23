import { Fragment } from "react";
import { normalizeMessageEmphasis } from "@/lib/i18n/messageEmphasis";
import { cn } from "@/lib/utils";

const BOLD_SEGMENT = /\*\*([^*]+)\*\*/;
const ENGLISH_MARKER = /\\([^\\]+)\\/g;

type DisplayChunk =
  | { kind: "text"; value: string }
  | { kind: "en"; value: string };

function parseLessonDisplayChunks(text: string): DisplayChunk[] {
  const chunks: DisplayChunk[] = [];
  let lastIndex = 0;

  for (const match of text.matchAll(ENGLISH_MARKER)) {
    const index = match.index ?? 0;
    if (index > lastIndex) {
      chunks.push({ kind: "text", value: text.slice(lastIndex, index) });
    }
    chunks.push({ kind: "en", value: match[1] ?? "" });
    lastIndex = index + match[0].length;
  }

  if (lastIndex < text.length) {
    chunks.push({ kind: "text", value: text.slice(lastIndex) });
  }

  return chunks.length > 0 ? chunks : [{ kind: "text", value: text }];
}

const englishClass = (emphasized: boolean) =>
  cn(
    "text-sky-600 dark:text-sky-400",
    emphasized ? "font-semibold" : "font-medium",
  );

const defaultEmphasisClass = "font-semibold text-brand-950 dark:text-brand-100";

function InlineContent({
  text,
  emphasized = false,
  emphasisClassName,
}: {
  text: string;
  emphasized?: boolean;
  emphasisClassName: string;
}) {
  const chunks = parseLessonDisplayChunks(text);
  const hasEnglish = chunks.some((chunk) => chunk.kind === "en");

  if (!hasEnglish) {
    if (!text) {
      return null;
    }
    if (emphasized) {
      return <strong className={emphasisClassName}>{text}</strong>;
    }
    return text;
  }

  return (
    <>
      {chunks.map((chunk, index) => {
        if (chunk.kind === "en") {
          if (!chunk.value) {
            return null;
          }
          return (
            <span key={`en-${index}`} className={englishClass(emphasized)}>
              {chunk.value}
            </span>
          );
        }
        if (!chunk.value) {
          return null;
        }
        if (emphasized) {
          return (
            <strong key={`tr-${index}`} className={emphasisClassName}>
              {chunk.value}
            </strong>
          );
        }
        return <Fragment key={`tr-${index}`}>{chunk.value}</Fragment>;
      })}
    </>
  );
}

type BoldMessageTextProps = {
  text: string;
  emphasisClassName?: string;
};

export function BoldMessageText({
  text,
  emphasisClassName = defaultEmphasisClass,
}: BoldMessageTextProps) {
  const normalized = normalizeMessageEmphasis(text);
  const parts = normalized.split(BOLD_SEGMENT);

  if (parts.length === 1) {
    return (
      <InlineContent text={normalized} emphasisClassName={emphasisClassName} />
    );
  }

  return (
    <>
      {parts.map((part, index) => {
        const emphasized = index % 2 === 1;
        if (!part) {
          return null;
        }
        return (
          <Fragment key={index}>
            <InlineContent
              text={part}
              emphasized={emphasized}
              emphasisClassName={emphasisClassName}
            />
          </Fragment>
        );
      })}
    </>
  );
}
