"use client";

import { useTranslations } from "next-intl";
import { Check, Volume2 } from "lucide-react";
import { useSpeechRate } from "@/hooks/useSpeechRate";
import {
  SPEECH_RATE_PRESETS,
  speakText,
  type SpeechRatePreset,
} from "@/lib/speakText";
import { cn } from "@/lib/utils";

const RATE_LABEL_KEYS = [
  "speechRateVerySlow",
  "speechRateSlow",
  "speechRateNormal",
  "speechRateFast",
  "speechRateFaster",
  "speechRateMax",
] as const;

const RATE_OPTIONS = SPEECH_RATE_PRESETS.map((rate, index) => ({
  rate,
  labelKey: RATE_LABEL_KEYS[index]!,
})) satisfies ReadonlyArray<{
  rate: SpeechRatePreset;
  labelKey: (typeof RATE_LABEL_KEYS)[number];
}>;

type SpeechRateControlProps = {
  className?: string;
};

export function SpeechRateControl({ className }: SpeechRateControlProps) {
  const t = useTranslations("Settings");
  const { rate, setRate } = useSpeechRate();

  return (
    <fieldset className={cn("border-0 p-0", className)}>
      <legend className="mb-3 text-sm font-medium text-brand-950 dark:text-brand-100">
        {t("speechRateLabel")}
      </legend>
      <ul
        className="grid grid-cols-2 gap-2"
        role="group"
        aria-label={t("speechRateLabel")}
      >
        {RATE_OPTIONS.map((option) => {
          const selected = Math.abs(rate - option.rate) < 0.001;
          const label = t(option.labelKey);
          return (
            <li key={option.rate} className="min-w-0">
              <button
                type="button"
                aria-pressed={selected}
                aria-label={t("speechRatePreview", { rate: label })}
                onClick={() => {
                  setRate(option.rate);
                  speakText(t("speechRatePreviewSample"), "en-US", option.rate);
                }}
                className={cn(
                  "settings-tile-button interaction-motion group/settings-tile relative flex h-full w-full min-w-0 cursor-pointer items-center gap-2 rounded-xl border px-3 py-2.5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/40",
                  selected
                    ? "border-sky-500/45 bg-sky-500/5 dark:border-sky-400/40 dark:bg-sky-400/10"
                    : "border-border bg-background/80 hover:border-sky-500/45 hover:bg-sky-500/5 dark:bg-brand-950/40",
                )}
              >
                <span className="inline-flex size-7 shrink-0 items-center justify-center rounded-lg bg-brand-100 text-brand-700 transition-colors duration-950 ease-[cubic-bezier(0.33,0,0.2,1)] group-hover/settings-tile:text-sky-700 dark:bg-brand-900 dark:text-brand-200 dark:group-hover/settings-tile:text-sky-300">
                  <Volume2 className="size-3.5" aria-hidden />
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
