// Packages
import "match-media-mock"
import { screen } from "@testing-library/react"

// Utils
import { renderWithTheme } from "utils/tests/helpers"

// Components
import Home from "."
import bannerMock from "components/BannerSlider/mock"
import gamesMock from "components/GameCardSlider/mock"
import highlightMock from "components/Highlight/mock"

const HomeTemplateProps = {
  banners: bannerMock,
  newGames: [gamesMock[0]],
  mostPopularHighlight: highlightMock,
  mostPopularGames: [gamesMock[0]],
  upcommingGames: [gamesMock[0]],
  upcommingHighlight: highlightMock,
  upcommingMoreGames: [gamesMock[0]],
  freeGames: [gamesMock[0]],
  freeHighlight: highlightMock
}

const factorySetupTest = () => {
  const utils = renderWithTheme(<Home {...HomeTemplateProps} />)

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

  it("should render section elements", () => {
    factorySetupTest()
    // banner
    expect(screen.getAllByText(/defy death 1/i)).toHaveLength(1)
    // card game ( 5 sections com 1 cards cada = 5x1 = 5)
    expect(screen.getAllByText(/population zero/i)).toHaveLength(5)
    // highlight
    expect(screen.getAllByText(/read dead is back!/i)).toHaveLength(3)
  })
})
