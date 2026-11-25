"use client";

import {
  useLayoutEffect,
  useRef,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from "react";
import { mediaQueryMin } from "@/lib/breakpoints";
import { cn } from "@/lib/utils";

type EducationStepsGridProps = {
  children: ReactNode;
  className?: string;
} & Omit<ComponentPropsWithoutRef<"ul">, "children" | "className">;

const GRID_MIN_WIDTH = mediaQueryMin("sm");
const CARD_SELECTOR = ".education-step-card";

function syncEducationStepCardHeights(root: HTMLElement, enabled: boolean) {
  const cards = root.querySelectorAll<HTMLElement>(CARD_SELECTOR);

  for (const card of cards) {
    card.style.minHeight = "";
  }

  if (!enabled || cards.length === 0) {
    return;
  }

  let maxHeight = 0;
  for (const card of cards) {
    maxHeight = Math.max(maxHeight, card.getBoundingClientRect().height);
  }

  const minHeight = `${Math.ceil(maxHeight)}px`;
  for (const card of cards) {
    card.style.minHeight = minHeight;
  }
}

export function EducationStepsGrid({
  children,
  className,
  ...props
}: EducationStepsGridProps) {
  const listRef = useRef<HTMLUListElement>(null);

  useLayoutEffect(() => {
    const root = listRef.current;
    if (!root) {
      return;
    }

    const mq = window.matchMedia(GRID_MIN_WIDTH);

    const run = () => {
      syncEducationStepCardHeights(root, mq.matches);
    };

    run();

    const observer = new ResizeObserver(run);
    observer.observe(root);
    for (const card of root.querySelectorAll<HTMLElement>(CARD_SELECTOR)) {
      observer.observe(card);
    }

    const onMqChange = () => run();
    mq.addEventListener("change", onMqChange);

    return () => {
      observer.disconnect();
      mq.removeEventListener("change", onMqChange);
      syncEducationStepCardHeights(root, false);
    };
  }, []);

  return (
    <ul
      ref={listRef}
      className={cn(
        "education-steps-grid mt-12 grid list-none gap-5 sm:grid-cols-2 sm:items-stretch lg:gap-6",
        className,
      )}
      {...props}
    >
      {children}
    </ul>
  );
}
