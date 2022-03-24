// Packages
import React from "react"

// Styles
import * as S from "./styles"

export type ButtonProps = {
  children?: React.ReactNode
  size?: "small" | "medium" | "large"
}

const Button: React.FC<ButtonProps> = ({ children, size = "medium" }) => (
  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  <S.Wrapper size={size}>{!!children && <span>{children}</span>}</S.Wrapper>
)

export default Button
