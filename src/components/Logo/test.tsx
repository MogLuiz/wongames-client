// Packages
import { screen } from "@testing-library/react"

// utils
import { renderWithTheme } from "utils/tests/helpers"

// Components
import Logo from "."

describe("<Logo />", () => {
  it("should render a white label by default", () => {
    renderWithTheme(<Logo />)
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: "#FAFAFA"
    })
  })
})
