// Packages
import React, { forwardRef } from "react"

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

const Button: React.ForwardRefRenderFunction<S.WrapperProps, ButtonProps> = (
  {
    children,
    size = "medium",
    minimal = false,
    icon,
    fullWidth = false,
    ...props
  },
  ref
) => (
  <S.Wrapper
    size={size}
    fullWidth={fullWidth}
    hasIcon={!!icon}
    minimal={minimal}
    ref={ref}
    {...props}
  >
    {icon}
    {!!children && <span>{children}</span>}
  </S.Wrapper>
)

export default forwardRef(Button)
