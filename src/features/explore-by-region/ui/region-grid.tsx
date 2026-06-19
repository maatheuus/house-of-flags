import { Link } from "@i18n/navigation";
import type { Locale } from "@i18n/routing";
import { REGIONS, regionLabel } from "@entities/region";
import { byRegion } from "@entities/country";
import { cn, pad2 } from "@shared/lib";

interface RegionGridProps {
  locale: Locale;
  /** Localized "N nations" formatter. */
  countLabel: (n: number) => string;
  className?: string;
}

/**
 * Entry tiles into the archive, one per populated region. Counts come from the
 * country dataset; empty regions are omitted. Server-renderable.
 */
export function RegionGrid({ locale, countLabel, className }: RegionGridProps) {
  const tiles = REGIONS.map((r) => ({ id: r.id, count: byRegion(r.id, locale).length })).filter(
    (t) => t.count > 0,
  );

  return (
    <div className={cn("grid grid-cols-1 gap-px bg-[var(--line)] sm:grid-cols-2", className)}>
      {tiles.map((t, i) => (
        <Link
          key={t.id}
          href="/archive"
          className="group flex items-baseline justify-between gap-6 bg-[var(--bg)] px-6 py-8 transition-colors hover:bg-[var(--bg-elev)]"
        >
          <span className="flex items-baseline gap-4">
            <span className="font-mono text-[11px] text-[var(--accent)]">{pad2(i + 1)}</span>
            <span className="font-serif text-[26px] font-light tracking-[-0.02em] group-hover:text-[var(--accent)]">
              {regionLabel(t.id, locale)}
            </span>
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--fg-mute)]">
            {countLabel(t.count)}
          </span>
        </Link>
      ))}
    </div>
  );
}
