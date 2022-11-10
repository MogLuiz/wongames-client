// Packages
import { Story, Meta } from "@storybook/react/types-6-0"

// Components
import Menu, { MenuProps } from "."

export default {
  title: "Menu",
  component: Menu,
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "won-dark"
    }
  }
} as Meta

export const Default: Story<MenuProps> = (args) => <Menu {...args} />

export const Logged: Story<MenuProps> = (args) => <Menu {...args} />

Logged.args = {
  userName: "John Doe"
}
