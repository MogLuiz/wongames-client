// Packages
import React from "react"

// Styles
import * as S from "./styles"

export type HeadingProps = {
  children: React.ReactNode
  color?: "white" | "black"
  lineLeft?: boolean
  lineBottom?: boolean
  size?: "small" | "medium"
}

const Heading: React.FC<HeadingProps> = ({
  children,
  color = "white",
  size = "medium",
  lineLeft = false,
  lineBottom = false
}) => (
  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  <S.Wrapper
    color={color}
    lineLeft={lineLeft}
    lineBottom={lineBottom}
    size={size}
  >
    {children}
  </S.Wrapper>
)

export default Heading
