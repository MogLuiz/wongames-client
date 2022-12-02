// Packages
import React from "react"

// Components
import GameCardSlider from "components/GameCardSlider"
import Heading from "components/Heading"
import Highlight, { HighlightProps } from "components/Highlight"
import { GameCardProps } from "components/GameCard"

// Styles
import * as S from "./styles"

export type ShowcaseProps = {
  title?: string
  highlight?: HighlightProps
  games?: GameCardProps[]
  color?: "black" | "white"
}

const Showcase = ({
  games,
  highlight,
  title,
  color = "white"
}: ShowcaseProps) => (
  <S.Wrapper>
    {!!title && (
      <Heading lineLeft lineColor="secondary">
        {title}
      </Heading>
    )}
    {!!highlight && <Highlight {...highlight} />}
    {!!games && <GameCardSlider items={games} color={color} />}
  </S.Wrapper>
)

export default Showcase
