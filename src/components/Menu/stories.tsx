// Packages
import { Story, Meta } from "@storybook/react/types-6-0"

// Components
import Menu, { MenuProps } from "."

export default {
  title: "Menu",
  component: Menu
} as Meta

export const Default: Story<MenuProps> = (args) => <Menu {...args} />

Default.parameters = {
  layout: "fullscreen",
  backgrounds: {
    default: "dark"
  }
}
