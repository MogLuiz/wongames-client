// Packages
import { Story, Meta } from "@storybook/react/types-6-0"

// Components
import PaymentOptions from "."

export default {
  title: "PaymentOptions",
  component: PaymentOptions
} as Meta

export const Default: Story = () => <PaymentOptions />
