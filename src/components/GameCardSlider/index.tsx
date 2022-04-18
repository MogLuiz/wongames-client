// Packages
import React from "react"

// Components
import GameCard, { GameCardProps } from "components/GameCard"
import Slider, { SliderSettings } from "components/Slider"

// Styles
import * as S from "./styles"

type GameCardSliderProps = {
  items: GameCardProps[]
  color?: "white" | "black"
}

const settings: SliderSettings = {}

const GameCardSlider: React.FC<GameCardSliderProps> = ({
  items,
  color = "black"
}) => (
  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  <S.Wrapper color={color}>
    <Slider settings={settings}>
      {items.map((item, index) => (
        <GameCard key={index} {...item} />
      ))}
    </Slider>
  </S.Wrapper>
)

export default GameCardSlider
