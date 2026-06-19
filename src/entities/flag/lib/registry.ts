/**
 * Local vector registry of *historical* flag variants, ported and extended
 * from the mule_flags `FlagEvolution` set. FlagCDN only serves current flags,
 * so prior designs must be hand-drawn SVG. Each value is a self-contained,
 * static SVG string (authored by us — safe to inline).
 *
 * Keys follow `EVO_<ISO>_<YEAR>`. To add a variant: add a key here and
 * reference it from a country's evolution timeline via `{ svg: "EVO_…" }`.
 */
export const HISTORICAL_FLAGS: Record<string, string> = {
  EVO_BR_1500: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600"><rect width="900" height="600" fill="#fff"/><path d="M450 150 v300 M300 300 h300 M390 150 h120 v60 h90 v90 h-90 v60 h-30 v60 h-60 v-60 h-30 v-60 h-90 v-90 h90 z" fill="#c1121f"/></svg>`,
  EVO_BR_1822: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600"><rect width="900" height="600" fill="#009c3b"/><polygon points="450,60 840,300 450,540 60,300" fill="#ffdf00"/><circle cx="450" cy="300" r="120" fill="#fdf0d5"/><circle cx="450" cy="300" r="100" fill="#003049" opacity=".15"/><text x="450" y="315" text-anchor="middle" font-family="serif" font-size="56" fill="#003049">★</text></svg>`,
  EVO_BR_1889: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600"><rect width="900" height="600" fill="#009c3b"/><polygon points="450,60 840,300 450,540 60,300" fill="#ffdf00"/><circle cx="450" cy="300" r="170" fill="#002776"/><path d="M 290 230 Q 450 340 610 230" stroke="#fff" stroke-width="30" fill="none"/><text x="450" y="305" font-family="serif" font-size="14" fill="#009c3b" text-anchor="middle" font-weight="700">ORDEM E PROGRESSO</text><g fill="#fff"><circle cx="400" cy="270" r="3"/><circle cx="470" cy="265" r="3"/><circle cx="440" cy="320" r="3"/><circle cx="500" cy="350" r="3"/></g></svg>`,
  EVO_US_1777: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600">${Array.from({ length: 13 }, (_, i) => `<rect x="0" y="${i * 46.15}" width="900" height="46.5" fill="${i % 2 === 0 ? "#b22234" : "#fff"}"/>`).join("")}<rect width="380" height="323" fill="#3c3b6e"/>${Array.from({ length: 13 }, (_, i) => {
    const a = (i * (360 / 13) * Math.PI) / 180 - Math.PI / 2;
    return `<circle cx="${190 + Math.cos(a) * 100}" cy="${161 + Math.sin(a) * 100}" r="10" fill="#fff"/>`;
  }).join("")}</svg>`,
  EVO_US_1818: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600">${Array.from({ length: 13 }, (_, i) => `<rect x="0" y="${i * 46.15}" width="900" height="46.5" fill="${i % 2 === 0 ? "#b22234" : "#fff"}"/>`).join("")}<rect width="380" height="323" fill="#3c3b6e"/>${Array.from({ length: 20 }, (_, i) => `<circle cx="${50 + (i % 5) * 70}" cy="${50 + Math.floor(i / 5) * 60}" r="14" fill="#fff"/>`).join("")}</svg>`,
  EVO_US_1912: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600">${Array.from({ length: 13 }, (_, i) => `<rect x="0" y="${i * 46.15}" width="900" height="46.5" fill="${i % 2 === 0 ? "#b22234" : "#fff"}"/>`).join("")}<rect width="380" height="323" fill="#3c3b6e"/>${Array.from({ length: 48 }, (_, i) => `<circle cx="${30 + (i % 8) * 45}" cy="${30 + Math.floor(i / 8) * 45}" r="10" fill="#fff"/>`).join("")}</svg>`,
  EVO_FR_1790: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600"><rect width="900" height="600" fill="#fff"/><circle cx="450" cy="300" r="180" fill="none" stroke="#0055A4" stroke-width="60"/><circle cx="450" cy="300" r="120" fill="none" stroke="#fff" stroke-width="40"/><circle cx="450" cy="300" r="80" fill="#EF4135"/></svg>`,
  EVO_FR_1794: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600"><rect width="300" height="600" x="0" fill="#EF4135"/><rect width="300" height="600" x="300" fill="#fff"/><rect width="300" height="600" x="600" fill="#0055A4"/></svg>`,
  EVO_FR_1976: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600"><rect width="300" height="600" x="0" fill="#3c5fa9"/><rect width="300" height="600" x="300" fill="#fff"/><rect width="300" height="600" x="600" fill="#EF4135"/></svg>`,
  EVO_PT_1143: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600"><rect width="900" height="600" fill="#fff"/><g fill="#0055A4">${[[450, 170], [330, 290], [570, 290], [450, 410], [450, 290]].map(([x, y]) => `<rect x="${x - 50}" y="${y - 50}" width="100" height="100" rx="6"/>`).join("")}</g></svg>`,
  EVO_PT_1495: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600"><rect width="900" height="600" fill="#fff"/><circle cx="450" cy="300" r="180" fill="none" stroke="#ffcc00" stroke-width="10"/><g stroke="#ffcc00" stroke-width="4" fill="none"><ellipse cx="450" cy="300" rx="180" ry="60"/><ellipse cx="450" cy="300" rx="60" ry="180"/></g><rect x="400" y="240" width="100" height="120" fill="#fff" stroke="#0055A4" stroke-width="6"/></svg>`,
  EVO_PT_1830: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600"><rect width="450" height="600" fill="#0033a0"/><rect x="450" width="450" height="600" fill="#fff"/><circle cx="450" cy="300" r="120" fill="#fff" stroke="#ffcc00" stroke-width="6"/><circle cx="450" cy="300" r="80" fill="#0033a0"/></svg>`,
  EVO_AR_1812: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600"><rect y="0" width="900" height="200" fill="#74acdf"/><rect y="200" width="900" height="200" fill="#fff"/><rect y="400" width="900" height="200" fill="#74acdf"/></svg>`,
  EVO_JP_700: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600"><rect width="900" height="600" fill="#fff"/><circle cx="450" cy="300" r="160" fill="none" stroke="#bc002d" stroke-width="14"/><circle cx="450" cy="300" r="130" fill="#bc002d" opacity=".7"/></svg>`,
  EVO_DE_1848: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600"><rect y="0" width="900" height="200" fill="#000"/><rect y="200" width="900" height="200" fill="#dd0000"/><rect y="400" width="900" height="200" fill="#ffce00"/><circle cx="450" cy="300" r="60" fill="#ffce00" stroke="#000" stroke-width="4" opacity=".25"/></svg>`,
  EVO_DE_1919: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600"><rect y="0" width="900" height="200" fill="#000"/><rect y="200" width="900" height="200" fill="#dd0000"/><rect y="400" width="900" height="200" fill="#ffce00"/></svg>`,
  EVO_GB_1606: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600"><rect width="900" height="600" fill="#012169"/><path d="M0,0 L900,600 M900,0 L0,600" stroke="#fff" stroke-width="120"/><path d="M450,0 V600 M0,300 H900" stroke="#fff" stroke-width="160"/><path d="M450,0 V600 M0,300 H900" stroke="#C8102E" stroke-width="80"/></svg>`,
  EVO_ZA_1928: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600"><rect width="900" height="600" fill="#ff8200"/><rect y="200" width="900" height="200" fill="#fff"/><rect y="400" width="900" height="200" fill="#003478"/><rect x="370" y="240" width="160" height="120" fill="#fff"/></svg>`,
};

export function getHistoricalFlag(key: string): string | undefined {
  return HISTORICAL_FLAGS[key];
}
