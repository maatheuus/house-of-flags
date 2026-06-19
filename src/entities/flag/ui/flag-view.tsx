import type { FlagRef } from "../types";
import { resolveFlagSource } from "../lib/resolve-source";
import { Flag } from "./flag";
import { HistoricalFlag } from "./historical-flag";

interface FlagViewProps {
  flag: FlagRef;
  name: string;
  ratio?: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
  rounded?: boolean;
}

/** Renders any `FlagRef`, picking the CDN or historical-SVG renderer. */
export function FlagView({ flag, name, ...rest }: FlagViewProps) {
  const source = resolveFlagSource(flag);
  if (source.kind === "cdn") {
    return <Flag alpha2={source.alpha2} name={name} {...rest} />;
  }
  return <HistoricalFlag flagKey={source.key} label={name} {...rest} />;
}
