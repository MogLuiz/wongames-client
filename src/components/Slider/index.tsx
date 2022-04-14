// Packages
import React from "react"

// Components
import SlickSlider, { Settings } from "react-slick"

// Styles
import * as S from "./styles"

export type SliderSettings = Settings

export type SliderProps = {
  children: React.ReactNode
  settings: SliderSettings
}

const Slider: React.FC<SliderProps> = ({ children, settings }) => (
  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  <S.Wrapper>
    <SlickSlider {...settings}>{children}</SlickSlider>
  </S.Wrapper>
)

export default Slider
