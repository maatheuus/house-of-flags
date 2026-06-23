import type { Meta, StoryObj } from "@storybook/nextjs";
import { Button } from "./button";

const meta = {
  title: "Shared/UI/Button",
  component: Button,
  tags: ["autodocs"],
  args: { children: "Explore the archive" },
  argTypes: {
    variant: { control: "inline-radio", options: ["primary", "ghost"] },
    disabled: { control: "boolean" },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Solid pill — the principal call to action. */
export const Primary: Story = { args: { variant: "primary" } };

/** Outlined pill for secondary actions. */
export const Ghost: Story = { args: { variant: "ghost" } };

export const Disabled: Story = { args: { variant: "primary", disabled: true } };

/** Both variants side by side — useful for theme/contrast review. */
export const Variants: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
      <Button {...args} variant="primary">
        Primary
      </Button>
      <Button {...args} variant="ghost">
        Ghost
      </Button>
    </div>
  ),
};
