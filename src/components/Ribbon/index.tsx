// Packages
import React from "react"

// Styles
import * as S from "./styles"

export type RibbonColors = "primary" | "secondary"
export type RibbonSizes = "normal" | "small"

export type RibbonProps = {
  children: React.ReactNode
  color?: RibbonColors
  size?: RibbonSizes
}

const Ribbon: React.FC<RibbonProps> = ({
  children,
  color = "primary",
  size = "normal"
}) => (
  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  <S.Wrapper color={color} size={size}>
    {children}
  </S.Wrapper>
)

export default Ribbon
