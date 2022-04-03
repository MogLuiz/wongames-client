// Packages
import React from "react"

// Styles
import * as S from "./styles"

export type RibbonProps = {
  children: React.ReactNode
}

const Ribbon: React.FC<RibbonProps> = ({ children }) => (
  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  <S.Wrapper>{children}</S.Wrapper>
)

export default Ribbon
