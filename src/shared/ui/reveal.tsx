"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";
import { reveal, revealStagger, inViewOnce, useSafeVariants } from "@shared/motion";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Render as a stagger container; direct <Reveal.Item> children animate in sequence. */
  stagger?: number;
  delay?: number;
}

/**
 * Drop-in scroll reveal using the shared `reveal` variant. Honors reduced
 * motion automatically. Server components can wrap content in <Reveal> freely —
 * this is a thin client boundary.
 */
export function Reveal({ children, className, stagger, delay = 0 }: RevealProps) {
  const variants = useSafeVariants(stagger != null ? revealStagger(stagger, delay) : reveal);
  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={inViewOnce}
    >
      {children}
    </motion.div>
  );
}

/** Child item for a staggered <Reveal stagger>. */
export function RevealItem({ children, className }: { children: ReactNode; className?: string }) {
  const variants = useSafeVariants(reveal);
  return (
    <motion.div className={className} variants={variants}>
      {children}
    </motion.div>
  );
}
