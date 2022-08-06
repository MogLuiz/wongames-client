// Packages
import { screen } from "@testing-library/react"
import { renderWithTheme } from "utils/tests/helpers"

// Components
import FormSignUp from "."

const factorySetupTestHelper = () => {
  const utils = renderWithTheme(<FormSignUp />)

  const nameFormInput = screen.getByPlaceholderText(/Nome completo/i)
  const emailFormInput = screen.getByPlaceholderText(/email/i)
  const passwordFormInput = screen.getByPlaceholderText("Senha")
  const confirmPasswordFormInput =
    screen.getByPlaceholderText("Confirmar senha")
  const signUpFormButton = screen.getByRole("button", { name: /criar conta/i })
  const signInFormLink = screen.getByRole("link", { name: /entrar/i })
  const haveAccountFormLink = screen.getByText(/Já tem uma conta\?/i)

  return {
    ...utils,
    nameFormInput,
    emailFormInput,
    passwordFormInput,
    confirmPasswordFormInput,
    signUpFormButton,
    signInFormLink,
    haveAccountFormLink
  }
}

describe("<FormSignUp />", () => {
  it("should render the form", () => {
    const {
      container,
      nameFormInput,
      emailFormInput,
      passwordFormInput,
      confirmPasswordFormInput,
      signUpFormButton
    } = factorySetupTestHelper()

    expect(nameFormInput).toBeInTheDocument()
    expect(emailFormInput).toBeInTheDocument()
    expect(passwordFormInput).toBeInTheDocument()
    expect(confirmPasswordFormInput).toBeInTheDocument()
    expect(signUpFormButton).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it("should render text and link to sign in", () => {
    const { signInFormLink, haveAccountFormLink } = factorySetupTestHelper()

    expect(signInFormLink).toBeInTheDocument()
    expect(haveAccountFormLink).toBeInTheDocument()
  })
})
