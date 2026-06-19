import type { Transition, Variants } from "motion/react";
import { easings } from "./easings";

/** Standard editorial transition for UI-state changes. */
export const editorialTransition: Transition = {
  duration: 0.55,
  ease: easings.editorial,
};

/** Hover/tap microinteraction for cards & interactive surfaces. */
export const liftOnHover = {
  rest: { y: 0 },
  hover: { y: -4, transition: { duration: 0.5, ease: easings.outExpo } },
  tap: { scale: 0.98 },
} satisfies Variants;

/** Presence transition for overlays/panels (dossier, command palette). */
export const overlayPresence: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.35, ease: easings.editorial } },
  exit: { opacity: 0, transition: { duration: 0.3, ease: easings.editorial } },
};

/** A right-side panel slide (country dossier). */
export const panelSlide: Variants = {
  hidden: { x: "100%" },
  visible: { x: 0, transition: { duration: 0.65, ease: easings.outExpo } },
  exit: { x: "100%", transition: { duration: 0.5, ease: easings.editorial } },
};
