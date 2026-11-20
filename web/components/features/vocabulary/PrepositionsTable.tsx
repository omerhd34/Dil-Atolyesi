"use client";

import { useTranslations } from "next-intl";
import type { PrepositionEntry } from "@/data/vocabulary/prepositions";
import { VerbFormSpeakButton } from "@/components/features/vocabulary/VerbFormSpeakButton";

type PrepositionsTableProps = {
  entries: PrepositionEntry[];
};

export function PrepositionsTable({ entries }: PrepositionsTableProps) {
  const t = useTranslations("Vocabulary");

  if (entries.length === 0) {
    return <p className="page-subtitle mt-0">{t("prepositionsEmptyFilter")}</p>;
  }

  return (
    <div className="overflow-x-auto rounded-2xl border border-border bg-card shadow-sm scrollbar-gutter-stable">
      <table className="w-full min-w-140 table-fixed border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-border bg-muted/50">
            <th scope="col" className="w-[18%] px-4 py-3 font-semibold">
              {t("prepositionsColPreposition")}
            </th>
            <th scope="col" className="w-[32%] px-4 py-3 font-semibold">
              {t("prepositionsColUsage")}
            </th>
            <th scope="col" className="px-4 py-3 font-semibold">
              {t("prepositionsColExample")}
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
                  <VerbFormSpeakButton form={entry.preposition} />
                  <span>{entry.preposition}</span>
                </div>
              </td>
              <td className="px-4 py-3 align-top text-muted-foreground">
                {entry.usageTr}
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
