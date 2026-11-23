import { useTranslations } from "next-intl";
import { FAQ_KEYS } from "@/components/features/faq/faqKeys";
import { FAQ_ICONS } from "@/components/features/faq/faqIcons";
import { FaqItem } from "@/components/features/faq/FaqItem";

export function FaqList() {
  const t = useTranslations("Faq");

  return (
    <ul className="mt-10 grid list-none gap-4 sm:gap-5 lg:grid-cols-2">
      {FAQ_KEYS.map((key) => {
        const Icon = FAQ_ICONS[key];
        return (
          <li key={key}>
            <FaqItem
              icon={Icon}
              question={t(`items.${key}.question`)}
              answer={t(`items.${key}.answer`)}
            />
          </li>
        );
      })}
    </ul>
  );
}
