// Packages
import React from "react"

// Types
import { RibbonColors, RibbonSizes } from "./types"

// Styles
import * as S from "./styles"

export type RibbonProps = {
  children: React.ReactNode
  color?: RibbonColors
  size?: RibbonSizes
}

const Ribbon = ({
  children,
  color = "primary",
  size = "normal"
}: RibbonProps) => (
  <S.Wrapper color={color} size={size}>
    {children}
  </S.Wrapper>
)

export default Ribbon
