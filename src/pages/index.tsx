// Template
import Home, { HomeTemplateProps } from "templates/Home"

// Components
import bannersMock from "components/BannerSlider/mock"
import gamesMock from "components/GameCardSlider/mock"
import highlightMock from "components/Highlight/mock"

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

export async function getStaticProps() {
  return {
    props: {
      banners: bannersMock,
      newGames: gamesMock,
      mostPopularHighlight: highlightMock,
      mostPopularGames: gamesMock,
      upcommingGames: gamesMock,
      upcommingHighlight: highlightMock,
      upcommingMoreGames: gamesMock,
      freeGames: gamesMock,
      freeHighlight: highlightMock
    }
  }
}
