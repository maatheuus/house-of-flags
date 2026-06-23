import { cn } from "@shared/lib";

/**
 * Infinite editorial marquee (mule_flags). Pure CSS animation, paused under
 * reduced-motion via the global media query. Content is duplicated so the
 * translateX(-50%) loop is seamless.
 */
export function Ribbon({ items, className }: { items: string[]; className?: string }) {
  const track = [...items, ...items];
  return (
    <section
      aria-hidden="true"
      className={cn(
        "overflow-hidden border-y border-[var(--line)] bg-[var(--bg-elev)] py-[18px]",
        className,
      )}
    >
      <div className="vx-ribbon flex gap-[60px] whitespace-nowrap font-serif text-[clamp(20px,2.4vw,30px)] italic text-[var(--fg-soft)]">
        {track.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-[60px]">
            {item}
            <span className="inline-block h-2 w-2 rounded-full bg-[var(--accent-2)]" />
          </span>
        ))}
      </div>
    </section>
  );
}
