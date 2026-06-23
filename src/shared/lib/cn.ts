/**
 * Tiny class-name joiner. Filters falsy values and joins with spaces.
 * Kept dependency-free on purpose — `shared` stays lean.
 */
export type ClassValue = string | number | false | null | undefined;

export function cn(...values: ClassValue[]): string {
  return values.filter(Boolean).join(" ");
}
