import type { Meta, StoryObj } from "@storybook/nextjs";
import { getCountry } from "../model/selectors";
import { CountryCard } from "./country-card";

// Real, locale-resolved domain records — the same data the archive renders.
const brazil = getCountry("brasil", "en-US")!;
const japan = getCountry("japao", "en-US")!;
const uk = getCountry("reino-unido", "en-US")!;

const meta = {
  title: "Entities/Country/CountryCard",
  component: CountryCard,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
  args: { country: brazil, index: 1, regionLabel: "Americas", priority: true },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 360 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof CountryCard>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Archive card: flag plate over an editorial caption + dominant-color dots. */
export const Default: Story = {};

/** Without an ordinal index (e.g. a related-countries strip). */
export const NoIndex: Story = {
  args: { country: japan, index: undefined, regionLabel: "Asia" },
};

/** A grid of cards — how the archive lays them out. */
export const Grid: Story = {
  decorators: [
    (Story) => (
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
          gap: 32,
        }}
      >
        <Story />
      </div>
    ),
  ],
  render: () => (
    <>
      <CountryCard country={brazil} index={1} regionLabel="Americas" priority />
      <CountryCard country={japan} index={2} regionLabel="Asia" />
      <CountryCard country={uk} index={3} regionLabel="Europe" />
    </>
  ),
};
