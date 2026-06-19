import type { Meta, StoryObj } from "@storybook/nextjs";
import { Select } from "./select";

const options = [
  { value: "br", label: "Brazil" },
  { value: "pt", label: "Portugal" },
  { value: "fr", label: "France" },
  { value: "jp", label: "Japan" },
];

const meta = {
  title: "Shared/UI/Select",
  component: Select,
  tags: ["autodocs"],
  args: { options },
  argTypes: { serif: { control: "boolean" } },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Compact native select (used where the design system dropdown is overkill). */
export const Default: Story = {};

/** Large serif variant — the comparator slot selectors. */
export const Serif: Story = { args: { serif: true } };
