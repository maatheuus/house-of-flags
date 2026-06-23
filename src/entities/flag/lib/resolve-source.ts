import type { FlagRef, FlagSource } from "../types";

/** Normalize a country-authored `FlagRef` into a renderable `FlagSource`. */
export function resolveFlagSource(ref: FlagRef): FlagSource {
  if (typeof ref === "string") return { kind: "cdn", alpha2: ref };
  return { kind: "svg", key: ref.svg };
}
