/**
 * Global next/image loader (wired via `images.loaderFile` in next.config).
 *
 * Using a loader *file* instead of a per-`<Image loader>` prop is deliberate:
 * a function prop cannot cross a Server→Client boundary, and flag plates are
 * routinely rendered inside client components (motion reveals, dossiers). A
 * global loader keeps `<Flag>` server-renderable with no function in its props.
 *
 * The `src` we pass to `<Image>` is the lowercased alpha-2 code; this maps it to
 * the nearest FlagCDN width bucket so the CDN's own pre-sized PNG is used
 * directly (no Next re-encode, crisp at every size).
 */
const FLAG_WIDTHS = [320, 640, 1280, 2560] as const;

interface LoaderArgs {
  src: string;
  width: number;
  quality?: number;
}

export default function flagImageLoader({ src, width }: LoaderArgs): string {
  const bucket = FLAG_WIDTHS.find((w) => w >= width) ?? FLAG_WIDTHS[FLAG_WIDTHS.length - 1];
  return `https://flagcdn.com/w${bucket}/${src}.png`;
}
