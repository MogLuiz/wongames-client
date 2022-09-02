// Packages
import { render, screen } from "@testing-library/react"

// Components
import GameDetails from "."

describe("<GameDetails />", () => {
  it("should render the heading", () => {
    const { container } = render(<GameDetails />)

    expect(screen.getByRole("heading", { name: /GameDetails/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
