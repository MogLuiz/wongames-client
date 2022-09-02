// Packages
import { Story, Meta } from "@storybook/react/types-6-0"

// Mock
import mockGame from "./mock"

// Components
import GameInfo, { GameInfoProps } from "."

export default {
  title: "Game/GameInfo",
  component: GameInfo,
  parameters: {
    backgrounds: {
      default: "won-dark"
    }
  },
  args: mockGame
} as Meta

export const Default: Story<GameInfoProps> = (args) => (
  <div style={{ maxWidth: "144rem", margin: "auto", padding: "1.5rem" }}>
    <GameInfo {...args} />
  </div>
)
