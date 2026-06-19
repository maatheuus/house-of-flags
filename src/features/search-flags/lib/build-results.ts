import type { Locale } from "@i18n/routing";
import { getAllCountries } from "@entities/country";
import { normalize } from "@shared/lib";

export type CommandKind = "country" | "page";

export interface CommandItem {
  id: string;
  label: string;
  sublabel: string;
  href: string;
  kind: CommandKind;
}

/** Static navigation targets surfaced in the palette alongside countries. */
function pageItems(labels: Record<string, string>): CommandItem[] {
  return [
    { id: "page:atlas", label: labels.atlas, sublabel: labels.page, href: "/archive", kind: "page" },
    {
      id: "page:chronicle",
      label: labels.chronicle,
      sublabel: labels.page,
      href: "/chronicle",
      kind: "page",
    },
    {
      id: "page:symbols",
      label: labels.symbols,
      sublabel: labels.page,
      href: "/symbols",
      kind: "page",
    },
    {
      id: "page:compare",
      label: labels.compare,
      sublabel: labels.page,
      href: "/compare",
      kind: "page",
    },
  ];
}

/** Build the full, unfiltered item list for the command palette. */
export function buildCommandItems(locale: Locale, pageLabels: Record<string, string>): CommandItem[] {
  const countries = getAllCountries(locale).map<CommandItem>((c) => ({
    id: `country:${c.slug}`,
    label: c.name,
    sublabel: `${c.capital} · ${c.tag}`,
    href: `/country/${c.slug}`,
    kind: "country",
  }));
  return [...pageItems(pageLabels), ...countries];
}

/** Diacritic-insensitive filter over the prebuilt items. */
export function filterCommandItems(items: CommandItem[], query: string): CommandItem[] {
  const q = normalize(query).trim();
  if (!q) return items;
  return items.filter((it) => normalize(`${it.label} ${it.sublabel}`).includes(q));
}
