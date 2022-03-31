// Packages
import React from "react"

// Components
import { Button } from "components"

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
    <S.Image src={img} role="img" aria-label={title} />

    <S.Caption>
      <S.Title>{title}</S.Title>
      <S.Subtitle dangerouslySetInnerHTML={{ __html: subtitle }} />
      <Button as="a" href={buttonLink} size="large">
        {buttonLabel}
      </Button>
    </S.Caption>
  </S.Wrapper>
)

export default Banner
