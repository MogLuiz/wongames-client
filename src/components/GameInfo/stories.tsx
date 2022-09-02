// Packages
import { Story, Meta } from "@storybook/react/types-6-0"

// Components
import GameInfo from "."

export default {
  title: "GameInfo",
  component: GameInfo
} as Meta

export const Default: Story = () => <GameInfo />
