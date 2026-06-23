import { createNavigation } from "next-intl/navigation";
import { routing } from "./routing";

/**
 * Locale-aware navigation primitives. Always import `Link`, `useRouter`,
 * `usePathname` and `redirect` from here instead of `next/navigation` so the
 * active locale prefix is preserved automatically.
 */
export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(routing);
