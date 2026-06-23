/** Deterministic + non-deterministic pickers (used by discover-random-flag). */

/** Pick a uniformly random element. */
export function pickRandom<T>(items: readonly T[]): T {
  return items[Math.floor(Math.random() * items.length)];
}

/** Pick a random element that is not `exclude` (avoids repeating the current). */
export function pickRandomExcept<T>(items: readonly T[], exclude: T): T {
  if (items.length <= 1) return items[0];
  let next = pickRandom(items);
  while (next === exclude) next = pickRandom(items);
  return next;
}
