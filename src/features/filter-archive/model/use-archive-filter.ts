"use client";

import { useMemo, useState } from "react";
import type { Locale } from "@i18n/routing";
import type { Country } from "@entities/country";
import { getAllCountries, resolveCountry, COUNTRIES } from "@entities/country";
import type { RegionId } from "@entities/region";
import type { ColorId } from "@entities/palette";
import { normalize } from "@shared/lib";

export type ArchiveSort = "curated" | "az" | "yearAsc" | "yearDesc";
export type ArchiveLayout = "grid" | "list";

export interface ArchiveFilters {
  region: RegionId | null;
  color: ColorId | null;
  query: string;
  sort: ArchiveSort;
}

const EMPTY: ArchiveFilters = { region: null, color: null, query: "", sort: "curated" };

/** Pure filter+sort over the dataset — shared by the hook and any RSC preview. */
export function applyArchiveFilters(locale: Locale, filters: ArchiveFilters): Country[] {
  const base =
    filters.sort === "curated"
      ? COUNTRIES.map((r) => resolveCountry(r, locale))
      : getAllCountries(locale);

  const q = normalize(filters.query).trim();
  let list = base.filter((c) => {
    if (filters.region && c.region !== filters.region) return false;
    if (filters.color && !c.dominantColors.includes(filters.color)) return false;
    if (q) {
      const hay = normalize(`${c.name} ${c.nameLocal ?? ""} ${c.capital} ${c.tag}`);
      if (!hay.includes(q)) return false;
    }
    return true;
  });

  if (filters.sort === "yearAsc") list = [...list].sort((a, b) => a.adopted - b.adopted);
  if (filters.sort === "yearDesc") list = [...list].sort((a, b) => b.adopted - a.adopted);
  return list;
}

/** Stateful archive controller: filters + the derived, memoized result set. */
export function useArchiveFilter(locale: Locale) {
  const [filters, setFilters] = useState<ArchiveFilters>(EMPTY);
  const [layout, setLayout] = useState<ArchiveLayout>("grid");

  const results = useMemo(() => applyArchiveFilters(locale, filters), [locale, filters]);

  const isFiltering =
    filters.region !== null || filters.color !== null || filters.query.trim() !== "";

  return {
    filters,
    layout,
    results,
    isFiltering,
    setRegion: (region: RegionId | null) => setFilters((f) => ({ ...f, region })),
    setColor: (color: ColorId | null) => setFilters((f) => ({ ...f, color })),
    setQuery: (query: string) => setFilters((f) => ({ ...f, query })),
    setSort: (sort: ArchiveSort) => setFilters((f) => ({ ...f, sort })),
    setLayout,
    reset: () => setFilters(EMPTY),
  };
}
