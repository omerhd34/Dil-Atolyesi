import { cookies } from "next/headers";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import {
  getMessages,
  getTranslations,
  setRequestLocale,
} from "next-intl/server";
import { Urbanist } from "next/font/google";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { SiteChrome } from "@/components/layout/SiteChrome";
import { AppProviders } from "@/components/providers/AppProviders";
import { routing } from "@/i18n/routing";
import {
  isSidebarOpenFromCookie,
  SIDEBAR_COOKIE_NAME,
} from "@/lib/sidebarPreference";
import { BRAND_ICON_SRC, BRAND_NAME } from "@/lib/brand";
import { getServerEnv } from "@/lib/server/env";
import { parseSessionHintFromCookies } from "@/lib/sessionHint";
import "../globals.css";

const urbanist = Urbanist({
  subsets: ["latin", "latin-ext"],
  variable: "--font-urbanist",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Meta" });
  const title = t("title");
  const description = t("description");
  const appUrl = getServerEnv().APP_URL;

  return {
    metadataBase: new URL(appUrl),
    title,
    description,
    applicationName: BRAND_NAME,
    openGraph: {
      type: "website",
      locale: locale === "tr" ? "tr_TR" : locale,
      siteName: BRAND_NAME,
      title,
      description,
      url: appUrl,
    },
    icons: {
      icon: BRAND_ICON_SRC,
      apple: BRAND_ICON_SRC,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={`${urbanist.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-transparent font-sans text-foreground">
        <NextIntlClientProvider messages={messages}>
          <Suspense fallback={null}>
            <RequestChrome>{children}</RequestChrome>
          </Suspense>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

async function RequestChrome({ children }: { children: React.ReactNode }) {
  const cookieStore = await cookies();
  const initialUser = parseSessionHintFromCookies(
    (name) => cookieStore.get(name)?.value,
  );
  const sidebarOpen = isSidebarOpenFromCookie(
    cookieStore.get(SIDEBAR_COOKIE_NAME)?.value,
  );

  return (
    <AppProviders>
      <SiteChrome initialUser={initialUser} sidebarOpen={sidebarOpen}>
        {children}
      </SiteChrome>
    </AppProviders>
  );
}
