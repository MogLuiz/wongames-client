// Packages
import React from "react"

// Types
import { ButtonTypes } from "./types"

// Styles
import * as S from "./styles"

export type ButtonProps = {
  size?: "small" | "medium" | "large"
  minimal?: boolean
  fullWidth?: boolean
  icon?: JSX.Element
  as?: React.ElementType
} & ButtonTypes

const Button = ({
  children,
  size = "medium",
  minimal = false,
  icon,
  fullWidth = false,
  ...props
}: ButtonProps) => (
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
