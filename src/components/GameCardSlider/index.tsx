// Packages
import React from "react"

// Components
import GameCard, { GameCardProps } from "components/GameCard"
import Slider, { SliderSettings } from "components/Slider"
import { ArrowBackIos as ArrowLeft } from "@styled-icons/material-outlined/ArrowBackIos"
import { ArrowForwardIos as ArrowRight } from "@styled-icons/material-outlined/ArrowForwardIos"

// Styles
import * as S from "./styles"

type GameCardSliderProps = {
  items: GameCardProps[]
  color?: "white" | "black"
}

const settings: SliderSettings = {
  prevArrow: <ArrowLeft aria-label="previous games" />,
  nextArrow: <ArrowRight aria-label="next games" />
}

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
