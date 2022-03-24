// Packages
import React from "react"

// Styles
import * as S from "./styles"

export type ButtonProps = {
  children?: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({ children }) => (
  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  <S.Wrapper>{!!children && <span>{children}</span>}</S.Wrapper>
)

export default Button
