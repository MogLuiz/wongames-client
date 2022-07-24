// Packages
import React from "react"

// Styles
import * as S from "./styles"

export type LineColors = "primary" | "secondary"

export type HeadingProps = {
  children: React.ReactNode
  color?: "white" | "black"
  lineLeft?: boolean
  lineBottom?: boolean
  lineColor?: LineColors
  size?: "small" | "medium"
}

const Heading = ({
  children,
  color = "white",
  size = "medium",
  lineLeft = false,
  lineColor = "primary",
  lineBottom = false
}: HeadingProps) => (
  <S.Wrapper
    color={color}
    lineLeft={lineLeft}
    lineBottom={lineBottom}
    lineColor={lineColor}
    size={size}
  >
    {children}
  </S.Wrapper>
)

export default Heading
