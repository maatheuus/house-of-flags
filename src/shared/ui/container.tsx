import type { ElementType, ReactNode } from "react";
import { cn } from "@shared/lib";

interface ContainerProps {
  as?: ElementType;
  className?: string;
  children: ReactNode;
  /** Editorial section padding (the mule `--pad-y`/`--pad-x` rhythm). */
  section?: boolean;
  id?: string;
}

/** Layout primitive — owns the page gutter + optional vertical section rhythm. */
export function Container({
  as: Tag = "div",
  className,
  children,
  section = false,
  id,
}: ContainerProps) {
  return (
    <Tag
      id={id}
      className={cn(
        "relative mx-auto w-full max-w-[1400px]",
        section ? "px-[var(--pad-x)] py-[var(--pad-y)]" : "px-[var(--pad-x)]",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
