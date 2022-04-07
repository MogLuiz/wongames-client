// Packages
import React from "react"

// Components
import Button from "components/Button"

// Styles
import * as S from "./styles"

export type HighlightProps = {
  title: string
  subtitle: string
  buttonLabel: string
  buttonLink: string
  backgroundImage: string
}

const Highlight: React.FC<HighlightProps> = ({
  title,
  subtitle,
  buttonLabel,
  buttonLink,
  backgroundImage
}) => (
  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  <S.Wrapper backgroundImage={backgroundImage}>
    <S.Content>
      <S.Title>{title}</S.Title>
      <S.Subtitle>{subtitle}</S.Subtitle>
      <Button as="a" href={buttonLink}>
        {buttonLabel}
      </Button>
    </S.Content>
  </S.Wrapper>
)

export default Highlight
