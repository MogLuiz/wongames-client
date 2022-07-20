// Packages
import { screen } from "@testing-library/react"
import { renderWithTheme } from "utils/tests/helpers"
import { formatRegExpresion } from "utils/formatRegExpresion"

import theme from "styles/theme"

// Components
import Checkbox, { CheckboxProps } from "."

const factorySetupTest = (args?: CheckboxProps) => {
  const utils = renderWithTheme(<Checkbox {...args} />)

  const InputElementByCheckboxRole = screen.getByRole("checkbox")
  const InputElementByCheckboxLabelText = screen.queryByLabelText(
    new RegExp(formatRegExpresion(args?.label), "i")
  )
  const labelElementByText = screen.queryByText(
    new RegExp(formatRegExpresion(args?.label), "i")
  )

  return {
    InputElementByCheckboxRole,
    InputElementByCheckboxLabelText,
    labelElementByText,
    ...utils
  }
}

describe("<Checkbox />", () => {
  const factorySetupTestArgs = { label: "checkbox label", labelFor: "check" }

  it("should render with label", () => {
    const { InputElementByCheckboxRole, InputElementByCheckboxLabelText } =
      factorySetupTest(factorySetupTestArgs)

    expect(InputElementByCheckboxRole).toBeInTheDocument()
    expect(InputElementByCheckboxLabelText).toBeInTheDocument()
  })

  it("should make the correct association of the htmlFor(for) attribute", () => {
    const { labelElementByText } = factorySetupTest(factorySetupTestArgs)

    expect(labelElementByText).toHaveAttribute("for", "check")
  })

  it("should ensure that when the label property is not passed the HTML label element is not rendered", () => {
    const { labelElementByText } = factorySetupTest()

    expect(labelElementByText).not.toBeInTheDocument()
  })

  it("should render with black label", () => {
    const { labelElementByText } = factorySetupTest({
      label: "checkbox label",
      labelFor: "check",
      labelColor: "black"
    })

    expect(labelElementByText).toHaveStyle({ color: theme.colors.black })
  })

  it("should dispatch onCheck when status changes", () => {
    const onCheck = jest.fn()
    factorySetupTest({ label: "Chekbox", onCheck: onCheck })

    expect(onCheck).not.toHaveBeenCalled()
  })
})
