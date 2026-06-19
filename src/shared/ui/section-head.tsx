import { cn } from "@shared/lib";

interface SectionHeadProps {
  /** Editorial section index, e.g. "§ 02" rendered before the kicker. */
  ordinal?: string;
  kicker: string;
  title: string;
  lede?: string;
  dark?: boolean;
  className?: string;
}

/** The recurring mule_flags section header: ordinal + kicker, big serif title, lede. */
export function SectionHead({ ordinal, kicker, title, lede, dark, className }: SectionHeadProps) {
  return (
    <header
      className={cn(
        "mb-14 grid grid-cols-1 items-end gap-x-10 gap-y-6 md:grid-cols-2",
        dark && "text-cream",
        className,
      )}
    >
      <div className="col-span-full flex items-center gap-4 font-mono text-[11.5px] uppercase tracking-[0.18em] text-[var(--fg-mute)]">
        {ordinal && <span className="text-[var(--accent)]">{ordinal}</span>}
        <span>{kicker}</span>
      </div>
      <h2 className="col-span-full m-0 font-serif text-[clamp(40px,6vw,84px)] font-light leading-[1] tracking-[-0.025em]">
        {title}
      </h2>
      {lede && (
        <p className="m-0 max-w-[520px] text-[16px] text-[var(--fg-soft)] md:col-start-1">{lede}</p>
      )}
    </header>
  );
}
