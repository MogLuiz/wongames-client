// Packages
import { useState } from "react"

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

const Gallery = ({ items }: GalleryProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <S.Wrapper>
      <Slider settings={settings}>
        {items.map(({ label, src }) => (
          <img
            role="button"
            key={`thumb-${label}`}
            src={src}
            alt={`Thumb - ${label}`}
            onClick={() => {
              setIsOpen(true)
            }}
          />
        ))}
      </Slider>

      <S.Modal
        isOpen={isOpen}
        aria-label="modal"
        aria-hidden={!isOpen}
      ></S.Modal>
    </S.Wrapper>
  )
}

export default Gallery
