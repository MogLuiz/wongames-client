// Packages
import { screen } from "@testing-library/react"

// Utils
import { renderWithTheme } from "utils/tests/helpers"

// Components
import Home from "."

const factorySetupTest = () => {
  const utils = renderWithTheme(<Home />)

  const releaseSection = screen.getByRole("heading", { name: /New Releases/i })
  const popularSection = screen.getByRole("heading", { name: /Most Popular/i })
  const upcommingSection = screen.getByRole("heading", { name: /Upcomming/i })
  const freeSection = screen.getByRole("heading", { name: /Free Games/i })

  return {
    ...utils,
    freeSection,
    releaseSection,
    popularSection,
    upcommingSection
  }
}

describe("<Home />", () => {
  it("should render the Menu and Footer", () => {
    factorySetupTest()

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()
    expect(
      screen.getByRole("heading", { name: /Contato/i })
    ).toBeInTheDocument()
  })

  it("should render the sections", () => {
    const { freeSection, popularSection, releaseSection, upcommingSection } =
      factorySetupTest()

    expect(freeSection).toBeInTheDocument()
    expect(popularSection).toBeInTheDocument()
    expect(releaseSection).toBeInTheDocument()
    expect(upcommingSection).toBeInTheDocument()
  })
})
