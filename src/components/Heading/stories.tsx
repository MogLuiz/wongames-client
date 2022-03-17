// Packages
import { Story, Meta } from "@storybook/react/types-6-0"

// Components
import Heading from "."

export default {
  title: "Heading",
  component: Heading
} as Meta

export const Default: Story = () => <Heading />
