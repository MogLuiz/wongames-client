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
  newGamesSectionTitle: string
  mostPopularHighlight: HighlightProps
  mostPopularSectionTitle: string
  mostPopularGames: GameCardProps[]
  upcommingGames: GameCardProps[]
  upcommingGamesSectionTitle: string
  upcommingHighlight: HighlightProps
  freeHighlight: HighlightProps
  freeGames: GameCardProps[]
  freeGamesSectionTitle: string
}

const Home = ({
  banners,
  newGames,
  newGamesSectionTitle,
  mostPopularHighlight,
  mostPopularSectionTitle,
  mostPopularGames,
  upcommingGames,
  upcommingGamesSectionTitle,
  upcommingHighlight,
  freeGames,
  freeGamesSectionTitle,
  freeHighlight
}: HomeTemplateProps) => (
  <Base>
    <Container>
      <S.SectionBanner>
        <BannerSlider items={banners} />
      </S.SectionBanner>
    </Container>

    <S.SectionNews>
      <Showcase title={newGamesSectionTitle} games={newGames} color="black" />
    </S.SectionNews>

    <Showcase
      title={mostPopularSectionTitle}
      highlight={mostPopularHighlight}
      games={mostPopularGames}
    />

    <Showcase
      title={upcommingGamesSectionTitle}
      games={upcommingGames}
      highlight={upcommingHighlight}
    />

    <Showcase
      title={freeGamesSectionTitle}
      highlight={freeHighlight}
      games={freeGames}
    />
  </Base>
)

export default Home
