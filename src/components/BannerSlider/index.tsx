// Packages
import React from "react"

// Components
import Slider, { SliderSettings } from "../Slider"
import Banner, { BannerProps } from "components/Banner"

// Styles
import * as S from "./styles"

export type BannerSliderProps = {
  items: BannerProps[]
}

const settings: SliderSettings = {
  dots: true,
  arrows: false,
  vertical: true,
  verticalSwiping: true,
  infinite: false,
  responsive: [
    {
      breakpoint: 1170,
      settings: {
        vertical: false,
        verticalSwiping: false
      }
    }
  ]
}

const BannerSlider: React.FC<BannerSliderProps> = ({ items }) => (
  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  <S.Wrapper>
    <Slider settings={settings}>
      {items.map((item: BannerProps) => (
        <Banner key={item.title} {...item} />
      ))}
    </Slider>
  </S.Wrapper>
)

export default BannerSlider
