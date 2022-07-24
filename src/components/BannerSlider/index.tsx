// Packages
import React from "react"

// Utils
import { settings } from "./utils"

// Components
import Slider from "../Slider"
import Banner, { BannerProps } from "components/Banner"

// Styles
import * as S from "./styles"

export type BannerSliderProps = {
  items: BannerProps[]
}

const BannerSlider = ({ items }: BannerSliderProps) => (
  <S.Wrapper>
    <Slider settings={settings}>
      {items.map((item: BannerProps) => (
        <Banner key={item.title} {...item} />
      ))}
    </Slider>
  </S.Wrapper>
)

export default BannerSlider
