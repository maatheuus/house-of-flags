import type { Locale } from "@i18n/routing";
import { defaultLocale } from "@i18n/routing";
import type { Alpha2 } from "@shared/types";
import type { RegionId } from "@entities/region";
import type { ColorId } from "@entities/palette";
import { normalize } from "@shared/lib";
import type { Country, CountryRecord } from "../types";
import { COUNTRIES } from "./data";

/** Flatten a stored record into a locale-resolved `Country` for the UI. */
export function resolveCountry(record: CountryRecord, locale: Locale): Country {
  const { content, ...base } = record;
  const localized = content[locale] ?? content[defaultLocale];
  return { ...base, ...localized };
}

/** Every country, resolved for the locale, sorted alphabetically by name. */
export function getAllCountries(locale: Locale): Country[] {
  return COUNTRIES.map((r) => resolveCountry(r, locale)).sort((a, b) =>
    a.name.localeCompare(b.name, locale),
  );
}

/** A single country by slug, or `null` if unknown. */
export function getCountry(slug: string, locale: Locale): Country | null {
  const record = COUNTRIES.find((r) => r.slug === slug);
  return record ? resolveCountry(record, locale) : null;
}

/** A single country by ISO alpha-2 code, or `null` if unknown. */
export function getCountryByCode(code: Alpha2, locale: Locale): Country | null {
  const record = COUNTRIES.find((r) => r.code === code);
  return record ? resolveCountry(record, locale) : null;
}

/** The related countries referenced by a country's `related` slugs. */
export function getRelated(country: Country, locale: Locale): Country[] {
  return country.related
    .map((slug) => getCountry(slug, locale))
    .filter((c): c is Country => c !== null);
}

/** Every slug — for `generateStaticParams` and prefetch lists. */
export function getAllSlugs(): string[] {
  return COUNTRIES.map((r) => r.slug);
}

/** Countries in a given region, resolved and name-sorted. */
export function byRegion(region: RegionId, locale: Locale): Country[] {
  return getAllCountries(locale).filter((c) => c.region === region);
}

/** Countries whose dominant palette includes the given color. */
export function byColor(color: ColorId, locale: Locale): Country[] {
  return getAllCountries(locale).filter((c) => c.dominantColors.includes(color));
}

/**
 * Diacritic-insensitive search across name, capital and tag.
 * Empty query returns the full, name-sorted list.
 */
export function search(query: string, locale: Locale): Country[] {
  const q = normalize(query).trim();
  const all = getAllCountries(locale);
  if (!q) return all;
  return all.filter((c) => {
    const haystack = normalize(`${c.name} ${c.nameLocal ?? ""} ${c.capital} ${c.tag}`);
    return haystack.includes(q);
  });
}
