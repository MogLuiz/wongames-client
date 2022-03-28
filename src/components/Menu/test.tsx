// Packages
import { screen } from "@testing-library/react"
import { renderWithTheme } from "utils/tests/helpers"

// Components
import Menu from "."

describe("<Menu />", () => {
  it("should render the menu", () => {
    renderWithTheme(<Menu />)

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/search/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/open shopping cart/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Won Games/i)).toBeInTheDocument()
  })

  it("should handle the open/close mobile menu", () => {
    renderWithTheme(<Menu />)

    // Selecionar o nosso MenuFull
    const fullMenuElement = screen.getByRole("navigation", { hidden: true })
    // Verificar se o menu tá escondido

    // Clicar no botão de abrir o menu e verificar se ele abriu

    // Clicar no botão de fechar o menu e verificar se ele fechou
  })
})
