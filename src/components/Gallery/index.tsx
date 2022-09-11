// Packages
import React from "react"

// Utils
import { settings } from "./utils"

// Components
import Slider from "components/Slider"

// Styles
import * as S from "./styles"

export type GalleryImageProps = {
  src: string
  label: string
}

export type GalleryProps = {
  items: Array<GalleryImageProps>
}

const Gallery = ({ items }: GalleryProps) => (
  <S.Wrapper>
    <Slider settings={settings}>
      {items.map(({ label, src }) => (
        <img
          role="button"
          key={`thumb-${label}`}
          src={src}
          alt={`Thumb - ${label}`}
        />
      ))}
    </Slider>
  </S.Wrapper>
)

export default Gallery
