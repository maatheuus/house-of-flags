/**
 * A temporal slice in a flag's life. Purely chronological — the *flag variant*
 * shown for a period is associated by the country aggregate, keeping this
 * concept decoupled from rendering.
 */
export interface HistoricalPeriod {
  year: number;
  label: string;
  note: string;
  /** Why the design changed — the editorial "reasons" list. */
  reasons?: string[];
}
