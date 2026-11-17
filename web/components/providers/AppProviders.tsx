"use client";

import { AuthSessionBootstrap } from "@/components/providers/AuthSessionBootstrap";
import { SpeechNavigationStop } from "@/components/providers/SpeechNavigationStop";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Toaster } from "@/components/ui/toast";

type AppProvidersProps = {
  children: React.ReactNode;
};

export function AppProviders({ children }: AppProvidersProps) {
  return (
    <AuthSessionBootstrap>
      <ThemeProvider>
        <SpeechNavigationStop />
        {children}
        <Toaster />
      </ThemeProvider>
    </AuthSessionBootstrap>
  );
}
