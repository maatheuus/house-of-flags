/**
 * Country flag ratios are authored in the vexillological convention
 * `height / width` (e.g. Brazil "7 / 10"). CSS `aspect-ratio` expects
 * `width / height`, so this flips the two terms for rendering.
 */
export function cssAspect(ratio: string): string {
  const [h, w] = ratio.split("/").map((s) => s.trim());
  if (!h || !w) return ratio;
  return `${w} / ${h}`;
}
