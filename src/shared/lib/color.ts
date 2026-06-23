/**
 * Generic color math only — no flag/domain semantics live here.
 * (The symbolic *meaning* of a color belongs to the palette entity.)
 */

export interface Rgb {
  r: number;
  g: number;
  b: number;
}

export function hexToRgb(hex: string): Rgb | null {
  const m = hex.replace("#", "").trim();
  const full = m.length === 3 ? m.split("").map((c) => c + c).join("") : m;
  if (full.length !== 6) return null;
  const int = Number.parseInt(full, 16);
  if (Number.isNaN(int)) return null;
  return { r: (int >> 16) & 255, g: (int >> 8) & 255, b: int & 255 };
}

export function rgbToHex(r: number, g: number, b: number): string {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase();
}

/** Perceived brightness (ITU-R BT.601). 0–255. */
export function brightness({ r, g, b }: Rgb): number {
  return (r * 299 + g * 587 + b * 114) / 1000;
}

/** True when text on this background should be dark. */
export function isLight(hex: string): boolean {
  const rgb = hexToRgb(hex);
  if (!rgb) return true;
  return brightness(rgb) > 150;
}
