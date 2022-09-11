// Packages
import { Story, Meta } from "@storybook/react/types-6-0"

// Components
import Gallery from "."

export default {
  title: "Gallery",
  component: Gallery
} as Meta

export const Default: Story = () => <Gallery />
