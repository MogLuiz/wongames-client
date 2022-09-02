// Packages
import { Story, Meta } from "@storybook/react/types-6-0"

// Components
import GameDetails from "."

export default {
  title: "GameDetails",
  component: GameDetails
} as Meta

export const Default: Story = () => <GameDetails />
