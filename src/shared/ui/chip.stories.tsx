import type { Meta, StoryObj } from "@storybook/nextjs";
import { Chip } from "./chip";

const meta = {
  title: "Shared/UI/Chip",
  component: Chip,
  tags: ["autodocs"],
  args: { children: "Europe" },
  argTypes: {
    active: { control: "boolean" },
    swatch: { control: "color" },
  },
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Idle continent/color filter pill. */
export const Default: Story = {};

/** Selected state — inverted fill. */
export const Active: Story = { args: { active: true } };

/** Color filter variant with a leading swatch dot. */
export const WithSwatch: Story = { args: { children: "Bordeaux", swatch: "#780000" } };

/** A realistic filter row from the archive. */
export const FilterRow: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
      <Chip active>All</Chip>
      <Chip>Americas</Chip>
      <Chip>Europe</Chip>
      <Chip>Asia</Chip>
      <Chip>Africa</Chip>
      <Chip swatch="#c1121f">Red</Chip>
      <Chip swatch="#003049">Blue</Chip>
    </div>
  ),
};
