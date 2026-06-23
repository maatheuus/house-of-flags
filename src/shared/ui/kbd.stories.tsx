import type { Meta, StoryObj } from "@storybook/nextjs";
import { Kbd } from "./kbd";

const meta = {
  title: "Shared/UI/Kbd",
  component: Kbd,
  tags: ["autodocs"],
  args: { children: "⌘" },
} satisfies Meta<typeof Kbd>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

/** The command-palette shortcut hint, as rendered in the nav. */
export const Shortcut: Story = {
  render: () => (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 4 }}>
      <Kbd>⌘</Kbd>
      <Kbd>K</Kbd>
    </span>
  ),
};
