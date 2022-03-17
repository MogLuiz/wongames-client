// Packages
import React from "react"

// Styles
import * as S from "./styles"

export type HeadingProps = {
  children: React.ReactNode
}

const Heading: React.FC<HeadingProps> = ({ children }) => (
  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  <S.Wrapper>{children}</S.Wrapper>
)

export default Heading
