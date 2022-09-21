import { screen } from "@testing-library/react"

import galleryMock from "components/Gallery/mock"
import gameInfoMock from "components/GameInfo/mock"
import gameDetailsMock from "components/GameDetails/mock"
import gamesMock from "components/GameCardSlider/mock"
import highlightMock from "components/Highlight/mock"

import Game, { GameTemplateProps } from "."
import { GameDetailsProps } from "components/GameDetails"
import { renderWithTheme } from "utils/tests/helpers"

const props: GameTemplateProps = {
  cover: "bg-image.jpg",
  gameInfo: gameInfoMock,
  gallery: galleryMock,
  description: `<h1>Custom HTML</h1>`,
  details: gameDetailsMock as GameDetailsProps,
  upcomingGames: gamesMock,
  upcomingHighlight: highlightMock,
  recommendedGames: gamesMock
}

jest.mock("components/Menu", () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Menu" />
  }
}))

jest.mock("components/Gallery", () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Gallery" />
  }
}))

jest.mock("components/GameDetails", () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock GameDetails" />
  }
}))

jest.mock("components/GameInfo", () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock GameInfo" />
  }
}))

jest.mock("components/Showcase", () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Showcase" />
  }
}))
