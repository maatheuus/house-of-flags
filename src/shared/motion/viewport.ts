import type { Variants } from "motion/react";
import { easings } from "./easings";

/** Default whileInView viewport: reveal once, slightly before fully on-screen. */
export const inViewOnce = { once: true, margin: "-12% 0px -12% 0px" } as const;

/**
 * The signature reveal: opacity + small Y + blur clearing — the ai_studio_flags
 * motion language, expressed as reusable Framer variants. Animate transform and
 * opacity only (filter blur is GPU-composited and short-lived).
 */
export const reveal: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: easings.outExpo },
  },
};

/** Container that staggers children using the `reveal` variant. */
export const revealStagger = (stagger = 0.08, delayChildren = 0): Variants => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger, delayChildren },
  },
});
