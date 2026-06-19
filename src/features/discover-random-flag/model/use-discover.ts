"use client";

import { useCallback, useState } from "react";
import { useRouter } from "@i18n/navigation";
import { getAllSlugs } from "@entities/country";
import { pickRandomExcept } from "@shared/lib";

/**
 * Discovery controller: spins to a random country dossier, never repeating the
 * one just shown. Navigation stays locale-aware via the i18n router.
 */
export function useDiscover() {
  const router = useRouter();
  const [last, setLast] = useState<string>("");

  const spin = useCallback(() => {
    const slugs = getAllSlugs();
    const next = pickRandomExcept(slugs, last);
    setLast(next);
    router.push(`/country/${next}`);
  }, [last, router]);

  return { spin };
}
