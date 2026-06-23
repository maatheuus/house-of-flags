"use client";

import { Chip, CustomSelect } from "@shared/ui";
import { cn } from "@shared/lib";
import { REGIONS, regionLabel } from "@entities/region";
import { COLOR_FILTERS, colorFilterLabel } from "@entities/palette";
import type { Locale } from "@i18n/routing";
import type { ArchiveSort, ArchiveLayout, ArchiveFilters } from "../model/use-archive-filter";

export interface FilterBarLabels {
  filterRegion: string;
  filterColor: string;
  sortLabel: string;
  sortCurated: string;
  sortAz: string;
  sortYearAsc: string;
  sortYearDesc: string;
  layoutGrid: string;
  layoutList: string;
  all: string;
  reset: string;
}

interface FilterBarProps {
  locale: Locale;
  filters: ArchiveFilters;
  layout: ArchiveLayout;
  isFiltering: boolean;
  labels: FilterBarLabels;
  onRegion: (r: ArchiveFilters["region"]) => void;
  onColor: (c: ArchiveFilters["color"]) => void;
  onSort: (s: ArchiveSort) => void;
  onLayout: (l: ArchiveLayout) => void;
  onReset: () => void;
}

/** The atlas control surface: region + color chips, sort select and layout toggle. */
export function FilterBar({
  locale,
  filters,
  layout,
  isFiltering,
  labels,
  onRegion,
  onColor,
  onSort,
  onLayout,
  onReset,
}: FilterBarProps) {
  return (
    <div className="flex flex-col gap-8 border-y border-[var(--line)] py-8">
      <div className="flex flex-col gap-3">
        <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--fg-mute)]">
          {labels.filterRegion}
        </span>
        <div className="flex flex-wrap gap-2">
          <Chip active={filters.region === null} onClick={() => onRegion(null)}>
            {labels.all}
          </Chip>
          {REGIONS.map((r) => (
            <Chip
              key={r.id}
              active={filters.region === r.id}
              onClick={() => onRegion(filters.region === r.id ? null : r.id)}
            >
              {regionLabel(r.id, locale)}
            </Chip>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--fg-mute)]">
          {labels.filterColor}
        </span>
        <div className="flex flex-wrap gap-2">
          <Chip active={filters.color === null} onClick={() => onColor(null)}>
            {labels.all}
          </Chip>
          {COLOR_FILTERS.map((c) => (
            <Chip
              key={c.id}
              active={filters.color === c.id}
              swatch={c.hex}
              onClick={() => onColor(filters.color === c.id ? null : c.id)}
            >
              {colorFilterLabel(c.id, locale)}
            </Chip>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap items-end justify-between gap-6">
        <label className="flex flex-col gap-2">
          <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--fg-mute)]">
            {labels.sortLabel}
          </span>
          <CustomSelect
            value={filters.sort}
            onChange={(v) => onSort(v as ArchiveSort)}
            ariaLabel={labels.sortLabel}
            options={[
              { value: "curated", label: labels.sortCurated },
              { value: "az", label: labels.sortAz },
              { value: "yearAsc", label: labels.sortYearAsc },
              { value: "yearDesc", label: labels.sortYearDesc },
            ]}
          />
        </label>

        <div className="flex items-center gap-4">
          {isFiltering && (
            <button
              type="button"
              onClick={onReset}
              className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--accent)] hover:underline"
            >
              {labels.reset}
            </button>
          )}
          <div className="flex gap-2">
            {(["grid", "list"] as const).map((l) => (
              <button
                key={l}
                type="button"
                onClick={() => onLayout(l)}
                aria-pressed={layout === l}
                className={cn(
                  "rounded-full border px-3.5 py-2 font-mono text-[11px] uppercase tracking-[0.1em] transition-colors",
                  layout === l
                    ? "border-[var(--fg)] bg-[var(--fg)] text-[var(--bg)]"
                    : "border-[var(--line)] text-[var(--fg-soft)] hover:text-[var(--fg)]",
                )}
              >
                {l === "grid" ? labels.layoutGrid : labels.layoutList}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
