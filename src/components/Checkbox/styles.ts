// Packages
import styled, { css } from "styled-components"
import { CheckboxProps } from "."

type LabelProps = Pick<CheckboxProps, "labelColor">

export const Wrapper = styled.main``

export const Label = styled.label<LabelProps>`
  ${({ theme, labelColor }) => css`
    color: ${theme.colors[labelColor!]};
  `}
`
