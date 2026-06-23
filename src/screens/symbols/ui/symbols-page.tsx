import { SymbolismAtlas } from "@widgets/symbolism-atlas";
import { PaletteLab } from "@widgets/palette-lab";

/** The lexicon route: symbol taxonomy plus the chromatic study & lab. */
export function SymbolsPage() {
  return (
    <main className="pt-12">
      <SymbolismAtlas />
      <PaletteLab />
    </main>
  );
}
