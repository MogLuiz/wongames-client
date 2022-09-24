import "match-media-mock"

import { screen } from "@testing-library/react"
import { renderWithTheme } from "utils/tests/helpers"

import Wishlist from "."
import gamesMock from "components/GameCardSlider/mock"
import highlightMock from "components/Highlight/mock"

const props = {
  recommendedHighlight: highlightMock,
  recommendedGames: gamesMock
}

jest.mock("components/Showcase", () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Showcase" />
  }
}))
