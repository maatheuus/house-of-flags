import { cn } from "@shared/lib";
import type { Hex } from "@shared/types";

/** A single color dot — used in cards, related lists and quick palettes. */
export function Swatch({ hex, className }: { hex: Hex; className?: string }) {
  return (
    <span
      className={cn("inline-block h-3.5 w-3.5 rounded-full border border-black/10", className)}
      style={{ background: hex }}
      title={hex}
    />
  );
}

/** A row of swatches. */
export function SwatchRow({ colors, className }: { colors: Hex[]; className?: string }) {
  return (
    <div className={cn("flex gap-1", className)}>
      {colors.map((hex, i) => (
        <Swatch key={`${hex}-${i}`} hex={hex} />
      ))}
    </div>
  );
}
