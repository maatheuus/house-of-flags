"use client";

import dynamic from "next/dynamic";

/**
 * Client-only mount of the ambient drift scene — `ssr: false` keeps the
 * decorative GSAP work off the server and out of the critical path.
 */
const Scene = dynamic(() => import("./scene"), { ssr: false });

interface FloatingFlagsSceneProps {
  onSelect?: (slug: string) => void;
  activeSlug?: string;
}

export function FloatingFlagsScene(props: FloatingFlagsSceneProps) {
  return <Scene {...props} />;
}
