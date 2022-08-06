// Packages
import { screen } from "@testing-library/react"
import { renderWithTheme } from "utils/tests/helpers"

// Components
import FormSignIn from "."

const factorySetupTestHelper = () => {
  const utils = renderWithTheme(<FormSignIn />)

  const emailFormInput = screen.getByPlaceholderText(/email/i)
  const passwordFormInput = screen.getByPlaceholderText(/password/i)
  const buttonSignInForm = screen.getByRole("button", { name: /Entrar/i })
  const signUpFormLink = screen.getByRole("link", { name: /Cadastre-se/i })
  const forgotPasswordFormLink = screen.getByRole("link", {
    name: /Esqueceu sua senha\?/i
  })

  return {
    ...utils,
    emailFormInput,
    buttonSignInForm,
    passwordFormInput,
    signUpFormLink,
    forgotPasswordFormLink
  }
}

describe("<FormSignIn />", () => {
  it("should render the form", () => {
    const { emailFormInput, passwordFormInput, buttonSignInForm, container } =
      factorySetupTestHelper()

    expect(emailFormInput).toBeInTheDocument()
    expect(passwordFormInput).toBeInTheDocument()
    expect(buttonSignInForm).toBeInTheDocument()

    expect(container.parentElement).toMatchSnapshot()
  })

  it("should render the forgot password link", () => {
    const { forgotPasswordFormLink } = factorySetupTestHelper()

    expect(forgotPasswordFormLink).toBeInTheDocument()
  })

  it("should render text to sign up if already have an account", () => {
    const { signUpFormLink } = factorySetupTestHelper()

    expect(signUpFormLink).toBeInTheDocument()
    expect(screen.getByText(/Ainda não tem uma conta\?/i)).toBeInTheDocument()
  })
})
