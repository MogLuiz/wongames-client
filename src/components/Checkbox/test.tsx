// Packages
import { screen } from "@testing-library/react"
import { renderWithTheme } from "utils/tests/helpers"

// Components
import Checkbox from "."

const factorySetupTest = () => {
  const utils = renderWithTheme(
    <Checkbox label="checkbox label" labelFor="check" />
  )

  const InputElementByCheckboxRole = screen.getByRole("checkbox")
  // this getting the input because the html attribute for associates the label with ID with the same value
  const InputElementByCheckboxLabelText =
    screen.getByLabelText(/checkbox label/i)
  const checkBoxElementByText = screen.getByText(/checkbox label/i)

  return {
    InputElementByCheckboxRole,
    InputElementByCheckboxLabelText,
    checkBoxElementByText,
    ...utils
  }
}

describe("<Checkbox />", () => {
  it("should render with label", () => {
    const { InputElementByCheckboxRole, InputElementByCheckboxLabelText } =
      factorySetupTest()

    expect(InputElementByCheckboxRole).toBeInTheDocument()
    expect(InputElementByCheckboxLabelText).toBeInTheDocument()
  })

  it("should make the correct association of the htmlFor(for) attribute", () => {
    const { checkBoxElementByText } = factorySetupTest()

    expect(checkBoxElementByText).toHaveAttribute("for", "check")
  })
})
