// Packages
import { Story, Meta } from "@storybook/react/types-6-0"

// Components
import CartList from "."

export default {
  title: "CartList",
  component: CartList
} as Meta

export const Default: Story = () => <CartList />
