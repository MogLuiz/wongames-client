// Packages
import { Story, Meta } from "@storybook/react/types-6-0"

// Components
import Ribbon from "."

export default {
  title: "Ribbon",
  component: Ribbon
} as Meta

export const Default: Story = () => (
  <div
    style={{
      width: "40rem",
      height: "25rem",
      position: "relative",
      backgroundColor: "#888"
    }}
  >
    <Ribbon />
  </div>
)
