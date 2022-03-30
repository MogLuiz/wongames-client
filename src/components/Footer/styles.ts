// Packages
import styled, { css } from "styled-components"

// Styles
import * as HeadingStyles from "components/Heading/styles"

export const Wrapper = styled.footer`
  ${HeadingStyles.Wrapper} {
    text-transform: uppercase;
  }
`

export const Content = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: ${theme.grid.gutter};

    margin-top: ${theme.spacings.medium};
  `}
`

export const Column = styled.div`
  ${({ theme }) => css`
    a,
    span {
      display: block;

      color: ${theme.colors.gray};

      text-decoration: none;

      margin-bottom: ${theme.spacings.xxsmall};
      font-size: ${theme.font.sizes.small};
    }
    a: hover {
      text-decoration: underline;
    }
  `}
`

export const Copyright = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.gray};

    font-size: ${theme.font.sizes.xsmall};
    margin-top: ${theme.spacings.large};
    margin-bottom: ${theme.spacings.medium};

    text-align: center;
  `}
`
