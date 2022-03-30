// Packages
import { fireEvent, screen } from "@testing-library/react"

// Utils
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
    expect(fullMenuElement.getAttribute("aria-hidden")).toBe("true")
    expect(fullMenuElement).toHaveStyle({ opacity: 0 })

    // Clicar no botão de abrir o menu e verificar se ele abriu
    fireEvent.click(screen.getByLabelText(/open menu/i))
    expect(fullMenuElement.getAttribute("aria-hidden")).toBe("false")
    expect(fullMenuElement).toHaveStyle({ opacity: 1 })

    // Clicar no botão de fechar o menu e verificar se ele fechou
    fireEvent.click(screen.getByLabelText(/Close Menu/i))
    expect(fullMenuElement.getAttribute("aria-hidden")).toBe("true")
    expect(fullMenuElement).toHaveStyle({ opacity: 0 })
  })

  it("should show register box when logged out", () => {
    renderWithTheme(<Menu />)

    expect(screen.queryByText(/minha conta/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/lista de desejos/i)).not.toBeInTheDocument()
    expect(screen.getByText(/entrar/i)).toBeInTheDocument()
    expect(screen.getByText(/crie sua conta/i)).toBeInTheDocument()
  })

  it("should show wishlist and account when logged in", () => {
    renderWithTheme(<Menu userName="Luiz" />)

    expect(screen.getByText(/minha conta/i)).toBeInTheDocument()
    expect(screen.getByText(/lista de desejos/i)).toBeInTheDocument()
    expect(screen.queryByText(/entrar/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/crie sua conta/i)).not.toBeInTheDocument()
  })
})
