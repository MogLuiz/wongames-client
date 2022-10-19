// Packages
import { Story, Meta } from "@storybook/react/types-6-0"

// Components
import CardsList from "."

export default {
  title: "CardsList",
  component: CardsList
} as Meta

export const Default: Story = () => <CardsList />
