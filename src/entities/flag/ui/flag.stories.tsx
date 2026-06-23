import type { Meta, StoryObj } from "@storybook/nextjs";
import { Flag } from "./flag";

const meta = {
  title: "Entities/Flag/Flag",
  component: Flag,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  args: {
    alpha2: "BR",
    name: "Brazil",
    ratio: "7 / 10",
    rounded: true,
  },
  argTypes: {
    rounded: { control: "boolean" },
    priority: { control: "boolean" },
  },
  decorators: [
    (Story) => (
      <div style={{ width: 320 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Flag>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Current flag, served from FlagCDN through the global width-aware loader.
 * `ratio` is the vexillological height/width; the component flips it for CSS. */
export const Brazil: Story = {};

/** A 1:2 flag — note the wider plate from the ratio. */
export const UnitedKingdom: Story = {
  args: { alpha2: "GB", name: "United Kingdom", ratio: "1 / 2" },
};

/** Square-ish 2:3 default ratio. */
export const Japan: Story = { args: { alpha2: "JP", name: "Japan", ratio: "2 / 3" } };

export const SquareCorners: Story = {
  args: { alpha2: "FR", name: "France", ratio: "2 / 3", rounded: false },
};
