// Packages
import React from "react"

// Templates
import Base from "templates/Base"

// Components
import Container from "components/Container"
import BannerSlider from "components/BannerSlider"
import Showcase from "components/Showcase"

// Types
import { BannerProps } from "components/Banner"
import { GameCardProps } from "components/GameCard"
import { HighlightProps } from "components/Highlight"

// Styles
import * as S from "./styles"

export type HomeTemplateProps = {
  banners: BannerProps[]
  newGames: GameCardProps[]
  mostPopularHighlight: HighlightProps
  mostPopularGames: GameCardProps[]
  upcommingGames: GameCardProps[]
  upcommingHighlight: HighlightProps
  freeHighlight: HighlightProps
  freeGames: GameCardProps[]
}

const Home = ({
  banners,
  newGames,
  mostPopularHighlight,
  mostPopularGames,
  upcommingGames,
  upcommingHighlight,
  freeGames,
  freeHighlight
}: HomeTemplateProps) => (
  <Base>
    <Container>
      <S.SectionBanner>
        <BannerSlider items={banners} />
      </S.SectionBanner>
    </Container>

    <S.SectionNews>
      <Showcase title="News" games={newGames} color="black" />
    </S.SectionNews>

    <Showcase
      title="Most Popular"
      highlight={mostPopularHighlight}
      games={mostPopularGames}
    />

    <Showcase
      title="Upcoming"
      games={upcommingGames}
      highlight={upcommingHighlight}
    />

    <Showcase title="Free games" highlight={freeHighlight} games={freeGames} />
  </Base>
)

export default Home
