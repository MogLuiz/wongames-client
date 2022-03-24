// Packages
import styled, { css } from "styled-components"

// Types
import { ButtonProps } from "."

type WrapperProps = Pick<ButtonProps, "size">

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, size }) => css`
    background: linear-gradient(180deg, #ff5f5f 0%, #f062c0 50%);
    color: ${theme.colors.white};

    border: 0;
    border-radius: ${theme.border.radius};

    padding: ${theme.spacings.xxsmall};
  `}
`
