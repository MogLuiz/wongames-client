// Packages
import React from "react"

// Components
import SlickSlider from "react-slick"

// Types
import { SliderSettings } from "./types"

// Styles
import * as S from "./styles"

export type SliderProps = {
  children: React.ReactNode
  settings: SliderSettings
}

const Slider = ({ children, settings }: SliderProps) => (
  <S.Wrapper>
    <SlickSlider {...settings}>{children}</SlickSlider>
  </S.Wrapper>
)

export default Slider
export type SliderSettingsType = SliderSettings
