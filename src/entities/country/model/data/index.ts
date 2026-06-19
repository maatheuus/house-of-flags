import type { CountryRecord } from "../../types";
import { AMERICAS } from "./americas";
import { EUROPE } from "./europe";
import { ASIA } from "./asia";
import { AFRICA } from "./africa";

/**
 * The full curated dataset — ~16 deep nations across four regions.
 * Order here is the canonical archive order before any locale-aware sort.
 */
export const COUNTRIES: CountryRecord[] = [...AMERICAS, ...EUROPE, ...ASIA, ...AFRICA];

export { AMERICAS, EUROPE, ASIA, AFRICA };
