// Packages
import { Story, Meta } from "@storybook/react/types-6-0"

// Components
import OrdersList from "."

export default {
  title: "OrdersList",
  component: OrdersList
} as Meta

export const Default: Story = () => <OrdersList />
