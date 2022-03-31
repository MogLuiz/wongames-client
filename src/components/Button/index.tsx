// Packages
import React, { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react"

// Styles
import * as S from "./styles"

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  size?: "small" | "medium" | "large"
  fullWidth?: boolean
  icon?: JSX.Element
  as?: React.ElementType
} & ButtonTypes

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
