import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@shared/lib";

type Variant = "primary" | "ghost";

const base =
  "inline-flex items-center gap-2.5 rounded-full px-[22px] py-[14px] text-[13.5px] font-medium tracking-[0.02em] transition-all duration-300 ease-[var(--ease-editorial)]";

const variants: Record<Variant, string> = {
  primary:
    "bg-[var(--fg)] text-[var(--bg)] hover:-translate-y-px hover:bg-[var(--accent)] hover:text-cream",
  ghost:
    "border border-[var(--line-strong)] bg-transparent text-[var(--fg)] hover:border-[var(--accent)] hover:text-[var(--accent)]",
};

interface ButtonBaseProps {
  variant?: Variant;
  className?: string;
  children: ReactNode;
}

export function Button({
  variant = "primary",
  className,
  children,
  ...rest
}: ButtonBaseProps & ComponentPropsWithoutRef<"button">) {
  return (
    <button className={cn(base, variants[variant], className)} {...rest}>
      {children}
    </button>
  );
}

/** Visual button styling for use on an anchor/Link. */
export function buttonClass(variant: Variant = "primary", className?: string) {
  return cn(base, variants[variant], className);
}
