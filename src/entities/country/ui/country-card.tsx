import { Link } from "@i18n/navigation";
import { cn, pad2 } from "@shared/lib";
import { Flag } from "@entities/flag";
import { colorFilterHex } from "@entities/palette";
import type { Country } from "../types";

interface CountryCardProps {
  country: Country;
  /** 1-based position in the archive — rendered as an editorial ordinal. */
  index?: number;
  /** Localized region label (passed in to keep the entity i18n-agnostic). */
  regionLabel?: string;
  /** Eager-load the first row of flags for a fast LCP. */
  priority?: boolean;
  className?: string;
}

/**
 * Archive card: a flag plate over an editorial caption. Server-renderable;
 * links to the country dossier through the locale-aware `Link`.
 */
export function CountryCard({
  country,
  index,
  regionLabel,
  priority = false,
  className,
}: CountryCardProps) {
  return (
    <Link
      href={`/country/${country.slug}`}
      className={cn(
        "group flex flex-col gap-4 outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]",
        className,
      )}
    >
      <div className="relative overflow-hidden rounded-md">
        <Flag
          alpha2={country.code}
          name={country.name}
          ratio={country.ratio}
          priority={priority}
          rounded={false}
          className="transition-transform duration-[600ms] ease-[var(--ease-editorial)] group-hover:scale-[1.04]"
        />
      </div>

      <div className="flex items-baseline justify-between gap-4 font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--fg-mute)]">
        {index != null && <span className="text-[var(--accent)]">{pad2(index)}</span>}
        {regionLabel && <span>{regionLabel}</span>}
      </div>

      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <h3 className="m-0 truncate font-serif text-[22px] font-light leading-tight tracking-[-0.02em] transition-colors group-hover:text-[var(--accent)]">
            {country.name}
          </h3>
          <p className="m-0 mt-1 truncate text-[13px] text-[var(--fg-soft)]">
            {country.capital} · {country.tag}
          </p>
        </div>
        <div className="mt-1.5 flex shrink-0 gap-1" aria-hidden>
          {country.dominantColors.slice(0, 4).map((color) => (
            <span
              key={color}
              className="h-2.5 w-2.5 rounded-full border border-black/10"
              style={{ background: colorFilterHex(color) }}
            />
          ))}
        </div>
      </div>
    </Link>
  );
}
