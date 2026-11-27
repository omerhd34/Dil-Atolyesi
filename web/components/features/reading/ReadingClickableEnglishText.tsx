"use client";

import { Fragment, useMemo, useState, type ReactNode } from "react";
import type { ReadingLevel, ReadingTextHighlight } from "@/data/readings/types";
import { ReadingWordLookupPopover } from "@/components/features/reading/ReadingWordLookupPopover";
import { englishDigitSpeakText } from "@/lib/reading/englishDigitSpeakText";
import { normalizeEnglishLemma } from "@/lib/reading/normalizeEnglishLemma";
import type { ReadingWordLookupResult } from "@/lib/reading/readingWordLookup";
import {
  splitTextByHighlights,
  tokenizeEnglishText,
} from "@/lib/reading/tokenizeEnglishText";
import { READING_WORD_SURFACE_HIGHLIGHT_CLASS } from "@/lib/reading/readingSpeakHighlight";
import { READING_SPEAK_WORD_ACTIVE_STYLE } from "@/lib/reading/readingSpeakWordActiveStyle";
import { cn } from "@/lib/utils";

export type ReadingWordTapMode = "glossaryOnly" | "allWords";

type ReadingClickableEnglishTextProps = {
  text: string;
  highlights?: ReadingTextHighlight[];
  readingLevel: ReadingLevel;
  glossary?: Record<string, string>;
  paragraphKey: string;
  className?: string;
  speakWordOffset?: number;
  activeSpeakWordIndex?: number | null;
  wordTapMode?: ReadingWordTapMode;
  activeTokenId?: string | null;
  onActiveTokenIdChange?: (tokenId: string | null) => void;
};

export function ReadingClickableEnglishText({
  text,
  highlights,
  readingLevel,
  glossary,
  paragraphKey,
  className,
  speakWordOffset,
  activeSpeakWordIndex = null,
  wordTapMode = "glossaryOnly",
  activeTokenId: controlledActiveTokenId,
  onActiveTokenIdChange,
}: ReadingClickableEnglishTextProps) {
  const resolvedSpeakWordOffset = speakWordOffset ?? 0;
  const segments = useMemo(
    () => splitTextByHighlights(text, highlights ?? []),
    [text, highlights],
  );
  const [internalActiveTokenId, setInternalActiveTokenId] = useState<
    string | null
  >(null);
  const activeTokenId =
    onActiveTokenIdChange !== undefined
      ? (controlledActiveTokenId ?? null)
      : internalActiveTokenId;
  const setActiveTokenId = onActiveTokenIdChange ?? setInternalActiveTokenId;

  function wordSurfaceDisplay(surface: string, lemma: string): string {
    return surface.replace(/^[^A-Za-z0-9']+|[^A-Za-z0-9']+$/g, "") || lemma;
  }

  function resolveWordLookup(
    surface: string,
    lemma: string,
  ): ReadingWordLookupResult | null {
    const tr = glossary?.[lemma];
    if (wordTapMode === "glossaryOnly" && tr === undefined) {
      return null;
    }
    return {
      lemma,
      display: wordSurfaceDisplay(surface, lemma),
      tr,
      level: readingLevel,
      fromGlossary: tr !== undefined,
    };
  }

  function resolveNumberLookup(
    surface: string,
    digits: string,
  ): ReadingWordLookupResult | null {
    const tr = glossary?.[digits];
    if (wordTapMode === "glossaryOnly" && tr === undefined) {
      return null;
    }
    return {
      lemma: digits,
      display: englishDigitSpeakText(digits),
      tr,
      level: readingLevel,
      fromGlossary: tr !== undefined,
    };
  }

  function renderTokens(
    segmentText: string,
    segmentKey: string,
    emphasize: boolean,
    initialLocalWordIndex: number,
  ): { nodes: ReactNode[]; nextLocalWordIndex: number } {
    const tokens = tokenizeEnglishText(
      segmentText,
      `${paragraphKey}-${segmentKey}`,
    );
    let localWordIndex = initialLocalWordIndex;
    const nodes: ReactNode[] = [];

    for (const token of tokens) {
      if (token.kind === "other") {
        nodes.push(<Fragment key={token.id}>{token.value}</Fragment>);
        continue;
      }

      if (token.kind === "number") {
        const lookup = resolveNumberLookup(token.value, token.value);
        if (!lookup) {
          nodes.push(
            <span key={token.id} className="tabular-nums">
              {token.value}
            </span>,
          );
          continue;
        }
        nodes.push(
          <ReadingWordLookupPopover
            key={token.id}
            tokenId={token.id}
            surface={token.value}
            lookup={lookup}
            open={activeTokenId === token.id}
            onOpenChange={(nextOpen) =>
              setActiveTokenId(nextOpen ? token.id : null)
            }
            emphasize={emphasize}
            wordClassName="tabular-nums"
          />,
        );
        continue;
      }

      const globalSpeakIndex = resolvedSpeakWordOffset + localWordIndex;
      const isSpeakingActive = activeSpeakWordIndex === globalSpeakIndex;
      const highlightClassName = isSpeakingActive
        ? READING_WORD_SURFACE_HIGHLIGHT_CLASS
        : undefined;
      const highlightStyle = isSpeakingActive
        ? READING_SPEAK_WORD_ACTIVE_STYLE
        : undefined;

      localWordIndex += 1;

      const lemma = normalizeEnglishLemma(token.value);
      if (!lemma) {
        nodes.push(
          <span
            key={token.id}
            className={highlightClassName}
            style={highlightStyle}
            data-reading-speak-word={isSpeakingActive ? "" : undefined}
          >
            {token.value}
          </span>,
        );
        continue;
      }

      const lookup = resolveWordLookup(token.value, lemma);
      if (!lookup) {
        nodes.push(
          <span
            key={token.id}
            className={highlightClassName}
            style={highlightStyle}
            data-reading-speak-word={isSpeakingActive ? "" : undefined}
          >
            {token.value}
          </span>,
        );
        continue;
      }

      nodes.push(
        <ReadingWordLookupPopover
          key={token.id}
          tokenId={token.id}
          surface={token.value}
          lookup={lookup}
          open={activeTokenId === token.id}
          onOpenChange={(nextOpen) =>
            setActiveTokenId(nextOpen ? token.id : null)
          }
          emphasize={emphasize}
          speakHighlight={isSpeakingActive}
          speakHighlightStyle={highlightStyle}
        />,
      );
    }

    return { nodes, nextLocalWordIndex: localWordIndex };
  }

  let runningLocalWordIndex = 0;
  const renderedSegments: ReactNode[] = [];

  for (let index = 0; index < segments.length; index += 1) {
    const segment = segments[index];
    if (!segment) {
      continue;
    }
    const segmentKey = `${index}-${segment.highlightId ?? "plain"}`;
    const { nodes, nextLocalWordIndex } = renderTokens(
      segment.text,
      segmentKey,
      Boolean(segment.highlightId),
      runningLocalWordIndex,
    );
    runningLocalWordIndex = nextLocalWordIndex;

    if (segment.highlightId) {
      renderedSegments.push(
        <strong
          key={segmentKey}
          className="font-semibold text-brand-950 dark:text-brand-50"
        >
          {nodes}
        </strong>,
      );
    } else {
      renderedSegments.push(<Fragment key={segmentKey}>{nodes}</Fragment>);
    }
  }

  return <span className={cn(className)}>{renderedSegments}</span>;
}
