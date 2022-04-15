// Packages
import React from "react"

// Components
import Slider from "../Slider"
import Banner, { BannerProps } from "components/Banner"

// Styles
import * as S from "./styles"

export type BannerSliderProps = {
  items: BannerProps[]
}

const settings = {}

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
