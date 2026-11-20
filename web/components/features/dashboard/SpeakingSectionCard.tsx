"use client";

import { useTranslations } from "next-intl";
import { MessageSquare, PencilLine } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { CardFooter } from "@/components/ui/Card";
import type { SpeakingSection } from "@/data/speakings/types";
import { useSpeakingSectionPercent } from "@/hooks/useSpeakingProgress";
import { getDistinctSecondaryTitle } from "@/lib/bilingualTitle";
import { EnglishUiHint } from "@/components/ui/EnglishUiHint";
import {
  DashboardItemCardHeader,
  dashboardItemSummary,
  dashboardItemTitleSecondary,
} from "@/components/features/dashboard/DashboardItemCardHeader";
import {
  DashboardProgressCard,
  dashboardItemCardFooterClass,
} from "@/components/features/dashboard/DashboardProgressCard";

type SpeakingSectionCardProps = {
  section: SpeakingSection;
  index: number;
  locked?: boolean;
};

export function SpeakingSectionCard({
  section,
  index,
  locked = false,
}: SpeakingSectionCardProps) {
  const t = useTranslations("Dashboard");
  const tSpeaking = useTranslations("Speaking");
  const titleEn = getDistinctSecondaryTitle(section.title, section.titleEn);
  const percent = useSpeakingSectionPercent(section);

  return (
    <DashboardProgressCard
      progress={percent}
      locked={locked}
      progressAriaLabel={tSpeaking("sectionProgressAria", {
        progress: percent,
      })}
    >
      <DashboardItemCardHeader
        indexBadge={
          <Badge variant="secondary">
            {tSpeaking("sectionLabel", { index })}
          </Badge>
        }
        progressLabel={t("vocabularyProgress", { progress: percent })}
        locked={locked}
        title={section.title}
        titleSecondary={titleEn ? dashboardItemTitleSecondary(titleEn) : null}
        description={
          section.summaryTr ? dashboardItemSummary(section.summaryTr) : null
        }
      />

      <CardFooter className={dashboardItemCardFooterClass(2)}>
        {locked ? (
          <>
            <EnglishUiHint
              hint={tSpeaking("openModelHint")}
              wrapperClassName="w-full"
            >
              <Button type="button" variant="outline" size="sm" disabled>
                <MessageSquare className="text-current" aria-hidden />
                {tSpeaking("openModel")}
              </Button>
            </EnglishUiHint>
            <EnglishUiHint
              hint={tSpeaking("openPracticeHint")}
              wrapperClassName="w-full"
            >
              <Button type="button" variant="outline" size="sm" disabled>
                <PencilLine className="text-current" aria-hidden />
                {tSpeaking("openPractice")}
              </Button>
            </EnglishUiHint>
          </>
        ) : (
          <>
            <EnglishUiHint
              hint={tSpeaking("openModelHint")}
              wrapperClassName="w-full"
            >
              <ButtonLink
                href={`/atolye/speaking/${section.id}`}
                variant="outline"
                size="sm"
              >
                <MessageSquare className="text-current" aria-hidden />
                {tSpeaking("openModel")}
              </ButtonLink>
            </EnglishUiHint>
            <EnglishUiHint
              hint={tSpeaking("openPracticeHint")}
              wrapperClassName="w-full"
            >
              <ButtonLink
                href={`/atolye/speaking/${section.id}?tab=practice`}
                variant="outline"
                size="sm"
              >
                <PencilLine className="text-current" aria-hidden />
                {tSpeaking("openPractice")}
              </ButtonLink>
            </EnglishUiHint>
          </>
        )}
      </CardFooter>
    </DashboardProgressCard>
  );
}
