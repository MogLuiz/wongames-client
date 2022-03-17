// Packages
import React from "react"

// Styles
import * as S from "./styles"

export type HeadingProps = {
  children: React.ReactNode
  color?: "white" | "black"
  lineLeft?: boolean
}

const Heading: React.FC<HeadingProps> = ({
  children,
  color = "white",
  lineLeft = false
}) => (
  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  <S.Wrapper color={color} lineLeft={lineLeft}>
    {children}
  </S.Wrapper>
)

export default Heading
