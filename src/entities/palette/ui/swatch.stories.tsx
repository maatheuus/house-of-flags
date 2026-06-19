import type { Meta, StoryObj } from "@storybook/nextjs";
import { Swatch, SwatchRow } from "./swatch";

const meta = {
  title: "Entities/Palette/Swatch",
  component: Swatch,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  args: { hex: "#c1121f" },
  argTypes: { hex: { control: "color" } },
} satisfies Meta<typeof Swatch>;

export default meta;
type Story = StoryObj<typeof meta>;

/** A single color dot (hover shows the hex via `title`). */
export const Single: Story = {};

/** A row of dominant colors — the card / related-list palette. */
export const Row: Story = {
  render: () => <SwatchRow colors={["#009739", "#fedd00", "#012169", "#ffffff"]} />,
};
