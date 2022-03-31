// Packages
import React from "react"

// Styles
import * as S from "./styles"

export type BannerProps = {
  img: string
  title: string
  subtitle: string
  buttonLabel: string
  buttonLink: string
}

const Banner: React.FC<BannerProps> = ({
  buttonLabel,
  buttonLink,
  img,
  subtitle,
  title
}) => (
  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  <S.Wrapper>
    <h1>Banner</h1>
  </S.Wrapper>
)

export default Banner
