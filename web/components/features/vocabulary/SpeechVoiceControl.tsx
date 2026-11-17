"use client";

import { useTranslations } from "next-intl";
import { Check, UserRound } from "lucide-react";
import { useSpeechVoiceGender } from "@/hooks/useSpeechVoiceGender";
import { SPEECH_VOICE_GENDERS, speakText } from "@/lib/speakText";
import type { SpeechVoiceGender } from "@/lib/speechVoiceGender";
import { cn } from "@/lib/utils";

const GENDER_LABEL_KEYS = {
  female: "speechVoiceFemale",
  male: "speechVoiceMale",
} as const satisfies Record<SpeechVoiceGender, string>;

type SpeechVoiceControlProps = {
  className?: string;
};

export function SpeechVoiceControl({ className }: SpeechVoiceControlProps) {
  const t = useTranslations("Settings");
  const { gender, setGender } = useSpeechVoiceGender();

  return (
    <fieldset className={cn("border-0 p-0", className)}>
      <legend className="mb-3 text-sm font-medium text-brand-950 dark:text-brand-100">
        {t("speechVoiceGenderLabel")}
      </legend>
      <ul
        className="grid grid-cols-2 gap-2"
        role="group"
        aria-label={t("speechVoiceGenderLabel")}
      >
        {SPEECH_VOICE_GENDERS.map((option) => {
          const selected = gender === option;
          const label = t(GENDER_LABEL_KEYS[option]);
          return (
            <li key={option} className="min-w-0">
              <button
                type="button"
                aria-pressed={selected}
                aria-label={t("speechVoicePreview", { voice: label })}
                onClick={() => {
                  setGender(option);
                  speakText(t("speechRatePreviewSample"), "en-US");
                }}
                className={cn(
                  "relative flex h-full w-full min-w-0 cursor-pointer items-center gap-2 rounded-xl border px-3 py-2.5 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/40",
                  selected
                    ? "border-sky-500/45 bg-sky-500/5 dark:border-sky-400/40 dark:bg-sky-400/10"
                    : "border-border bg-background/80 hover:border-sky-500/45 hover:bg-sky-500/5 dark:bg-brand-950/40",
                )}
              >
                <span className="inline-flex size-7 shrink-0 items-center justify-center rounded-lg bg-brand-100 text-brand-700 dark:bg-brand-900 dark:text-brand-200">
                  <UserRound className="size-3.5" aria-hidden />
                </span>
                <span className="min-w-0 flex-1 pe-5 text-sm font-medium text-brand-950 dark:text-brand-100">
                  {label}
                </span>
                <span
                  className={cn(
                    "absolute top-1/2 right-2.5 inline-flex size-5 -translate-y-1/2 items-center justify-center rounded-full transition-colors",
                    selected
                      ? "bg-sky-600 text-white dark:bg-sky-500 dark:text-sky-950"
                      : "bg-brand-100 text-transparent dark:bg-brand-900",
                  )}
                  aria-hidden
                >
                  <Check className="size-3" strokeWidth={2.5} />
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </fieldset>
  );
}
