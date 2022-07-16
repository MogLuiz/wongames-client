// Packages
import { screen } from "@testing-library/react"

// Utils
import { renderWithTheme } from "utils/tests/helpers"

// Components
import Home from "."

describe("<Home />", () => {
  it("should render the Menu and Footer", () => {
    renderWithTheme(<Home />)

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()
    expect(
      screen.getByRole("heading", { name: /Contato/i })
    ).toBeInTheDocument()
  })

  it("should render the sections", () => {
    renderWithTheme(<Home />)

    expect(
      screen.getByRole("heading", { name: /New Releases/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole("heading", { name: /Most Popular/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole("heading", { name: /Upcomming/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole("heading", { name: /Free Games/i })
    ).toBeInTheDocument()
  })
})
