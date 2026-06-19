"use client";

import { useMemo } from "react";
import { useLocale, useTranslations } from "next-intl";
import { AnimatePresence, motion } from "motion/react";
import type { Locale } from "@i18n/routing";
import { useRouter } from "@i18n/navigation";
import { buildCommandItems, useCommandPalette, type CommandItem } from "@features/search-flags";
import { easings } from "@shared/motion";
import { cn } from "@shared/lib";

/**
 * The ⌘K command palette. Builds country + page targets for the locale and
 * drives navigation. Mounted once at the app shell; opens on ⌘K from anywhere.
 */
export function CommandPalette() {
  const locale = useLocale() as Locale;
  const nav = useTranslations("Nav");
  const common = useTranslations("Common");
  const router = useRouter();

  const items = useMemo(
    () =>
      buildCommandItems(locale, {
        atlas: nav("atlas"),
        chronicle: nav("chronicle"),
        symbols: nav("symbols"),
        compare: nav("compare"),
        page: common("page"),
      }),
    [locale, nav, common],
  );

  const palette = useCommandPalette({
    items,
    onSelect: (item: CommandItem) => router.push(item.href),
  });

  return (
    <AnimatePresence>
      {palette.open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-start justify-center bg-black/50 px-4 pt-[12vh] backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={palette.close}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            className="w-full max-w-[620px] overflow-hidden rounded-xl border border-[var(--line)] bg-[var(--bg-elev)] shadow-2xl"
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.25, ease: easings.outExpo }}
            onClick={(e) => e.stopPropagation()}
          >
            <input
              autoFocus
              value={palette.query}
              onChange={(e) => palette.setQuery(e.target.value)}
              onKeyDown={palette.onInputKeyDown}
              placeholder={nav("searchPlaceholder")}
              className="w-full border-b border-[var(--line)] bg-transparent px-5 py-4 font-serif text-[20px] text-[var(--fg)] outline-none placeholder:text-[var(--fg-mute)]"
            />
            <ul className="max-h-[50vh] overflow-y-auto p-2">
              {palette.results.map((item, i) => (
                <li key={item.id}>
                  <button
                    type="button"
                    onMouseEnter={() => palette.setActive(i)}
                    onClick={() => {
                      router.push(item.href);
                      palette.close();
                    }}
                    className={cn(
                      "flex w-full items-baseline justify-between gap-4 rounded-lg px-4 py-3 text-left transition-colors",
                      i === palette.active ? "bg-[var(--bg-deep)]" : "hover:bg-[var(--bg-deep)]",
                    )}
                  >
                    <span className="font-serif text-[16px] text-[var(--fg)]">{item.label}</span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--fg-mute)]">
                      {item.kind === "page" ? common("page") : item.sublabel}
                    </span>
                  </button>
                </li>
              ))}
              {palette.results.length === 0 && (
                <li className="px-4 py-6 text-center text-[var(--fg-mute)]">·</li>
              )}
            </ul>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
