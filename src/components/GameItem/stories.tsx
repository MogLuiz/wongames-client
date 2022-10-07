// Packages
import { Story, Meta } from "@storybook/react/types-6-0"

// Components
import GameItem from "."

export default {
  title: "GameItem",
  component: GameItem
} as Meta

export const Default: Story = () => <GameItem />
