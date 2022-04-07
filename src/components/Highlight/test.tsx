// Packages
import { screen } from "@testing-library/react"

// Utils
import { renderWithTheme } from "utils/tests/helpers"

// Components
import Highlight from "."

// Styles
import * as S from "./styles"

const props = {
  title: "Heading 1",
  subtitle: "Heading 2",
  buttonLabel: "Buy now",
  buttonLink: "/rdr2",
  backgroundImage: "/img/red-dead-img.jpg"
}

describe("<Highlight />", () => {
  it("should render headings and button", () => {
    renderWithTheme(<Highlight {...props} />)

    expect(
      screen.getByRole("heading", { name: /heading 1/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole("heading", { name: /heading 2/i })
    ).toBeInTheDocument()

    expect(screen.getByRole("link", { name: /buy now/i })).toBeInTheDocument()
  })

  it("should render background image", () => {
    const { container } = renderWithTheme(<Highlight {...props} />)

    expect(container.firstChild).toHaveStyle({
      backgroundImage: `url(${props.backgroundImage})`
    })
  })

  it("should render float image", () => {
    renderWithTheme(<Highlight {...props} floatImage="/float-image.png" />)

    expect(screen.getByRole("img", { name: props.title })).toHaveAttribute(
      "src",
      "/float-image.png"
    )
  })

  it("should render align right by default", () => {
    const { container } = renderWithTheme(<Highlight {...props} />)

    expect(container.firstChild).toHaveStyleRule(
      "grid-template-areas",
      '"floatimage content"'
    )

    expect(container.firstChild).toHaveStyleRule("text-align", "right", {
      modifier: `${S.Content}`
    })
  })

  it("should render align left by props", () => {
    const { container } = renderWithTheme(
      <Highlight {...props} alignment="left" />
    )

    expect(container.firstChild).toHaveStyleRule(
      "grid-template-areas",
      '"content floatimage"'
    )
  })
})
