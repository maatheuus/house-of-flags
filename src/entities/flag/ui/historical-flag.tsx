import { cn, cssAspect } from "@shared/lib";
import { getHistoricalFlag } from "../lib/registry";

interface HistoricalFlagProps {
  /** Registry key, e.g. "EVO_BR_1889". */
  flagKey: string;
  label?: string;
  ratio?: string;
  className?: string;
  rounded?: boolean;
}

/**
 * Renders a historical flag variant from the local SVG registry.
 * The markup is static and authored by us, so inlining it is safe.
 */
export function HistoricalFlag({
  flagKey,
  label,
  ratio = "2 / 3",
  className,
  rounded = true,
}: HistoricalFlagProps) {
  const svg = getHistoricalFlag(flagKey);

  return (
    <div
      role="img"
      aria-label={label ?? flagKey}
      className={cn(
        "relative overflow-hidden bg-[var(--bg-deep)] [&>svg]:h-full [&>svg]:w-full [&>svg]:object-cover",
        rounded && "rounded-md",
        className,
      )}
      style={{ aspectRatio: cssAspect(ratio) }}
      {...(svg ? { dangerouslySetInnerHTML: { __html: svg } } : {})}
    />
  );
}
