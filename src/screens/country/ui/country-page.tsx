import { notFound } from "next/navigation";
import type { Locale } from "@i18n/routing";
import { getCountry, getRelated } from "@entities/country";
import { CountryDossier } from "@widgets/country-dossier";

interface CountryPageProps {
  slug: string;
  locale: Locale;
}

/** Resolves a country dossier for the route, or 404s on an unknown slug. */
export function CountryPage({ slug, locale }: CountryPageProps) {
  const country = getCountry(slug, locale);
  if (!country) notFound();

  const related = getRelated(country, locale);

  return (
    <main>
      <CountryDossier country={country} related={related} />
    </main>
  );
}
