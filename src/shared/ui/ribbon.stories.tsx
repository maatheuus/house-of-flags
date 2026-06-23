import type { Meta, StoryObj } from "@storybook/nextjs";
import { Ribbon } from "./ribbon";

const meta = {
  title: "Shared/UI/Ribbon",
  component: Ribbon,
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" },
  args: {
    items: ["Vexillology", "Colour & Symbol", "16 Nations", "Editorial Archive"],
  },
} satisfies Meta<typeof Ribbon>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Infinite editorial marquee. Motion pauses under reduced-motion. */
export const Default: Story = {};
