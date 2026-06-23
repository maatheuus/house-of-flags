import type { Meta, StoryObj } from "@storybook/nextjs";
import { Container } from "./container";

const meta = {
  title: "Shared/UI/Container",
  component: Container,
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" },
  args: { children: null }, // each story supplies its own content via `render`
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

const Box = ({ label }: { label: string }) => (
  <div
    style={{
      border: "1px dashed var(--line-strong)",
      padding: "24px",
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      textTransform: "uppercase",
      letterSpacing: "0.14em",
      color: "var(--fg-soft)",
    }}
  >
    {label}
  </div>
);

/** Gutter only — the page-width content rail. */
export const Default: Story = {
  render: () => (
    <Container>
      <Box label="max-w 1400 · page gutter" />
    </Container>
  ),
};

/** With the editorial section rhythm (vertical `--pad-y`). */
export const Section: Story = {
  render: () => (
    <Container section>
      <Box label="section padding (pad-y)" />
    </Container>
  ),
};
