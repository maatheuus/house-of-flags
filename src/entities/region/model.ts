import type { Locale } from "@i18n/routing";
import { defaultLocale } from "@i18n/routing";

export type RegionId = "americas" | "europe" | "asia" | "africa" | "oceania";

export interface Region {
  id: RegionId;
  label: Record<Locale, string>;
}

/** The continental groupings used by the archive filter and country dossiers. */
export const REGIONS: Region[] = [
  { id: "americas", label: { "pt-BR": "Américas", "en-US": "Americas", "es-ES": "Américas" } },
  { id: "europe", label: { "pt-BR": "Europa", "en-US": "Europe", "es-ES": "Europa" } },
  { id: "asia", label: { "pt-BR": "Ásia", "en-US": "Asia", "es-ES": "Asia" } },
  { id: "africa", label: { "pt-BR": "África", "en-US": "Africa", "es-ES": "África" } },
  { id: "oceania", label: { "pt-BR": "Oceania", "en-US": "Oceania", "es-ES": "Oceanía" } },
];

export function regionLabel(id: RegionId, locale: Locale): string {
  const region = REGIONS.find((r) => r.id === id);
  return region?.label[locale] ?? region?.label[defaultLocale] ?? id;
}
