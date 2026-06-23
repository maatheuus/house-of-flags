/**
 * Pointer / resize handlers in an animation-heavy site must never run on every
 * raw event. These helpers keep work aligned to frames or to a trailing edge.
 */

/** Coalesce calls to one per animation frame; the latest args win. */
export function rafThrottle<Args extends unknown[]>(
  fn: (...args: Args) => void,
): ((...args: Args) => void) & { cancel: () => void } {
  let frame: number | null = null;
  let lastArgs: Args | null = null;

  const wrapped = (...args: Args) => {
    lastArgs = args;
    if (frame !== null) return;
    frame = requestAnimationFrame(() => {
      frame = null;
      if (lastArgs) fn(...lastArgs);
    });
  };

  wrapped.cancel = () => {
    if (frame !== null) cancelAnimationFrame(frame);
    frame = null;
  };

  return wrapped;
}

/** Classic trailing debounce. */
export function debounce<Args extends unknown[]>(
  fn: (...args: Args) => void,
  wait: number,
): ((...args: Args) => void) & { cancel: () => void } {
  let timer: ReturnType<typeof setTimeout> | null = null;

  const wrapped = (...args: Args) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => fn(...args), wait);
  };

  wrapped.cancel = () => {
    if (timer) clearTimeout(timer);
    timer = null;
  };

  return wrapped;
}
