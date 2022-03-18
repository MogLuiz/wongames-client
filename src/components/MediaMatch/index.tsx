// Packages
import styled, { css } from "styled-components"

// Types
import media, { DefaultBreakpoints } from "styled-media-query"

type breakpoint = keyof DefaultBreakpoints

export type MediaMatchProps = {
  lessThan?: breakpoint
  greaterThan?: breakpoint
}

export default styled.div<MediaMatchProps>`
  ${({ lessThan, greaterThan }) => css`
    display: none;
  `}
`
