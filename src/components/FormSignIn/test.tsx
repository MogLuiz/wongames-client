// Packages
import { screen } from "@testing-library/react"
import { renderWithTheme } from "utils/tests/helpers"

// Components
import FormSignIn from "."

describe("<FormSignIn />", () => {
  it("should render the form", () => {
    renderWithTheme(<FormSignIn />)

    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument()
    expect(screen.getByRole("button", { name: /Entrar/i })).toBeInTheDocument()
  })

  it("should render the forgot password link", () => {
    renderWithTheme(<FormSignIn />)

    expect(
      screen.getByRole("link", { name: /Esqueceu sua senha\?/i })
    ).toBeInTheDocument()
  })
})
