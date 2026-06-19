"use client";

import { useMemo, useState } from "react";
import type { Locale } from "@i18n/routing";
import type { Country } from "@entities/country";
import { getCountry } from "@entities/country";

/**
 * Comparator controller: holds the two selected slugs and resolves them to
 * countries for the current locale. Defaults can be seeded from the page.
 */
export function useCompare(locale: Locale, initialA: string, initialB: string) {
  const [slugA, setSlugA] = useState(initialA);
  const [slugB, setSlugB] = useState(initialB);

  const a = useMemo(() => getCountry(slugA, locale), [slugA, locale]);
  const b = useMemo(() => getCountry(slugB, locale), [slugB, locale]);

  /** Colors shared between the two flags (by dominant-color bucket). */
  const sharedColors = useMemo(() => {
    if (!a || !b) return [];
    return a.dominantColors.filter((c) => b.dominantColors.includes(c));
  }, [a, b]);

  /** Symbols shared between the two flags. */
  const sharedSymbols = useMemo(() => {
    if (!a || !b) return [];
    return a.symbols.filter((s) => b.symbols.includes(s));
  }, [a, b]);

  return { slugA, slugB, setSlugA, setSlugB, a, b, sharedColors, sharedSymbols } as {
    slugA: string;
    slugB: string;
    setSlugA: (s: string) => void;
    setSlugB: (s: string) => void;
    a: Country | null;
    b: Country | null;
    sharedColors: Country["dominantColors"];
    sharedSymbols: Country["symbols"];
  };
}
