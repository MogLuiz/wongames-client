// Packages
import { Story, Meta } from "@storybook/react/types-6-0"

// Components
import UserDropdown from "."

export default {
  title: "UserDropdown",
  component: UserDropdown
} as Meta

export const Default: Story = () => <UserDropdown />
