// Packages
import { screen } from "@testing-library/react"
import { renderWithTheme } from "utils/tests/helpers"

// Components
import Menu from "."

describe("<Menu />", () => {
  it("should render the menu", () => {
    renderWithTheme(<Menu />)

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()
  })
})
