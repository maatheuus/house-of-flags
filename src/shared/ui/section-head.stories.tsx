import type { Meta, StoryObj } from "@storybook/nextjs";
import { SectionHead } from "./section-head";

const meta = {
  title: "Shared/UI/SectionHead",
  component: SectionHead,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
  args: {
    ordinal: "§ 02",
    kicker: "The archive",
    title: "Sixteen nations, read closely",
    lede: "Each flag is an argument in cloth — colour, geometry and symbol arranged to make a claim about who a people are.",
  },
} satisfies Meta<typeof SectionHead>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

/** No ordinal / no lede — a compact header. */
export const Minimal: Story = {
  args: { ordinal: undefined, lede: undefined, kicker: "Symbols", title: "A shared grammar" },
};

/** Dark editorial section (the symbolism atlas runs on ink). */
export const OnDark: Story = {
  args: { dark: true },
  globals: { theme: "dark" },
};
