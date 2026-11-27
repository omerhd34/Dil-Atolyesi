"use client";

import { useTranslations } from "next-intl";
import { Volume2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { speakIconButtonClasses } from "@/lib/speakIconButton";
import { speakText } from "@/lib/speakText";

type ExerciseListenWordButtonProps = {
  text: string;
};

export function ExerciseListenWordButton({
  text,
}: ExerciseListenWordButtonProps) {
  const t = useTranslations("Exercises");
  const spoken = text.trim();
  if (!spoken) {
    return null;
  }

  return (
    <Button
      type="button"
      size="sm"
      variant="outline"
      data-btn-motion="off"
      className={speakIconButtonClasses(
        "border-brand-400/50 dark:border-brand-500/40",
      )}
      aria-label={t("listenWord", { word: spoken })}
      onClick={(event) => {
        event.stopPropagation();
        speakText(spoken, "en-US");
      }}
    >
      <Volume2 className="size-4" aria-hidden />
      {t("listen")}
    </Button>
  );
}
