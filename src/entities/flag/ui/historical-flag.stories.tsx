import type { Meta, StoryObj } from "@storybook/nextjs";
import { HistoricalFlag } from "./historical-flag";

const meta = {
  title: "Entities/Flag/HistoricalFlag",
  component: HistoricalFlag,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  args: { flagKey: "EVO_BR_1889", label: "Brazil, 1889", ratio: "7 / 10" },
  decorators: [
    (Story) => (
      <div style={{ width: 320 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof HistoricalFlag>;

export default meta;
type Story = StoryObj<typeof meta>;

/** A historical variant from the local SVG registry (FlagCDN is present-day only). */
export const Brazil1889: Story = {};

export const France1790: Story = {
  args: { flagKey: "EVO_FR_1790", label: "France, 1790", ratio: "2 / 3" },
};

export const UnitedStates1777: Story = {
  args: { flagKey: "EVO_US_1777", label: "United States, 1777", ratio: "10 / 19" },
};

/** Unknown registry key → empty plate (graceful fallback). */
export const MissingKey: Story = {
  args: { flagKey: "EVO_XX_0000", label: "Unknown" },
};
