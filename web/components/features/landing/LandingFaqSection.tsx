import { useTranslations } from "next-intl";
import { FAQ_KEYS } from "@/components/features/faq/faqKeys";
import { FAQ_ICONS } from "@/components/features/faq/faqIcons";
import { FaqItem } from "@/components/features/faq/FaqItem";
import { LandingReveal } from "@/components/features/landing/LandingReveal";
import { LandingSectionFrame } from "@/components/features/landing/LandingSectionFrame";
import { LandingSectionIntro } from "@/components/features/landing/LandingSectionIntro";

export function LandingFaqSection() {
  const tPage = useTranslations("Pages.sss");
  const tFaq = useTranslations("Faq");
  const headingId = "sss-heading";

  return (
    <LandingSectionFrame id="sss" headingId={headingId} tone="muted">
      <LandingSectionIntro
        headingId={headingId}
        title={tPage("title")}
        description={tPage("description")}
      />

      <ul className="mt-12 grid list-none gap-4 sm:gap-5 lg:grid-cols-2 lg:items-start">
        {FAQ_KEYS.map((key, index) => {
          const Icon = FAQ_ICONS[key];
          return (
            <li key={key}>
              <LandingReveal delayMs={60 + index * 70}>
                <FaqItem
                  icon={Icon}
                  question={tFaq(`items.${key}.question`)}
                  answer={tFaq(`items.${key}.answer`)}
                />
              </LandingReveal>
            </li>
          );
        })}
      </ul>
    </LandingSectionFrame>
  );
}
