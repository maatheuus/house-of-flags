import { defineRouting } from "next-intl/routing";

/**
 * Single source of truth for supported locales.
 * Adding a locale later = add the tag here + a matching `messages/<tag>.json`
 * + (optionally) localized country content. Nothing else has to change.
 */
export const locales = ["pt-BR", "en-US", "es-ES"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "pt-BR";

/** Human labels for the locale switcher (kept here so the list stays in lockstep). */
export const localeLabels: Record<Locale, string> = {
  "pt-BR": "Português",
  "en-US": "English",
  "es-ES": "Español",
};

export const routing = defineRouting({
  locales,
  defaultLocale,
  // Always show the locale prefix so URLs are unambiguous and shareable.
  localePrefix: "always",
});
