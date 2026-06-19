import { setRequestLocale } from "next-intl/server";
import type { Locale } from "@i18n/routing";
import { routing } from "@i18n/routing";
import { getAllSlugs } from "@entities/country";
import { CountryPage } from "@pages/country";

/** Pre-render every locale × country combination. */
export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    getAllSlugs().map((slug) => ({ locale, slug })),
  );
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  return <CountryPage slug={slug} locale={locale as Locale} />;
}
