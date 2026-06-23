/**
 * FlagCDN is the primary source for *current* national flags.
 * It serves PNGs at fixed widths: https://flagcdn.com/w{width}/{code}.png
 * We expose a typed URL + srcset builder so callers never hand-write URLs and
 * next/image always receives correctly sized candidates (no blur, no overfetch).
 */

const BASE = "https://flagcdn.com";

/** Width buckets FlagCDN actually ships (keep in sync with next.config deviceSizes). */
export const FLAG_WIDTHS = [320, 640, 1280, 2560] as const;
export type FlagWidth = (typeof FLAG_WIDTHS)[number];

/** ISO 3166-1 alpha-2, lowercased, as FlagCDN expects. */
export function flagCdnCode(alpha2: string): string {
  return alpha2.toLowerCase();
}

export function flagCdnUrl(alpha2: string, width: FlagWidth = 1280): string {
  return `${BASE}/w${width}/${flagCdnCode(alpha2)}.png`;
}

export function flagCdnSrcSet(alpha2: string): string {
  return FLAG_WIDTHS.map((w) => `${flagCdnUrl(alpha2, w)} ${w}w`).join(", ");
}
