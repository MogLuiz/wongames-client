// Packages
import React from "react"

// Styles
import * as S from "./styles"

export type RibbonColors = "primary" | "secondary"

export type RibbonProps = {
  children: React.ReactNode
  color?: RibbonColors
}

const Ribbon: React.FC<RibbonProps> = ({ children, color = "primary" }) => (
  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  <S.Wrapper color={color}>{children}</S.Wrapper>
)

export default Ribbon
