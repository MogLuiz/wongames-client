// Packages
import { screen } from "@testing-library/react"

// Utils
import { renderWithTheme } from "utils/tests/helpers"

// Components
import GameDetails, { GameDetailsProps } from "."

const props: GameDetailsProps = {
  developer: "Different Tales",
  platforms: ["windows", "mac", "linux"]
  // releaseDate: "2020-11-21T23:00:00",
  // rating: "BR0",
  // genres: ["Role-playing", "Narrative"]
}

describe("<GameDetails />", () => {
  it("should render the blocks", () => {
    renderWithTheme(<GameDetails {...props} />)

    expect(
      screen.getByRole("heading", { name: /developer/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole("heading", { name: /release date/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole("heading", { name: /platforms/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole("heading", { name: /publisher/i })
    ).toBeInTheDocument()

    expect(screen.getByRole("heading", { name: /rating/i })).toBeInTheDocument()

    expect(screen.getByRole("heading", { name: /genres/i })).toBeInTheDocument()
  })
})
