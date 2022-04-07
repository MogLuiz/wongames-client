// Packages
import { screen } from "@testing-library/react"

// Utils
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
})
