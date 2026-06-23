import Image from "next/image";
import type { Alpha2 } from "@shared/types";
import { cn, cssAspect } from "@shared/lib";

interface FlagProps {
  alpha2: Alpha2;
  name: string;
  /**
   * Vexillological ratio `height / width` (e.g. Brazil "7 / 10"). Flipped to a
   * CSS `width / height` aspect internally so the plate renders landscape.
   */
  ratio?: string;
  /** next/image `sizes` — must reflect the rendered width for correct bucket pick. */
  sizes?: string;
  priority?: boolean;
  className?: string;
  rounded?: boolean;
}

/**
 * Current national flag, rendered from FlagCDN through a width-aware loader.
 * Server-renderable. The aspect-ratio frame reserves space → zero layout shift.
 */
export function Flag({
  alpha2,
  name,
  ratio = "2 / 3",
  sizes = "(max-width: 768px) 100vw, 33vw",
  priority = false,
  className,
  rounded = true,
}: FlagProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden bg-[var(--bg-deep)]",
        rounded && "rounded-md",
        className,
      )}
      style={{ aspectRatio: cssAspect(ratio) }}
    >
      <Image
        src={alpha2.toLowerCase()}
        alt={`Flag of ${name}`}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
      />
    </div>
  );
}
