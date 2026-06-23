import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@i18n/routing";
import { fontVariables } from "@app/fonts";
import { AppProviders, themeInitScript } from "@app/providers";
import { SiteNav } from "@app/ui/site-nav";
import { SiteFooter } from "@app/ui/site-footer";
import { Grain, CursorHalo } from "@shared/ui";
import { CommandPalette } from "@widgets/command-palette";
import "@app/styles/globals.css";

type LayoutParams = { params: Promise<{ locale: string }> };

/** Pre-render one shell per supported locale. */
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: LayoutParams): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Meta" });
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LayoutParams & { children: React.ReactNode }) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  // Enable static rendering for this locale subtree.
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} className={fontVariables} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="bg-[var(--bg)] font-sans text-[var(--fg)] antialiased">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <AppProviders>
            <Grain />
            <CursorHalo />
            <SiteNav />
            {children}
            <SiteFooter />
            <CommandPalette />
          </AppProviders>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
