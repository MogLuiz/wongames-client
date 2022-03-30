// Packages
import { screen } from "@testing-library/react"
import { renderWithTheme } from "utils/tests/helpers"

// Components
import Footer from "."

describe("<Footer />", () => {
  it("should render the 4 columns topics", () => {
    renderWithTheme(<Footer />)

    expect(
      screen.getByRole("heading", { name: /Contato/i })
    ).toBeInTheDocument()

    expect(screen.getByRole("heading", { name: /Redes/i })).toBeInTheDocument()

    expect(screen.getByRole("heading", { name: /Links/i })).toBeInTheDocument()

    expect(
      screen.getByRole("heading", { name: /Localização/i })
    ).toBeInTheDocument()
  })
})
