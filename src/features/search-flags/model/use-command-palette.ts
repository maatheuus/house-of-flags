"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { type CommandItem, filterCommandItems } from "../lib/build-results";

interface UseCommandPaletteOptions {
  items: CommandItem[];
  onSelect: (item: CommandItem) => void;
}

/**
 * Command-palette controller: ⌘K / Ctrl-K to open, query filtering, arrow
 * navigation and Enter to fire `onSelect`. UI lives in the command-palette widget.
 */
export function useCommandPalette({ items, onSelect }: UseCommandPaletteOptions) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);

  const results = useMemo(() => filterCommandItems(items, query), [items, query]);

  const close = useCallback(() => {
    setOpen(false);
    setQuery("");
    setActive(0);
  }, []);

  // Global hotkey to toggle the palette.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      } else if (e.key === "Escape") {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Keep the active index in range as results shrink.
  useEffect(() => setActive(0), [query]);

  const onInputKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setActive((i) => Math.min(i + 1, results.length - 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setActive((i) => Math.max(i - 1, 0));
      } else if (e.key === "Enter") {
        e.preventDefault();
        const item = results[active];
        if (item) {
          onSelect(item);
          close();
        }
      }
    },
    [results, active, onSelect, close],
  );

  return {
    open,
    setOpen,
    close,
    query,
    setQuery,
    active,
    setActive,
    results,
    onInputKeyDown,
  };
}
