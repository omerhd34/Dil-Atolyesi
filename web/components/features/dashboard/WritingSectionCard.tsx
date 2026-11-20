"use client";

import { useTranslations } from "next-intl";
import { MessageSquare, PencilLine } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { CardFooter } from "@/components/ui/Card";
import type { WritingSection } from "@/data/writings/types";
import { useWritingSectionPercent } from "@/hooks/useWritingProgress";
import { getDistinctSecondaryTitle } from "@/lib/bilingualTitle";
import { WRITING_SECTION_ANCHORS } from "@/lib/writingSectionTab";
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

type WritingSectionCardProps = {
  section: WritingSection;
  index: number;
  locked?: boolean;
};

export function WritingSectionCard({
  section,
  index,
  locked = false,
}: WritingSectionCardProps) {
  const t = useTranslations("Dashboard");
  const tWriting = useTranslations("Writing");
  const titleEn = getDistinctSecondaryTitle(section.title, section.titleEn);
  const percent = useWritingSectionPercent(section);

  return (
    <DashboardProgressCard
      progress={percent}
      locked={locked}
      progressAriaLabel={tWriting("sectionProgressAria", { progress: percent })}
    >
      <DashboardItemCardHeader
        indexBadge={
          <Badge variant="secondary">
            {tWriting("sectionLabel", { index })}
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
              hint={tWriting("openModelHint")}
              wrapperClassName="w-full"
            >
              <Button type="button" variant="outline" size="sm" disabled>
                <MessageSquare className="text-current" aria-hidden />
                {tWriting("openModel")}
              </Button>
            </EnglishUiHint>
            <EnglishUiHint
              hint={tWriting("openPracticeHint")}
              wrapperClassName="w-full"
            >
              <Button type="button" variant="outline" size="sm" disabled>
                <PencilLine className="text-current" aria-hidden />
                {tWriting("openPractice")}
              </Button>
            </EnglishUiHint>
          </>
        ) : (
          <>
            <EnglishUiHint
              hint={tWriting("openModelHint")}
              wrapperClassName="w-full"
            >
              <ButtonLink
                href={`/panel/writing/${section.id}`}
                variant="outline"
                size="sm"
              >
                <MessageSquare className="text-current" aria-hidden />
                {tWriting("openModel")}
              </ButtonLink>
            </EnglishUiHint>
            <EnglishUiHint
              hint={tWriting("openPracticeHint")}
              wrapperClassName="w-full"
            >
              <ButtonLink
                href={`/panel/writing/${section.id}#${WRITING_SECTION_ANCHORS.practice}`}
                variant="outline"
                size="sm"
              >
                <PencilLine className="text-current" aria-hidden />
                {tWriting("openPractice")}
              </ButtonLink>
            </EnglishUiHint>
          </>
        )}
      </CardFooter>
    </DashboardProgressCard>
  );
}
