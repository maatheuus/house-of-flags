/**
 * Easing tokens shared by Framer Motion and GSAP.
 * Framer wants cubic-bezier tuples; GSAP wants a "x1,y1,x2,y2" string —
 * both are derived from the same numbers so motion feels identical across tools.
 * `outExpo` is the ai_studio_flags signature reveal curve.
 */
export const easings = {
  editorial: [0.22, 0.61, 0.36, 1],
  outExpo: [0.22, 1, 0.36, 1],
  outQuart: [0.25, 1, 0.5, 1],
  inStrong: [0.7, 0, 0.84, 0],
} as const;

export type EaseTuple = readonly [number, number, number, number];

/** Convert a Framer cubic-bezier tuple into a GSAP CustomEase-style string. */
export const toGsapEase = (ease: EaseTuple): string => ease.join(",");
