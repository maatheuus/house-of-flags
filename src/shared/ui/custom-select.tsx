"use client";

import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@shared/lib";

export interface SelectOption {
  value: string;
  label: string;
  /** Optional leading color dot. */
  swatch?: string;
}

interface CustomSelectProps {
  value: string;
  options: SelectOption[];
  onChange: (value: string) => void;
  placeholder?: string;
  /** Larger serif trigger used by the comparator slots. */
  serif?: boolean;
  /** Align the popover to the trigger's right edge. */
  align?: "left" | "right";
  ariaLabel?: string;
  className?: string;
}

/**
 * Accessible custom dropdown — a styled trigger over an animated popover list.
 * Replaces native `<select>` so the menu matches the editorial design system
 * (tokens, serif/mono type, swatches, motion). Keyboard: ↑/↓ move, Enter picks,
 * Esc/blur/outside-click closes.
 */
export function CustomSelect({
  value,
  options,
  onChange,
  placeholder,
  serif = false,
  align = "left",
  ariaLabel,
  className,
}: CustomSelectProps) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);
  const listId = useId();

  const selected = options.find((o) => o.value === value) ?? null;

  // Close on outside click.
  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpen(false);
    };
    window.addEventListener("mousedown", onDown);
    return () => window.removeEventListener("mousedown", onDown);
  }, [open]);

  // When opening, focus the active option on the current value.
  useEffect(() => {
    if (open) setActive(Math.max(0, options.findIndex((o) => o.value === value)));
  }, [open, options, value]);

  const commit = (v: string) => {
    onChange(v);
    setOpen(false);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown" || (!open && e.key === "Enter")) {
      e.preventDefault();
      if (!open) return setOpen(true);
      setActive((i) => Math.min(i + 1, options.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter" && open) {
      e.preventDefault();
      const opt = options[active];
      if (opt) commit(opt.value);
    } else if (e.key === "Escape") {
      setOpen(false);
    }
  };

  return (
    <div ref={rootRef} className={cn("relative", className)}>
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={ariaLabel}
        onClick={() => setOpen((o) => !o)}
        onKeyDown={onKeyDown}
        className={cn(
          "group flex w-full items-center justify-between gap-3 outline-none transition-colors",
          "focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]",
          serif
            ? "border-b border-[var(--line-strong)] pb-2 font-serif text-[clamp(22px,3vw,30px)] font-medium tracking-[-0.01em] hover:border-[var(--accent)]"
            : "rounded-full border border-[var(--line)] bg-[var(--bg-elev)] px-3.5 py-2 font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--fg-soft)] hover:border-[var(--line-strong)] hover:text-[var(--fg)]",
        )}
      >
        <span className="flex items-center gap-2 truncate">
          {selected?.swatch && (
            <span
              className="h-2.5 w-2.5 shrink-0 rounded-full border border-black/10"
              style={{ background: selected.swatch }}
            />
          )}
          <span className="truncate">{selected?.label ?? placeholder ?? ""}</span>
        </span>
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          aria-hidden
          className={cn(
            "shrink-0 transition-transform duration-200 ease-[var(--ease-editorial)]",
            open && "rotate-180",
          )}
        >
          <path d="M1 1l4 4 4-4" stroke="currentColor" fill="none" strokeWidth="1.4" />
        </svg>
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            id={listId}
            role="listbox"
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: "top" }}
            className={cn(
              "absolute z-50 mt-2 max-h-[280px] min-w-[var(--w,180px)] overflow-y-auto rounded-xl border border-[var(--line)] bg-[var(--bg-elev)] p-1.5 shadow-[0_2px_8px_rgba(0,0,0,0.12),0_16px_40px_rgba(0,0,0,0.18)]",
              align === "right" ? "right-0" : "left-0",
            )}
          >
            {options.map((opt, i) => {
              const isSel = opt.value === value;
              return (
                <li key={opt.value} role="option" aria-selected={isSel}>
                  <button
                    type="button"
                    onMouseEnter={() => setActive(i)}
                    onClick={() => commit(opt.value)}
                    className={cn(
                      "flex w-full items-center justify-between gap-3 rounded-lg px-3 py-2 text-left text-[13px] transition-colors",
                      i === active ? "bg-[var(--bg-deep)]" : "hover:bg-[var(--bg-deep)]",
                      isSel ? "text-[var(--fg)]" : "text-[var(--fg-soft)]",
                    )}
                  >
                    <span className="flex items-center gap-2 truncate">
                      {opt.swatch && (
                        <span
                          className="h-2.5 w-2.5 shrink-0 rounded-full border border-black/10"
                          style={{ background: opt.swatch }}
                        />
                      )}
                      <span className="truncate">{opt.label}</span>
                    </span>
                    {isSel && <span className="text-[var(--accent)]">✓</span>}
                  </button>
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
