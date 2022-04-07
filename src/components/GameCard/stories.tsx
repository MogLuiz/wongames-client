// Packages
import { Story, Meta } from "@storybook/react/types-6-0"

// Components
import GameCard from "."

export default {
  title: "GameCard",
  component: GameCard
} as Meta

export const Default: Story = () => <GameCard />
