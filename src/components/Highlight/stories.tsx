// Packages
import { Story, Meta } from "@storybook/react/types-6-0"

// Components
import Highlight, { HighlightProps } from "."

export default {
  title: "Highlight",
  component: Highlight,
  args: {
    title: "Read Dead está de de volta!",
    subtitle: "Venha conhecer as novas aventuras de John",
    buttonLabel: "Buy now",
    buttonLink: "/rdr2"
  }
} as Meta

export const Default: Story<HighlightProps> = (args) => <Highlight {...args} />
