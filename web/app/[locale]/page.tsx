import { setRequestLocale } from "next-intl/server";
import { AuthHomeSwitch } from "@/components/features/dashboard/AuthHomeSwitch";
import { LandingBenefitsSection } from "@/components/features/landing/LandingBenefitsSection";
import { LandingEducationSystem } from "@/components/features/landing/LandingEducationSystem";
import { LandingFaqSection } from "@/components/features/landing/LandingFaqSection";
import { LandingHero } from "@/components/features/landing/LandingHero";
import { LandingPackagesSection } from "@/components/features/landing/LandingPackagesSection";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <AuthHomeSwitch>
      <LandingHero />
      <LandingEducationSystem />
      <LandingBenefitsSection />
      <LandingPackagesSection />
      <LandingFaqSection />
    </AuthHomeSwitch>
  );
}
