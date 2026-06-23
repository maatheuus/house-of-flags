import type { Locale } from "@i18n/routing";
import { defaultLocale } from "@i18n/routing";
import type { Hex } from "@shared/types";

/** Dominant-color buckets used to tag flags and drive the archive color filter. */
export type ColorId = "red" | "blue" | "gold" | "green" | "white" | "black";

export interface ColorFilter {
  id: ColorId;
  hex: Hex;
  label: Record<Locale, string>;
}

export const COLOR_FILTERS: ColorFilter[] = [
  { id: "red", hex: "#c1121f", label: { "pt-BR": "Vermelho", "en-US": "Red", "es-ES": "Rojo" } },
  { id: "blue", hex: "#003049", label: { "pt-BR": "Azul", "en-US": "Blue", "es-ES": "Azul" } },
  {
    id: "gold",
    hex: "#c9a14a",
    label: { "pt-BR": "Dourado", "en-US": "Gold", "es-ES": "Dorado" },
  },
  { id: "green", hex: "#486a4a", label: { "pt-BR": "Verde", "en-US": "Green", "es-ES": "Verde" } },
  {
    id: "white",
    hex: "#fdf0d5",
    label: { "pt-BR": "Branco", "en-US": "White", "es-ES": "Blanco" },
  },
  { id: "black", hex: "#1a1410", label: { "pt-BR": "Preto", "en-US": "Black", "es-ES": "Negro" } },
];

export function colorFilterHex(id: ColorId): Hex {
  return COLOR_FILTERS.find((c) => c.id === id)?.hex ?? "#000";
}

export function colorFilterLabel(id: ColorId, locale: Locale): string {
  const c = COLOR_FILTERS.find((f) => f.id === id);
  return c?.label[locale] ?? c?.label[defaultLocale] ?? id;
}
