// Packages
import { screen } from "@testing-library/react"

// Utils
import { renderWithTheme } from "utils/tests/helpers"

// Components
import Button from "."

describe("<Button />", () => {
  it("should render the medium size by default", () => {
    renderWithTheme(<Button>Buy now</Button>)

    expect(screen.getByRole("button", { name: /Buy now/i })).toHaveStyle({
      height: "4rem",
      padding: "0.8rem 3.2rem",
      "font-size": "1.4rem"
    })
  })
})
