// Packages
import { screen } from "@testing-library/react"

// Utils
import theme from "styles/theme"
import { renderWithTheme } from "utils/tests/helpers"

// Components
import GameCard from "."

const props = {
  title: "Population Zero",
  developer: "Rockstar Games",
  img: "https://source.unsplash.com/user/willianjusten/300x140",
  price: "R$ 235,00"
}

describe("<GameCard />", () => {
  it("should render the heading", () => {
    renderWithTheme(<GameCard {...props} />)

    expect(
      screen.getByRole("heading", { name: props.title })
    ).toBeInTheDocument()

    expect(
      screen.getByRole("heading", { name: props.developer })
    ).toBeInTheDocument()

    expect(screen.getByRole("img", { name: props.title })).toHaveAttribute(
      "src",
      props.img
    )

    expect(screen.getByLabelText(/add to wishlist/i)).toBeInTheDocument()
  })

  it("should render price in label", () => {
    renderWithTheme(<GameCard {...props} />)

    const priceBox = screen.getByText("R$ 235,00")

    expect(priceBox).not.toHaveStyle({ textDecoration: "line-through" })
    expect(priceBox).toHaveStyle({ backgroundColor: theme.colors.secondary })
  })
})
