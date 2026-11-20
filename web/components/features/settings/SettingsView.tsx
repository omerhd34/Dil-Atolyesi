"use client";

import { useTranslations } from "next-intl";
import { Gauge, Palette } from "lucide-react";
import { ChangePasswordSection } from "@/components/features/settings/ChangePasswordSection";
import { NotificationSettingsSection } from "@/components/features/settings/NotificationSettingsSection";
import { ProfileSetting } from "@/components/features/settings/ProfileSetting";
import { ProgressResetSection } from "@/components/features/settings/ProgressResetSection";
import { SettingsSection } from "@/components/features/settings/SettingsSection";
import { LocaleSetting } from "@/components/features/settings/LocaleSetting";
import { ThemeSetting } from "@/components/features/settings/ThemeSetting";
import { SpeechRateControl } from "@/components/features/vocabulary/SpeechRateControl";
import { SpeechVoiceControl } from "@/components/features/vocabulary/SpeechVoiceControl";

export function SettingsView() {
  const t = useTranslations("Settings");

  return (
    <div className="page-shell">
      <header className="space-y-1.5 border-b border-(--glass-line) pb-5">
        <h1 className="page-title">{t("title")}</h1>
        <p className="page-subtitle mt-0 max-w-2xl">{t("description")}</p>
      </header>

      <div className="grid gap-5 lg:grid-cols-2 lg:items-start lg:gap-6">
        <ProfileSetting />

        <SettingsSection
          titleId="settings-appearance"
          title={t("appearance")}
          description={t("appearanceHint")}
          icon={<Palette className="size-5" aria-hidden />}
        >
          <div className="space-y-5">
            <ThemeSetting />
            <LocaleSetting />
          </div>
        </SettingsSection>
      </div>

      <div className="grid gap-5 lg:grid-cols-2 lg:items-start lg:gap-6">
        <NotificationSettingsSection />

        <SettingsSection
          titleId="settings-speech"
          title={t("speechSettingsTitle")}
          description={t("speechSettingsHint")}
          icon={<Gauge className="size-5" aria-hidden />}
        >
          <div className="space-y-6">
            <SpeechVoiceControl />
            <SpeechRateControl />
          </div>
        </SettingsSection>
      </div>

      <div className="grid gap-5 lg:grid-cols-2 lg:items-start lg:gap-6">
        <ChangePasswordSection />
        <ProgressResetSection />
      </div>
    </div>
  );
}
