import { setRequestLocale } from "next-intl/server";
import { AuthHomeSwitch } from "@/components/features/dashboard/AuthHomeSwitch";
import { LandingContactSection } from "@/components/features/landing/LandingContactSection";

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <AuthHomeSwitch>
      <LandingContactSection standalone />
    </AuthHomeSwitch>
  );
}
