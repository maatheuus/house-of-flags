import type { Alpha2 } from "@shared/types";

/**
 * A flag is rendered from one of two sources:
 *  - `cdn`: the *current* national flag, fetched as raster from FlagCDN.
 *  - `svg`: a *historical* variant, drawn from the local vector registry
 *    (FlagCDN only carries present-day flags).
 */
export type FlagSource =
  | { kind: "cdn"; alpha2: Alpha2 }
  | { kind: "svg"; key: string };

/** A reference stored in country data; resolved to a `FlagSource` at render. */
export type FlagRef =
  | Alpha2 // current flag → CDN
  | { svg: string }; // historical variant → registry key
