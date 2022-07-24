// Packages
import React from "react"

// Utils
import { settings } from "./utils"

// Components
import GameCard, { GameCardProps } from "components/GameCard"
import Slider from "components/Slider"

// Styles
import * as S from "./styles"

export type GameCardSliderProps = {
  items: GameCardProps[]
  color?: "white" | "black"
}

const GameCardSlider = ({ items, color = "black" }: GameCardSliderProps) => (
  <S.Wrapper color={color}>
    <Slider settings={settings}>
      {items.map((item, index) => (
        <GameCard key={index} {...item} />
      ))}
    </Slider>
  </S.Wrapper>
)

export default GameCardSlider
