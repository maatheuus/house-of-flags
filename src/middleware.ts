import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

/**
 * Negotiates the locale from the URL prefix, then the `Accept-Language`
 * header, falling back to the default (pt-BR). Redirects bare paths to a
 * locale-prefixed URL.
 *
 * NOTE: with a `src/` directory, Next.js only picks up middleware at
 * `src/middleware.ts` — a root-level `middleware.ts` is silently ignored.
 */
export default createMiddleware(routing);

export const config = {
  // Match the bare root explicitly (so `/` negotiates a locale instead of
  // 404ing) plus everything except Next internals, the API and static assets.
  matcher: ["/", "/((?!api|_next|_vercel|.*\\..*).*)"],
};
