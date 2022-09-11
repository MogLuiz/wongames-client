// Packages
import React, { forwardRef } from "react"

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

const Slider: React.ForwardRefRenderFunction<SlickSlider, SliderProps> = (
  { children, settings },
  ref
) => (
  <S.Wrapper>
    <SlickSlider ref={ref} {...settings}>
      {children}
    </SlickSlider>
  </S.Wrapper>
)

export default forwardRef(Slider)
export type SliderSettingsType = SliderSettings
