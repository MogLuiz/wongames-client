// Packages
import React from "react"
import { render, RenderResult } from "@testing-library/react"

// Theme
import theme from "styles/theme"

// Theme Provider
import { ThemeProvider } from "styled-components"

export const renderWithTheme = (children: React.ReactNode): RenderResult =>
  render(<ThemeProvider theme={theme}>{children}</ThemeProvider>)

