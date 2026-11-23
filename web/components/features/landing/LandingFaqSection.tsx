import { useTranslations } from "next-intl";
import { FAQ_KEYS } from "@/components/features/faq/faqKeys";
import { FaqItem } from "@/components/features/faq/FaqItem";
import { LandingReveal } from "@/components/features/landing/LandingReveal";
import { LandingSectionFrame } from "@/components/features/landing/LandingSectionFrame";
import { LandingSectionIntro } from "@/components/features/landing/LandingSectionIntro";
import { Card, CardContent } from "@/components/ui/Card";
import { landingMotionCardClass } from "@/lib/landing/landingMotionCard";
import { cn } from "@/lib/utils";

export function LandingFaqSection() {
  const tPage = useTranslations("Pages.sss");
  const tFaq = useTranslations("Faq");
  const headingId = "sss-heading";

  return (
    <LandingSectionFrame id="sss" headingId={headingId}>
      <LandingSectionIntro
        headingId={headingId}
        title={tPage("title")}
        description={tPage("description")}
      />

      <div className="mt-12 max-w-3xl">
        <LandingReveal delayMs={40} className="block">
          <Card
            className={cn(
              "overflow-hidden rounded-3xl px-6 py-2 sm:px-8",
              landingMotionCardClass,
            )}
          >
            <CardContent className="p-0">
              {FAQ_KEYS.map((key, index) => (
                <LandingReveal key={key} delayMs={120 + index * 70}>
                  <FaqItem
                    question={tFaq(`items.${key}.question`)}
                    answer={tFaq(`items.${key}.answer`)}
                  />
                </LandingReveal>
              ))}
            </CardContent>
          </Card>
        </LandingReveal>
      </div>
    </LandingSectionFrame>
  );
}
