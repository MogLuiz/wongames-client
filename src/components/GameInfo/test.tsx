// Packages
import { screen } from "@testing-library/react"
import { renderWithTheme } from "utils/tests/helpers"

// Components
import GameInfo from "."

const props = {
  title: "My Game Title",
  description: "Game Description",
  price: 210
}

describe("<GameInfo />", () => {
  it("should render game informations", () => {
    renderWithTheme(<GameInfo {...props} />)

    expect(
      screen.getByRole("heading", { name: /my game title/i })
    ).toBeInTheDocument()
    expect(screen.getByText(/\$210\.00/)).toBeInTheDocument()
    expect(screen.getByText(/game description/i)).toBeInTheDocument()
  })

  it("should render buttons", () => {
    renderWithTheme(<GameInfo {...props} />)

    expect(
      screen.getByRole("button", { name: /add to cart/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole("button", { name: /wishlist/i })
    ).toBeInTheDocument()
  })

  it("should render the component with correct style", () => {
    const { container } = renderWithTheme(<GameInfo {...props} />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
