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
    backgroundImage: "/img/red-dead-img.jpg",
    buttonLabel: "Buy now",
    buttonLink: "/rdr2"
  }
} as Meta

export const Default: Story<HighlightProps> = (args) => (
  <div style={{ maxWidth: "104rem" }}>
    <Highlight {...args} />
  </div>
)

export const WithFloatImage: Story<HighlightProps> = (args) => (
  <div style={{ maxWidth: "104rem" }}>
    <Highlight {...args} />
  </div>
)

WithFloatImage.args = {
  floatImage: "/img/red-dead-float.png"
}
