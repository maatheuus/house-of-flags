import type { Meta, StoryObj } from "@storybook/nextjs";
import type { SymbolId } from "../model";
import { SymbolIcon } from "./symbol-icon";

const ALL: SymbolId[] = [
  "star",
  "cross",
  "sun",
  "crescent",
  "eagle",
  "shield",
  "tricolor",
  "disc",
];

const meta = {
  title: "Entities/Symbol/SymbolIcon",
  component: SymbolIcon,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  args: { id: "star", className: "w-12 h-12 text-[var(--accent)]" },
  argTypes: { id: { control: "select", options: ALL } },
} satisfies Meta<typeof SymbolIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

/** Every motif in the symbolism-atlas taxonomy. */
export const AllSymbols: Story = {
  render: () => (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 28 }}>
      {ALL.map((id) => (
        <div key={id} style={{ display: "grid", placeItems: "center", gap: 8 }}>
          <SymbolIcon id={id} className="w-10 h-10 text-[var(--fg)]" />
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 10,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              color: "var(--fg-mute)",
            }}
          >
            {id}
          </span>
        </div>
      ))}
    </div>
  ),
};
