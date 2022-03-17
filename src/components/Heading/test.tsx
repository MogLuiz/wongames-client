// Packages
import { screen } from "@testing-library/react"

// Utils
import { renderWithTheme } from "utils/tests/helpers"

// Components
import Heading from "."

describe("<Heading />", () => {
  it("should render a white Heading by default", () => {
    renderWithTheme(<Heading>Won Games</Heading>)
    expect(screen.getByRole("heading", { name: /won games/i })).toHaveStyle({
      color: "#FAFAFA"
    })
  })

  it("should render a black Heading when color is passed", () => {
    renderWithTheme(<Heading color="black">Won Games</Heading>)
    expect(screen.getByRole("heading", { name: /won games/i })).toHaveStyle({
      color: "#030517"
    })
  })
})
