// Packages
import { Story, Meta } from "@storybook/react/types-6-0"

// Assets
import { AddShoppingCart } from "@styled-icons/material-outlined/AddShoppingCart"

// Components
import Button, { ButtonProps } from "."

export default {
  title: "Button",
  component: Button,
  argTypes: {
    children: {
      type: "string"
    }
  }
} as Meta

export const Default: Story<ButtonProps> = (args) => <Button {...args} />

Default.args = {
  children: "Buy now"
}

export const withIcon: Story<ButtonProps> = (args) => <Button {...args} />

withIcon.args = {
  size: "small",
  children: "Buy now",
  icon: <AddShoppingCart />
}
