import type { Alpha2, Hex, Localized } from "@shared/types";
import type { FlagRef } from "@entities/flag";
import type { RegionId } from "@entities/region";
import type { ColorId } from "@entities/palette";
import type { SymbolId } from "@entities/symbol";
import type { HistoricalPeriod } from "@entities/historical-period";

/** A color on the flag with its editorial story. */
export interface ColorStory {
  hex: Hex;
  name: string;
  keyword: string;
  story: string;
}

/** An inspectable point on the flag surface (percent coords). */
export interface Hotspot {
  x: number;
  y: number;
  title: string;
  text: string;
}

/** A timeline entry: a temporal period paired with the flag variant of that era. */
export interface EvolutionEntry extends HistoricalPeriod {
  flag: FlagRef;
}

export interface Subdivision {
  code: string;
  name: string;
  meta: string;
  colors?: Hex[];
}

/** Locale-varying editorial content. */
export interface CountryContent {
  name: string;
  nameLocal?: string;
  capital: string;
  designer?: string;
  tag: string;
  excerpt: string;
  history: string;
  context: string;
  colors: ColorStory[];
  hotspots: Hotspot[];
  timeline: EvolutionEntry[];
  trivia: string[];
  subdivisions: Subdivision[];
}

/** Locale-invariant structural data. */
export interface CountryBase {
  code: Alpha2;
  slug: string;
  region: RegionId;
  ratio: string;
  adopted: number;
  dominantColors: ColorId[];
  symbols: SymbolId[];
  /** Slugs of visually/historically related countries. */
  related: string[];
  /** Current flag reference (resolves to FlagCDN). */
  flag: FlagRef;
}

/** Authored shape stored in the dataset. */
export type CountryRecord = CountryBase & { content: Localized<CountryContent> };

/** Resolved, locale-flattened country handed to the UI. */
export interface Country extends CountryBase, CountryContent {}
