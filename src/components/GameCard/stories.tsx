// Packages
import { Story, Meta } from "@storybook/react/types-6-0"

// Components
import GameCard, { GameCardProps } from "."

export default {
  title: "GameCard",
  component: GameCard,
  args: {
    slug: "population-zero",
    title: "Population Zero",
    developer: "Rockstar Games",
    img: "https://source.unsplash.com/user/willianjusten/300x140",
    price: 235,
    promotionalPrice: 200
  },
  argTypes: {
    onFav: { action: "clicked" },
    ribbon: { type: "string" }
  },
  parameters: {
    backgrounds: {
      default: "won-dark"
    }
  }
} as Meta

export const Default: Story<GameCardProps> = (args) => (
  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  <div style={{ width: "30rem" }}>
    <GameCard {...args} />
  </div>
)

export const WithRibbon: Story<GameCardProps> = (args) => (
  <div style={{ width: "30rem" }}>
    <GameCard {...args} />
  </div>
)

WithRibbon.args = {
  ribbon: "20% OFF",
  ribbonSize: "small",
  ribbonColor: "primary"
}
