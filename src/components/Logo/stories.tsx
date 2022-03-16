// Packages
import { Story, Meta } from "@storybook/react/types-6-0"

// Components
import Logo from "."

// Types
import { LogoProps } from "."

export default {
  title: "Logo",
  component: Logo
} as Meta

export const Default: Story<LogoProps> = (args) => <Logo {...args} />
