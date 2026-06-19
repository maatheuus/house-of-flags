/**
 * Generic, domain-free primitives.
 *
 * `Localized<T>` keys content by locale tag. It is intentionally a loose
 * `Record<string, T>` so `shared` never depends on the i18n locale union —
 * the country entity narrows + resolves it with the real `Locale` type.
 */
export type Localized<T> = Record<string, T>;

/** A hex color string, e.g. "#c1121f". */
export type Hex = string;

/** ISO 3166-1 alpha-2 country code, uppercase (e.g. "BR"). */
export type Alpha2 = string;
