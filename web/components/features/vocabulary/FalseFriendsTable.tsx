"use client";

import { useTranslations } from "next-intl";
import type { FalseFriendEntry } from "@/data/vocabulary/falseFriends";
import { VerbFormSpeakButton } from "@/components/features/vocabulary/VerbFormSpeakButton";

type FalseFriendsTableProps = {
  entries: FalseFriendEntry[];
};

export function FalseFriendsTable({ entries }: FalseFriendsTableProps) {
  const t = useTranslations("Vocabulary");

  return (
    <div className="overflow-x-auto rounded-2xl border border-border bg-card shadow-sm scrollbar-gutter-stable">
      <table className="w-full min-w-180 table-fixed border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-border bg-muted/50">
            <th scope="col" className="px-4 py-3 font-semibold">
              {t("falseFriendsColEnglish")}
            </th>
            <th scope="col" className="px-4 py-3 font-semibold">
              {t("falseFriendsColMeaning")}
            </th>
            <th
              scope="col"
              className="hidden px-4 py-3 font-semibold md:table-cell"
            >
              {t("falseFriendsColTrap")}
            </th>
            <th scope="col" className="px-4 py-3 font-semibold">
              {t("falseFriendsColExample")}
            </th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry) => (
            <tr
              key={entry.id}
              className="border-b border-border/80 last:border-0 even:bg-muted/20"
            >
              <td className="px-4 py-3 align-top font-medium">
                <div className="flex items-center gap-2">
                  <VerbFormSpeakButton form={entry.english} />
                  <span>{entry.english}</span>
                </div>
                <p className="mt-1 text-xs text-muted-foreground md:hidden">
                  <span className="inline-flex items-center gap-1.5">
                    <VerbFormSpeakButton
                      form={entry.confusedSpeak}
                      lang={entry.confusedSpeakLang ?? "en-US"}
                    />
                    <span>{entry.turkishTrap}</span>
                  </span>
                  : {entry.trapNoteTr}
                </p>
              </td>
              <td className="px-4 py-3 align-top text-muted-foreground">
                {entry.englishMeaningTr}
              </td>
              <td className="hidden px-4 py-3 align-top md:table-cell">
                <div className="flex items-start gap-2 font-medium">
                  <VerbFormSpeakButton
                    form={entry.confusedSpeak}
                    lang={entry.confusedSpeakLang ?? "en-US"}
                  />
                  <span>{entry.turkishTrap}</span>
                </div>
                <p className="mt-1 text-xs text-muted-foreground">
                  {entry.trapNoteTr}
                </p>
              </td>
              <td className="px-4 py-3 align-top">
                <p>{entry.exampleEn}</p>
                <p className="mt-1 text-xs text-muted-foreground">
                  {entry.exampleTr}
                </p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
