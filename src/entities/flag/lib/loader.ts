import type { ImageLoaderProps } from "next/image";
import { FLAG_WIDTHS, flagCdnUrl, type FlagWidth } from "@shared/config";

/** Snap a requested width up to the nearest FlagCDN bucket (avoids upscaling blur). */
function nearestBucket(width: number): FlagWidth {
  return FLAG_WIDTHS.find((w) => w >= width) ?? FLAG_WIDTHS[FLAG_WIDTHS.length - 1];
}

/**
 * next/image loader that maps an alpha-2 code (passed as `src`) directly to a
 * FlagCDN bucket URL. Using FlagCDN's own pre-sized assets means Next does not
 * re-encode them — fewer bytes, no double optimization, crisp at every size.
 */
export function flagLoader({ src, width }: ImageLoaderProps): string {
  return flagCdnUrl(src, nearestBucket(width));
}
