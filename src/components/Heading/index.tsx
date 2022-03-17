// Packages
import React from "react"

// Styles
import * as S from "./styles"

export type HeadingProps = {
  children: React.ReactNode
  color?: "white" | "black"
}

const Heading: React.FC<HeadingProps> = ({ children, color = "white" }) => (
  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  <S.Wrapper color={color}>{children}</S.Wrapper>
)

export default Heading
