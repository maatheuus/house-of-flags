import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@shared/lib";

const chevron =
  "bg-[url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path d='M1 1l4 4 4-4' stroke='%23999' fill='none'/></svg>\")] bg-[length:10px] bg-[right_10px_center] bg-no-repeat";

interface Option {
  value: string;
  label: string;
}

interface SelectProps extends Omit<ComponentPropsWithoutRef<"select">, "children"> {
  options: Option[];
  /** Larger serif variant used by the comparator slot selectors. */
  serif?: boolean;
}

export function Select({ options, serif, className, ...rest }: SelectProps) {
  return (
    <select
      className={cn(
        "appearance-none border-[var(--line-strong)] pr-7 text-[var(--fg)] outline-none",
        chevron,
        serif
          ? "border-0 border-b bg-transparent py-2 font-serif text-[24px] font-medium tracking-[-0.01em]"
          : "rounded-md border bg-[var(--bg-elev)] px-2.5 py-1.5 font-sans text-[13px]",
        className,
      )}
      {...rest}
    >
      {options.map((o) => (
        <option key={o.value} value={o.value}>
          {o.label}
        </option>
      ))}
    </select>
  );
}
