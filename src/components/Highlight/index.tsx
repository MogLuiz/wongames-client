// Packages
import React from "react"

// Styles
import * as S from "./styles"

type HighlightProps = {
  title: string
  subtitle: string
}

const Highlight: React.FC<HighlightProps> = ({ title, subtitle }) => (
  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  <S.Wrapper>
    <S.Title>{title}</S.Title>
    <S.Subtitle>{subtitle}</S.Subtitle>
  </S.Wrapper>
)

export default Highlight
