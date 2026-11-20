"use client";

import { cloneElement, isValidElement, type ReactElement } from "react";
import { cn } from "@/lib/utils";

type EnglishUiHintProps = {
  hint: string;
  children: ReactElement;
  wrapperClassName?: string;
};

const hintSlotClassName = cn(
  "grid w-full transition-[grid-template-rows,opacity] duration-200 ease-out",
  "grid-rows-[0fr] opacity-0",
  "group-hover/en-hint:grid-rows-[1fr] group-hover/en-hint:opacity-100",
  "group-focus-within/en-hint:grid-rows-[1fr] group-focus-within/en-hint:opacity-100",
  "motion-reduce:transition-none",
);

const hintInnerClassName =
  "box-border flex min-h-0 w-full justify-center overflow-hidden px-1.5";

const hintChipClassName = cn(
  "mt-1.5 inline-flex max-w-full items-center justify-center overflow-visible rounded-full",
  "border border-sky-500/22 bg-sky-500/10 px-3 py-0.5 text-center",
  "shadow-[0_1px_0_rgb(255_255_255/55%)_inset]",
  "transition-[transform,opacity] duration-200 ease-out",
  "scale-[0.98] group-hover/en-hint:scale-100 group-focus-within/en-hint:scale-100",
  "dark:border-sky-400/20 dark:bg-sky-400/12 dark:shadow-[0_1px_0_rgb(255_255_255/8%)_inset]",
);

const hintTextClassName = cn(
  "whitespace-nowrap pr-0.5 text-[10px] leading-tight font-medium tracking-wide text-sky-950 italic",
  "dark:text-sky-50",
);

export function EnglishUiHint({
  hint,
  children,
  wrapperClassName,
}: EnglishUiHintProps) {
  const wrapperTokens = wrapperClassName?.split(/\s+/) ?? [];
  const fillWidth =
    wrapperTokens.includes("w-full") ||
    Boolean(wrapperClassName?.includes("w-full"));
  const flexGrow = Boolean(wrapperClassName?.includes("flex-1"));
  const fillLayout = fillWidth || flexGrow;

  const control =
    fillLayout && isValidElement<{ className?: string }>(children)
      ? cloneElement(children, {
          className: cn("min-w-0 w-full", children.props.className),
        })
      : children;

  return (
    <span
      className={cn(
        "group/en-hint min-w-0",
        fillLayout
          ? cn("flex w-full flex-col items-center", flexGrow && "flex-1")
          : "inline-flex flex-col items-center",
        wrapperClassName,
      )}
    >
      {control}
      <span role="tooltip" className={hintSlotClassName} aria-label={hint}>
        <span className={hintInnerClassName}>
          <span className={hintChipClassName}>
            <span className={hintTextClassName}>{hint}</span>
          </span>
        </span>
      </span>
    </span>
  );
}
