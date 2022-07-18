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
  minimal?: boolean
  icon?: JSX.Element
  as?: React.ElementType
} & ButtonTypes

const Button: React.FC<ButtonProps> = ({
  children,
  size = "medium",
  minimal = false,
  icon,
  fullWidth = false,
  ...props
}) => (
  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  <S.Wrapper
    size={size}
    fullWidth={fullWidth}
    hasIcon={!!icon}
    minimal={minimal}
    {...props}
  >
    {icon}
    {!!children && <span>{children}</span>}
  </S.Wrapper>
)

export default Button
