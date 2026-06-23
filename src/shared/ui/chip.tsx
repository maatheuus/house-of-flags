import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@shared/lib";

interface ChipProps extends ComponentPropsWithoutRef<"button"> {
  active?: boolean;
  /** Optional leading color dot (used by the color filter). */
  swatch?: string;
  children: ReactNode;
}

/** Pill filter/toggle — the atlas continent & color filters. */
export function Chip({ active, swatch, children, className, ...rest }: ChipProps) {
  return (
    <button
      type="button"
      aria-pressed={active}
      className={cn(
        "inline-flex items-center rounded-full border px-3.5 py-2 font-mono text-[11px] uppercase tracking-[0.1em] transition-all duration-200 ease-[var(--ease-editorial)]",
        active
          ? "border-[var(--fg)] bg-[var(--fg)] text-[var(--bg)]"
          : "border-[var(--line)] text-[var(--fg-soft)] hover:border-[var(--line-strong)] hover:text-[var(--fg)]",
        swatch && "pl-2",
        className,
      )}
      {...rest}
    >
      {swatch && (
        <span
          className="mr-1.5 inline-block h-2.5 w-2.5 rounded-full border border-black/10"
          style={{ background: swatch }}
        />
      )}
      {children}
    </button>
  );
}
