/** Static brand + structural config. Domain-free, safe for `shared`. */

export const site = {
  wordmark: "VEXILLA",
  wordmarkSub: "arquivo visual",
  /** Editorial section anchors used across the home composition. */
  sections: {
    atlas: "atlas",
    chronicle: "chronicle",
    chromatic: "chromatic",
    symbols: "symbols",
    compare: "compare",
    discover: "discover",
    manifesto: "manifesto",
  },
} as const;

/** Primary navigation. `href` is locale-agnostic; the i18n <Link> adds the prefix. */
export const navItems = [
  { href: "/archive", labelKey: "atlas" },
  { href: "/chronicle", labelKey: "chronicle" },
  { href: "/symbols", labelKey: "symbols" },
  { href: "/compare", labelKey: "compare" },
] as const;

export type NavItem = (typeof navItems)[number];
