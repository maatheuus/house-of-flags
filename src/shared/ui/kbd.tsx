import type { ReactNode } from "react";
import { cn } from "@shared/lib";

export function Kbd({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <kbd
      className={cn(
        "rounded border border-[var(--line)] bg-[var(--bg-deep)] px-1.5 py-0.5 font-mono text-[10.5px] text-[var(--fg-soft)]",
        className,
      )}
    >
      {children}
    </kbd>
  );
}
