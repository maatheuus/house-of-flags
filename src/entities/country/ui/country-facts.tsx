import { cn } from "@shared/lib";
import type { Country } from "../types";

/** Localized field labels — supplied by the widget so the entity stays i18n-agnostic. */
export interface FactsLabels {
  capital: string;
  region: string;
  ratio: string;
  adopted: string;
  designer: string;
  tag: string;
}

interface CountryFactsProps {
  country: Country;
  labels: FactsLabels;
  /** Localized region name for the `region` row. */
  regionLabel: string;
  className?: string;
}

/**
 * The dossier fact sheet: a definition list of locale-invariant structural
 * data plus a few resolved editorial fields. Server-renderable.
 */
export function CountryFacts({ country, labels, regionLabel, className }: CountryFactsProps) {
  const rows: { label: string; value: string }[] = [
    { label: labels.capital, value: country.capital },
    { label: labels.region, value: regionLabel },
    { label: labels.tag, value: country.tag },
    { label: labels.ratio, value: country.ratio.replace(/\s*\/\s*/, ":") },
    { label: labels.adopted, value: String(country.adopted) },
  ];
  if (country.designer) {
    rows.push({ label: labels.designer, value: country.designer });
  }

  return (
    <dl className={cn("grid grid-cols-1 gap-px overflow-hidden rounded-md bg-[var(--line)]", className)}>
      {rows.map((row) => (
        <div
          key={row.label}
          className="flex items-baseline justify-between gap-6 bg-[var(--bg)] px-4 py-3"
        >
          <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--fg-mute)]">
            {row.label}
          </dt>
          <dd className="m-0 text-right text-[14px] text-[var(--fg)]">{row.value}</dd>
        </div>
      ))}
    </dl>
  );
}
