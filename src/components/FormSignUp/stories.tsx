// Packages
import { Story, Meta } from "@storybook/react/types-6-0"

// Components
import FormSignUp from "."

export default {
  title: "Form/FormSignUp",
  component: FormSignUp
} as Meta

export const Default: Story = () => (
  <div style={{ width: 300, margin: "auto" }}>
    <FormSignUp />
  </div>
)
