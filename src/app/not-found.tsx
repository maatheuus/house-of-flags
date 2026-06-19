"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

/**
 * Root 404 for paths that never matched a locale. Renders OUTSIDE the
 * `[locale]` layout — no design system / global CSS / fonts — so it is fully
 * self-contained (inline styles + one injected <style> for pseudo-states,
 * keyframes and reduced-motion).
 *
 * Bare `/` has no content of its own (middleware negotiates a locale), so we
 * forward the visitor to `/` (→ default-locale home) with a visible countdown
 * and an immediate manual button.
 */
const REDIRECT_TO = "/";
const SECONDS = 5;

export default function RootNotFound() {
  const [left, setLeft] = useState(SECONDS);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      window.location.replace(REDIRECT_TO);
      return;
    }
    const start = Date.now();
    const tick = setInterval(() => {
      const remaining = Math.ceil((SECONDS * 1000 - (Date.now() - start)) / 1000);
      setLeft(Math.max(0, remaining));
    }, 250);
    const go = setTimeout(() => window.location.replace(REDIRECT_TO), SECONDS * 1000);
    return () => {
      clearInterval(tick);
      clearTimeout(go);
    };
  }, []);

  return (
    <html lang="en">
      <body style={styles.body}>
        <style dangerouslySetInnerHTML={{ __html: css }} />
        <main style={styles.main}>
          <p className="nf-rise" style={{ ...styles.kicker, animationDelay: "0ms" }}>
            Error 404 · Off the map
          </p>

          <div className="nf-rise" style={{ ...styles.codeWrap, animationDelay: "80ms" }}>
            <span style={styles.code}>404</span>
          </div>

          <p className="nf-rise" style={{ ...styles.lede, animationDelay: "160ms" }}>
            This page drifted off the archive.
          </p>

          <div className="nf-rise" style={{ ...styles.bottom, animationDelay: "240ms" }}>
            <Link href={REDIRECT_TO} className="nf-btn" style={styles.btn}>
              Enter the archive
              <span aria-hidden style={styles.arrow}>
                →
              </span>
            </Link>

            <p style={styles.count}>
              Redirecting in <span style={styles.countNum}>{left}</span>s
            </p>
            <span style={styles.track} aria-hidden>
              <span className="nf-bar" style={styles.bar} />
            </span>
          </div>
        </main>
      </body>
    </html>
  );
}

const PAPER = "#faf3e3";
const INK = "#1a1410";
const CREAM = "#fdf0d5";
const BORDEAUX = "#780000";
const SOFT = "#5a4836";
const MUTE = "#8a7960";
const LINE = "rgba(26,20,16,0.14)";

const styles: Record<string, React.CSSProperties> = {
  body: {
    margin: 0,
    minHeight: "100vh",
    display: "grid",
    placeItems: "center",
    background: PAPER,
    color: INK,
    fontFamily: "ui-serif, Georgia, 'Times New Roman', serif",
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
  },
  main: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "clamp(18px, 3vw, 28px)",
    padding: "clamp(32px, 7vw, 72px)",
    textAlign: "center",
    width: "min(520px, 92vw)",
  },
  kicker: {
    margin: 0,
    fontFamily: "ui-monospace, 'SF Mono', Menlo, monospace",
    fontSize: 11,
    letterSpacing: "0.22em",
    textTransform: "uppercase",
    color: MUTE,
  },
  codeWrap: { lineHeight: 1 },
  code: {
    display: "block",
    fontSize: "clamp(96px, 17vw, 184px)",
    fontWeight: 300,
    lineHeight: 1,
    letterSpacing: "-0.04em",
    color: BORDEAUX,
  },
  lede: {
    margin: 0,
    maxWidth: 340,
    fontSize: "clamp(16px, 2.2vw, 19px)",
    fontStyle: "italic",
    lineHeight: 1.45,
    color: SOFT,
    textWrap: "balance" as React.CSSProperties["textWrap"],
  },
  bottom: {
    marginTop: "clamp(8px, 1.5vw, 16px)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 16,
  },
  btn: {
    display: "inline-flex",
    alignItems: "center",
    gap: 10,
    padding: "14px 26px",
    borderRadius: 999,
    background: INK,
    color: CREAM,
    fontFamily: "ui-sans-serif, system-ui, sans-serif",
    fontSize: 14,
    fontWeight: 500,
    letterSpacing: "0.01em",
    textDecoration: "none",
    boxShadow:
      "0 1px 2px rgba(26,20,16,0.18), 0 6px 16px rgba(26,20,16,0.12), 0 14px 32px rgba(26,20,16,0.10)",
  },
  arrow: { display: "inline-block", transition: "transform 0.25s cubic-bezier(0.22,0.61,0.36,1)" },
  count: {
    margin: 0,
    fontFamily: "ui-monospace, 'SF Mono', Menlo, monospace",
    fontSize: 11,
    letterSpacing: "0.14em",
    textTransform: "uppercase",
    color: MUTE,
  },
  countNum: { fontVariantNumeric: "tabular-nums", fontWeight: 600, color: BORDEAUX },
  track: {
    display: "block",
    width: 140,
    height: 2,
    borderRadius: 999,
    background: LINE,
    overflow: "hidden",
  },
  bar: {
    display: "block",
    width: "100%",
    height: "100%",
    transformOrigin: "left center",
    background: BORDEAUX,
  },
};

const css = `
  .nf-rise {
    opacity: 0;
    transform: translateY(12px);
    animation: nfRise 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  }
  @keyframes nfRise { to { opacity: 1; transform: translateY(0); } }
  .nf-bar { animation: nfBar ${SECONDS}s linear forwards; }
  @keyframes nfBar { from { transform: scaleX(1); } to { transform: scaleX(0); } }
  .nf-btn {
    transition-property: transform, box-shadow, background-color;
    transition-duration: 0.25s;
    transition-timing-function: cubic-bezier(0.22, 0.61, 0.36, 1);
    will-change: transform;
  }
  .nf-btn:hover { background: ${BORDEAUX}; transform: translateY(-1px); }
  .nf-btn:hover span { transform: translateX(4px); }
  .nf-btn:active { transform: scale(0.96); }
  .nf-btn:focus-visible { outline: 2px solid ${BORDEAUX}; outline-offset: 3px; }
  @media (prefers-reduced-motion: reduce) {
    .nf-rise { animation: none; opacity: 1; transform: none; }
    .nf-bar { animation: none; transform: scaleX(0); }
    .nf-btn, .nf-btn span { transition: none; }
  }
`;
