// Packages
import { useState, useEffect } from "react"

// Assets
import { Close } from "@styled-icons/material-outlined/Close"

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

  useEffect(() => {
    const handleKeyUp = ({ key }: KeyboardEvent) => {
      key === "Escape" && setIsOpen(false)
    }

    window.addEventListener("keyup", handleKeyUp)
    return () => window.removeEventListener("keyup", handleKeyUp)
  }, [])

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

      <S.Modal isOpen={isOpen} aria-label="modal" aria-hidden={!isOpen}>
        <S.Close
          role="button"
          aria-label="close modal"
          onClick={() => setIsOpen(false)}
        >
          <Close size={40} />
        </S.Close>
      </S.Modal>
    </S.Wrapper>
  )
}

export default Gallery
