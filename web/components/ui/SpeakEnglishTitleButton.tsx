"use client";

import { useTranslations } from "next-intl";
import { Volume2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { speakIconButtonClasses } from "@/lib/speakIconButton";
import { speakText } from "@/lib/speakText";
import { cn } from "@/lib/utils";

type SpeakEnglishTitleButtonProps = {
  text: string;
  className?: string;
  iconClassName?: string;
};

export function SpeakEnglishTitleButton({
  text,
  className,
  iconClassName = "size-3.5",
}: SpeakEnglishTitleButtonProps) {
  const t = useTranslations("Dashboard");

  return (
    <Button
      type="button"
      size="icon-sm"
      variant="ghost"
      data-btn-motion="off"
      className={cn(speakIconButtonClasses("shrink-0"), className)}
      aria-label={t("speakEnglishTitle", { title: text })}
      onClick={(event) => {
        event.stopPropagation();
        speakText(text, "en-US");
      }}
    >
      <Volume2 className={iconClassName} aria-hidden />
    </Button>
  );
}
