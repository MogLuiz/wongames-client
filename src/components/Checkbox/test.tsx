// Packages
import { screen } from "@testing-library/react"
import { renderWithTheme } from "utils/tests/helpers"

// Components
import Checkbox from "."

describe("<Checkbox />", () => {
  it("should render with label", () => {
    renderWithTheme(<Checkbox label="checkbox label" labelFor="check" />)

    expect(screen.getByRole("checkbox")).toBeInTheDocument()
    expect(screen.getByLabelText(/checkbox label/i)).toBeInTheDocument()
  })

  it("should make the correct association of the htmlFor(for) attribute", () => {
    renderWithTheme(<Checkbox label="checkbox label" labelFor="check" />)

    expect(screen.getByText(/checkbox label/i)).toHaveAttribute("for", "check")
  })
})
