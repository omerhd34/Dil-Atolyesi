"use client";

import { BoldMessageText } from "@/components/i18n/BoldMessageText";
import { useTranslations } from "next-intl";
import { Check, LetterF, LetterM, type LucideIcon } from "lucide-react";
import { useBrowserSpeechVoices } from "@/hooks/useBrowserSpeechVoices";
import { useSpeechVoiceGender } from "@/hooks/useSpeechVoiceGender";
import { SPEECH_VOICE_GENDERS, speakText } from "@/lib/speakText";
import { getTurkishFemaleMissingMessageKey } from "@/lib/browserSpeechHint";
import {
  hasTurkishFemaleSpeechVoice,
  type SpeechVoiceGender,
} from "@/lib/speechVoiceGender";
import { cn } from "@/lib/utils";

const GENDER_LABEL_KEYS = {
  female: "speechVoiceFemale",
  male: "speechVoiceMale",
} as const satisfies Record<SpeechVoiceGender, string>;

const GENDER_ICONS: Record<SpeechVoiceGender, LucideIcon> = {
  female: LetterF,
  male: LetterM,
};

type SpeechVoiceControlProps = {
  className?: string;
};

export function SpeechVoiceControl({ className }: SpeechVoiceControlProps) {
  const t = useTranslations("Settings");
  const { gender, setGender } = useSpeechVoiceGender();
  const voices = useBrowserSpeechVoices();
  const turkishFemaleLocal =
    voices.length === 0 || hasTurkishFemaleSpeechVoice(voices);

  function previewGender(option: SpeechVoiceGender) {
    if (option === "female") {
      speakText(t("speechVoicePreviewSampleTr"), "tr-TR");
      return;
    }
    speakText(t("speechRatePreviewSample"), "en-US");
  }

  return (
    <fieldset className={cn("border-0 p-0", className)}>
      <legend className="mb-3 text-sm font-medium text-brand-950 dark:text-brand-100">
        {t("speechVoiceGenderLabel")}
      </legend>
      <p className="mb-3 text-xs leading-relaxed text-brand-600 dark:text-brand-400">
        {t("speechVoiceGenderHint")}
      </p>
      {!turkishFemaleLocal ? (
        <p
          className="mb-3 rounded-lg border border-amber-500/35 bg-amber-500/10 px-3 py-2 text-xs leading-relaxed text-amber-950 dark:text-amber-100"
          role="status"
        >
          <BoldMessageText text={t(getTurkishFemaleMissingMessageKey())} />
        </p>
      ) : null}
      <ul
        className="grid grid-cols-2 gap-2"
        role="group"
        aria-label={t("speechVoiceGenderLabel")}
      >
        {SPEECH_VOICE_GENDERS.map((option) => {
          const selected = gender === option;
          const label = t(GENDER_LABEL_KEYS[option]);
          const GenderIcon = GENDER_ICONS[option];
          return (
            <li key={option} className="min-w-0">
              <button
                type="button"
                aria-pressed={selected}
                aria-label={t("speechVoicePreview", { voice: label })}
                onClick={() => {
                  setGender(option);
                  previewGender(option);
                }}
                className={cn(
                  "settings-tile-button interaction-motion group/settings-tile relative flex h-full w-full min-w-0 cursor-pointer items-center gap-2 rounded-xl border px-3 py-2.5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/40",
                  selected
                    ? "border-sky-500/45 bg-sky-500/5 dark:border-sky-400/40 dark:bg-sky-400/10"
                    : "border-border bg-background/80 hover:border-sky-500/45 hover:bg-sky-500/5 dark:bg-brand-950/40",
                )}
              >
                <span className="inline-flex size-7 shrink-0 items-center justify-center rounded-lg bg-brand-100 text-brand-700 transition-colors duration-950 ease-[cubic-bezier(0.33,0,0.2,1)] group-hover/settings-tile:text-sky-700 dark:bg-brand-900 dark:text-brand-200 dark:group-hover/settings-tile:text-sky-300">
                  <GenderIcon className="size-4" aria-hidden />
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
