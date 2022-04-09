// Packages
import { Story, Meta } from "@storybook/react/types-6-0"

// Components
import GameCard, { GameCardProps } from "."

export default {
  title: "GameCard",
  component: GameCard,
  args: {
    title: "Population Zero",
    developer: "Rockstar Games",
    img: "https://source.unsplash.com/user/willianjusten/300x140",
    price: "R$ 235,00",
    promotionalPrice: "R$ 200,00"
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
