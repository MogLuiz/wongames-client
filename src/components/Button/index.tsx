// Packages
import React from "react"

// Styles
import * as S from "./styles"

export type ButtonProps = {
  children?: React.ReactNode
  size?: "small" | "medium" | "large"
  fullWidth?: boolean
  icon?: JSX.Element
  onClick?: () => (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Button: React.FC<ButtonProps> = ({
  children,
  size = "medium",
  icon,
  fullWidth = false,
  ...props
}) => (
  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  <S.Wrapper size={size} fullWidth={fullWidth} hasIcon={!!icon} {...props}>
    {icon}
    {!!children && <span>{children}</span>}
  </S.Wrapper>
)

export default Button
