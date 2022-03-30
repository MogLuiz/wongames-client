// Packages
import { screen } from "@testing-library/react"
import "jest-styled-components"

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

  it("should render a Heading with a line to the left side", () => {
    renderWithTheme(<Heading lineLeft>Won Games</Heading>)
    expect(screen.getByRole("heading", { name: /won games/i })).toHaveStyle({
      "border-left": "0.7rem solid #F231A5"
    })
  })

  it("should render a Heading with a line at the bottom", () => {
    renderWithTheme(<Heading lineBottom>Won Games</Heading>)
    expect(screen.getByRole("heading", { name: /won games/i })).toHaveStyleRule(
      "border-bottom",
      "0.5rem solid #F231A5",
      {
        modifier: "::after"
      }
    )
  })

  it("should render a Heading with a small size", () => {
    renderWithTheme(<Heading size="small">Won Games</Heading>)
    expect(screen.getByRole("heading", { name: /won games/i })).toHaveStyle({
      "font-size": "1.6rem"
    })

    expect(screen.getByRole("heading", { name: /won games/i })).toHaveStyleRule(
      "width",
      "3rem",
      {
        modifier: "::after"
      }
    )
  })

  it("should render a Heading with a secondary line color", () => {
    renderWithTheme(
      <Heading lineColor="secondary" lineBottom lineLeft>
        Lorem Ipsum
      </Heading>
    )

    const heading = screen.getByRole("heading", { name: /lorem ipsum/i })
    expect(heading).toHaveStyle({ "border-left": "0.7rem solid #3CD3C1" })
    expect(heading).toHaveStyleRule("border-bottom", "0.5rem solid #3CD3C1", {
      modifier: "::after"
    })
  })
})
