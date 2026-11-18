"use client";

import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { CheckCircle2, ChevronRight, Eye, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { LessonBoldText } from "@/components/features/topics/LessonBoldText";
import { cn } from "@/lib/utils";

type ExerciseResultDialogProps = {
  open: boolean;
  variant: "correct" | "incorrect";
  title?: string | null;
  explanation?: string | null;
  onOpenChange: (open: boolean) => void;
  onContinue: () => void;
  continueLabel: string;
};

export function ExerciseResultDialog({
  open,
  variant,
  title,
  explanation,
  onOpenChange,
  onContinue,
  continueLabel,
}: ExerciseResultDialogProps) {
  const t = useTranslations("Topic");
  const isCorrect = variant === "correct";
  const explanationText = explanation?.trim() ?? "";
  const description = isCorrect
    ? t("correctDialogBody")
    : explanationText || t("incorrectDialogBody");
  const descriptionUsesLessonBold = !isCorrect && Boolean(explanationText);
  const customTitle = title?.trim() ?? "";
  const visibleTitle = isCorrect
    ? customTitle || t("correct")
    : customTitle || null;

  const [iconPlayKey, setIconPlayKey] = useState(0);

  useEffect(() => {
    if (open) {
      setIconPlayKey((value) => value + 1);
    }
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-sm">
        <DialogHeader className="items-center text-center sm:items-center sm:text-center">
          {isCorrect ? (
            <span
              key={`correct-${iconPlayKey}`}
              className={cn(
                "exercise-result-correct-pop mx-auto mb-1 flex size-14 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-600 motion-safe:animate-[exercise-result-correct-pop_0.5s_ease-out] dark:text-emerald-300",
              )}
              aria-hidden
            >
              <CheckCircle2 className="size-7" aria-hidden />
            </span>
          ) : (
            <span
              key={`wrong-${iconPlayKey}`}
              className={cn(
                "exercise-result-wrong-halo mx-auto mb-2 flex size-17 items-center justify-center rounded-full bg-red-500/10 ring-1 ring-red-500/20 motion-safe:animate-[exercise-result-wrong-halo_0.42s_ease-out_both] dark:bg-red-950/35 dark:ring-red-400/25",
              )}
              aria-hidden
            >
              <span
                className={cn(
                  "exercise-result-wrong-badge exercise-result-wrong-badge-pulse flex size-12 items-center justify-center rounded-full bg-linear-to-b from-red-500 to-rose-600 text-white shadow-md shadow-red-500/35 motion-safe:animate-[exercise-result-wrong-badge_0.58s_cubic-bezier(0.34,1.4,0.64,1)_both,exercise-result-wrong-badge-pulse_1s_ease-in-out_0.58s_infinite] dark:from-red-500 dark:to-rose-500 dark:shadow-red-950/50",
                )}
              >
                <X className="size-6" strokeWidth={2.75} aria-hidden />
              </span>
            </span>
          )}
          {visibleTitle ? (
            <DialogTitle
              className={
                isCorrect
                  ? "font-display text-2xl text-emerald-700 dark:text-emerald-300"
                  : "font-display text-2xl text-red-700 dark:text-red-300"
              }
            >
              {visibleTitle}
            </DialogTitle>
          ) : (
            <DialogTitle className="sr-only">{t("incorrect")}</DialogTitle>
          )}
          <DialogDescription className="text-pretty text-sm leading-relaxed">
            {descriptionUsesLessonBold ? (
              <LessonBoldText text={description} />
            ) : (
              description
            )}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter
          className={
            isCorrect
              ? "sm:justify-center"
              : "flex-col gap-2 sm:flex-row sm:justify-center"
          }
        >
          {isCorrect ? (
            <Button
              type="button"
              variant="check"
              className="w-full gap-2 sm:w-auto"
              onClick={() => {
                onOpenChange(false);
                onContinue();
              }}
            >
              {continueLabel}
              <ChevronRight className="size-4" aria-hidden />
            </Button>
          ) : (
            <>
              <Button
                type="button"
                variant="ghost"
                className="w-full gap-2 ring-1 ring-inset ring-foreground/12 hover:bg-muted/50 sm:w-auto dark:ring-foreground/20"
                onClick={() => onOpenChange(false)}
              >
                <Eye className="size-4" aria-hidden />
                {t("seeQuestion")}
              </Button>
              <Button
                type="button"
                variant="check"
                className="w-full gap-2 sm:w-auto"
                onClick={() => {
                  onOpenChange(false);
                  onContinue();
                }}
              >
                {continueLabel}
                <ChevronRight className="size-4" aria-hidden />
              </Button>
            </>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
