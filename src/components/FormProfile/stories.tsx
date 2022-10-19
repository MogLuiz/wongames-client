// Packages
import { Story, Meta } from "@storybook/react/types-6-0"

// Components
import FormProfile from "."

export default {
  title: "FormProfile",
  component: FormProfile
} as Meta

export const Default: Story = () => (
  <div style={{ maxWidth: 860, margin: "auto" }}>
    <FormProfile />
  </div>
)
