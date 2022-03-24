// Packages
import React from "react"

// Styles
import * as S from "./styles"

export type ButtonProps = {
  children?: React.ReactNode
  size?: "small" | "medium" | "large"
  fullWidth?: boolean
  icon?: JSX.Element
}

const Button: React.FC<ButtonProps> = ({
  children,
  size = "medium",
  icon,
  fullWidth = false
}) => (
  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  <S.Wrapper size={size} fullWidth={fullWidth} hasIcon={!!icon}>
    {icon}
    {!!children && <span>{children}</span>}
  </S.Wrapper>
)

export default Button
