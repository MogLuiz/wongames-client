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

  it("should render a black label when color is passed", () => {
    renderWithTheme(<Logo color="black" />)
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: "#030517"
    })
  })
})
