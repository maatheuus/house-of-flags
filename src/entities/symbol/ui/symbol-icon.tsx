import type { SymbolId } from "../model";

const PATHS: Record<SymbolId, string> = {
  star: "M12 2l2.9 6.3 6.9.7-5.1 4.6 1.4 6.8L12 17.8 5.9 20.4l1.4-6.8L2.2 9l6.9-.7z",
  cross: "M10 2h4v6h6v4h-6v10h-4V12H4V8h6z",
  sun: "M12 7a5 5 0 100 10 5 5 0 000-10zM12 1v3M12 20v3M1 12h3M20 12h3M4 4l2 2M18 18l2 2M20 4l-2 2M6 18l-2 2",
  crescent: "M17 3a9 9 0 100 18 7 7 0 010-18z",
  eagle: "M3 7l9 3 9-3-4 6 4 5-9-3-9 3 4-5z",
  shield: "M12 2l8 3v6c0 5-3.5 8.5-8 11-4.5-2.5-8-6-8-11V5z",
  tricolor: "M3 4h6v16H3zM9 4h6v16H9zM15 4h6v16h-6z",
  disc: "M12 3a9 9 0 100 18 9 9 0 000-18z",
};

export function SymbolIcon({ id, className }: { id: SymbolId; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill={id === "sun" ? "none" : "currentColor"}
      stroke={id === "sun" ? "currentColor" : "none"}
      strokeWidth={id === "sun" ? 1.6 : 0}
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d={PATHS[id]} />
    </svg>
  );
}
