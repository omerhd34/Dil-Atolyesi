"use client";

import { useTranslations } from "next-intl";
import { Headphones, PencilLine } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { CardFooter } from "@/components/ui/Card";
import type { ListeningSection } from "@/data/listenings/types";
import { useListeningSectionPercent } from "@/hooks/useListeningProgress";
import { getDistinctSecondaryTitle } from "@/lib/bilingualTitle";
import { LISTENING_SECTION_ANCHORS } from "@/lib/listeningSectionTab";
import { EnglishUiHint } from "@/components/ui/EnglishUiHint";
import {
  DashboardItemCardHeader,
  dashboardItemTitleSecondary,
} from "@/components/features/dashboard/DashboardItemCardHeader";
import {
  DashboardProgressCard,
  dashboardItemCardFooterClass,
} from "@/components/features/dashboard/DashboardProgressCard";

type ListeningSectionCardProps = {
  section: ListeningSection;
  index: number;
  locked?: boolean;
};

export function ListeningSectionCard({
  section,
  index,
  locked = false,
}: ListeningSectionCardProps) {
  const t = useTranslations("Dashboard");
  const tListening = useTranslations("Listening");
  const titleEn = getDistinctSecondaryTitle(section.title, section.titleEn);
  const percent = useListeningSectionPercent(section);

  return (
    <DashboardProgressCard
      progress={percent}
      locked={locked}
      progressAriaLabel={tListening("sectionProgressAria", {
        progress: percent,
      })}
    >
      <DashboardItemCardHeader
        indexBadge={
          <Badge variant="secondary">
            {tListening("sectionLabel", { index })}
          </Badge>
        }
        progressLabel={t("vocabularyProgress", { progress: percent })}
        locked={locked}
        title={section.title}
        titleSecondary={titleEn ? dashboardItemTitleSecondary(titleEn) : null}
      />

      <CardFooter className={dashboardItemCardFooterClass(2)}>
        {locked ? (
          <>
            <EnglishUiHint
              hint={tListening("openAudioHint")}
              wrapperClassName="w-full"
            >
              <Button type="button" variant="outline" size="sm" disabled>
                <Headphones className="text-current" aria-hidden />
                {tListening("openAudio")}
              </Button>
            </EnglishUiHint>
            <EnglishUiHint
              hint={tListening("openPracticeHint")}
              wrapperClassName="w-full"
            >
              <Button type="button" variant="outline" size="sm" disabled>
                <PencilLine className="text-current" aria-hidden />
                {tListening("openPractice")}
              </Button>
            </EnglishUiHint>
          </>
        ) : (
          <>
            <EnglishUiHint
              hint={tListening("openAudioHint")}
              wrapperClassName="w-full"
            >
              <ButtonLink
                href={`/panel/listening/${section.id}`}
                variant="outline"
                size="sm"
              >
                <Headphones className="text-current" aria-hidden />
                {tListening("openAudio")}
              </ButtonLink>
            </EnglishUiHint>
            <EnglishUiHint
              hint={tListening("openPracticeHint")}
              wrapperClassName="w-full"
            >
              <ButtonLink
                href={`/panel/listening/${section.id}#${LISTENING_SECTION_ANCHORS.practice}`}
                variant="outline"
                size="sm"
              >
                <PencilLine className="text-current" aria-hidden />
                {tListening("openPractice")}
              </ButtonLink>
            </EnglishUiHint>
          </>
        )}
      </CardFooter>
    </DashboardProgressCard>
  );
}
