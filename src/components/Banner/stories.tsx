// Packages
import { Story, Meta } from "@storybook/react/types-6-0"

// Components
import Banner from "."

export default {
  title: "Banner",
  component: Banner
} as Meta

export const Default: Story = () => <Banner />
