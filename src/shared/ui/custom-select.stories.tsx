import type { Meta, StoryObj } from "@storybook/nextjs";
import { useState } from "react";
import { CustomSelect, type SelectOption } from "./custom-select";

const countries: SelectOption[] = [
  { value: "brasil", label: "Brazil" },
  { value: "portugal", label: "Portugal" },
  { value: "franca", label: "France" },
  { value: "japao", label: "Japan" },
  { value: "estados-unidos", label: "United States" },
];

const colors: SelectOption[] = [
  { value: "red", label: "Red", swatch: "#c1121f" },
  { value: "blue", label: "Blue", swatch: "#003049" },
  { value: "gold", label: "Gold", swatch: "#c9a14a" },
  { value: "green", label: "Green", swatch: "#486a4a" },
];

/**
 * Stateful harness — `CustomSelect` is controlled, so a real story needs to own
 * the value. Declared as a component (not an inline `render`) so React's
 * rules-of-hooks are satisfied.
 */
function Demo({
  options,
  initial,
  serif,
  width = 220,
  ariaLabel,
}: {
  options: SelectOption[];
  initial: string;
  serif?: boolean;
  width?: number;
  ariaLabel: string;
}) {
  const [value, setValue] = useState(initial);
  return (
    <div style={{ width }}>
      <CustomSelect serif={serif} ariaLabel={ariaLabel} value={value} options={options} onChange={setValue} />
    </div>
  );
}

const meta = {
  title: "Shared/UI/CustomSelect",
  component: CustomSelect,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  // Dummy defaults — every story drives its own state through <Demo>.
  args: { value: "", options: [], onChange: () => {} },
} satisfies Meta<typeof CustomSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

/** The accessible design-system dropdown (replaces native `<select>`). */
export const Default: Story = {
  render: () => <Demo ariaLabel="Country" options={countries} initial="brasil" />,
};

/** Options with leading color swatches — the archive color filter. */
export const WithSwatches: Story = {
  render: () => <Demo ariaLabel="Color" options={colors} initial="red" />,
};

/** Large serif trigger — the comparator slot selector. */
export const Serif: Story = {
  render: () => <Demo serif ariaLabel="Country" options={countries} initial="franca" width={320} />,
};
