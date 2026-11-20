import { useTranslations } from "next-intl";
import { FAQ_KEYS } from "@/components/features/faq/faqKeys";
import { FaqItem } from "@/components/features/faq/FaqItem";

export function FaqList() {
  const t = useTranslations("Faq");

  return (
    <div className="mt-10">
      {FAQ_KEYS.map((key) => (
        <FaqItem
          key={key}
          question={t(`items.${key}.question`)}
          answer={t(`items.${key}.answer`)}
        />
      ))}
    </div>
  );
}
