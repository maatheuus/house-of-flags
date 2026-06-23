"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { rgbToHex, type Rgb } from "@shared/lib";
import { flagCdnUrl } from "@shared/config";
import { easings } from "@shared/motion";

export interface SampledColor extends Rgb {
  hex: string;
}

interface FlagCanvasProps {
  alpha2: string;
  name: string;
  /** When true, the surface samples a color on click. */
  extracting: boolean;
  onSample: (color: SampledColor) => void;
  /** Raised when pixel access is blocked (CORS). */
  onBlocked?: () => void;
  instruction?: string;
}

/**
 * A flag surface whose pixels can be sampled. Draws the CDN image to an offscreen
 * canvas (crossOrigin) and reads the clicked pixel. This is the rendering half of
 * the palette-extraction feature; the *meaning* of the sampled color is computed
 * by the palette entity, and the interaction/mode lives in the feature.
 */
export function FlagCanvas({
  alpha2,
  name,
  extracting,
  onSample,
  onBlocked,
  instruction,
}: FlagCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const [cursor, setCursor] = useState<{ x: number; y: number } | null>(null);
  const src = flagCdnUrl(alpha2, 1280);

  useEffect(() => {
    const canvas = canvasRef.current;
    const img = imgRef.current;
    const ctx = canvas?.getContext("2d", { willReadFrequently: true });
    if (!canvas || !img || !ctx) return;

    const draw = () => {
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      ctx.drawImage(img, 0, 0);
    };
    if (img.complete) draw();
    else {
      img.addEventListener("load", draw);
      return () => img.removeEventListener("load", draw);
    }
  }, [src]);

  const sampleAt = (clientX: number, clientY: number, surface: HTMLElement) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const rect = surface.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * canvas.width;
    const y = ((clientY - rect.top) / rect.height) * canvas.height;

    try {
      const [r, g, b, a] = ctx.getImageData(x, y, 1, 1).data;
      if (a === 0) return;
      onSample({ r, g, b, hex: rgbToHex(r, g, b) });
    } catch {
      onBlocked?.();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9, ease: easings.outExpo }}
      className="relative aspect-[3/2] w-full overflow-hidden border border-[var(--line)] bg-white shadow-2xl"
      style={{ cursor: extracting ? "crosshair" : "default" }}
      onMouseMove={(e) =>
        extracting && setCursor({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY })
      }
      onMouseLeave={() => setCursor(null)}
      onClick={(e) => extracting && sampleAt(e.clientX, e.clientY, e.currentTarget)}
    >
      {/* Hidden source + canvas used purely for pixel extraction. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img ref={imgRef} src={src} crossOrigin="anonymous" alt="" className="hidden" />
      <canvas ref={canvasRef} className="hidden" />

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={`Flag of ${name}`}
        className="h-full w-full object-cover"
        draggable={false}
      />

      {extracting && cursor && (
        <div
          className="pointer-events-none absolute z-10 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white mix-blend-difference"
          style={{ left: cursor.x, top: cursor.y }}
        >
          <span className="h-3 w-px bg-white" />
          <span className="absolute h-px w-3 bg-white" />
        </div>
      )}

      {extracting && instruction && (
        <div className="pointer-events-none absolute left-1/2 top-6 -translate-x-1/2 border border-cream/20 bg-navy px-5 py-2.5 font-serif text-sm italic text-cream shadow-2xl">
          {instruction}
        </div>
      )}
    </motion.div>
  );
}
