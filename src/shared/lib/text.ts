/** Generic string helpers. */

const COMBINING_MARKS = /[̀-ͯ]/g;

/** Normalize a string for accent-insensitive search ("São" → "sao"). */
export function normalize(value: string): string {
  return value.toLowerCase().normalize("NFD").replace(COMBINING_MARKS, "").trim();
}

/** Editorial zero-padded counter ("01", "02", …). */
export function pad2(n: number): string {
  return String(n).padStart(2, "0");
}
