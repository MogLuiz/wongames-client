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
  const labelElementByText = screen.getByText(/checkbox label/i)

  return {
    InputElementByCheckboxRole,
    InputElementByCheckboxLabelText,
    labelElementByText,
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
    const { labelElementByText } = factorySetupTest()

    expect(labelElementByText).toHaveAttribute("for", "check")
  })

  it("should ensure that when the label property is not passed the HTML label element is not rendered", () => {
    renderWithTheme(<Checkbox />)

    expect(screen.queryByLabelText(/checkbox label/i)).not.toBeInTheDocument()
  })
})
