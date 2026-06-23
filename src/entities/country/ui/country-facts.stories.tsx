import type { Meta, StoryObj } from "@storybook/nextjs";
import { getCountry } from "../model/selectors";
import { CountryFacts, type FactsLabels } from "./country-facts";

// English labels are supplied by the dossier widget; the entity stays
// i18n-agnostic, so the story passes them explicitly.
const labels: FactsLabels = {
  capital: "Capital",
  region: "Region",
  ratio: "Ratio",
  adopted: "Adopted",
  designer: "Designer",
  tag: "Tag",
};

const brazil = getCountry("brasil", "en-US")!;
const france = getCountry("franca", "en-US")!;

const meta = {
  title: "Entities/Country/CountryFacts",
  component: CountryFacts,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
  args: { country: brazil, labels, regionLabel: "Americas" },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 420 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof CountryFacts>;

export default meta;
type Story = StoryObj<typeof meta>;

/** The dossier fact sheet — a definition list of structural data. */
export const Default: Story = {};

/** A record that includes the optional `designer` row. */
export const France: Story = {
  args: { country: france, regionLabel: "Europe" },
};
