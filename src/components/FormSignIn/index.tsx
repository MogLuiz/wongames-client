// Packages
import React from "react"
import Link from "next/link"

// Assets
import { Email, Lock } from "@styled-icons/material-outlined"

// Components
import TextField from "components/TextField"
import Button from "components/Button"

// Styles
import * as S from "./styles"
import { FormLink, FormWrapper } from "components/Form"

const FormSignIn = () => (
  <FormWrapper>
    <form>
      <TextField
        name="email"
        placeholder="Email"
        type="email"
        icon={<Email />}
      />

      <TextField
        name="password"
        placeholder="Password"
        type="password"
        icon={<Lock />}
      />
    </form>

    <S.ForgotPassword href="#">Esqueceu sua senha?</S.ForgotPassword>

    <Button size="large" fullWidth>
      Entrar
    </Button>

    <FormLink>
      Ainda não tem uma conta?{" "}
      <Link href="/sign-up">
        <a>Cadastre-se</a>
      </Link>
    </FormLink>
  </FormWrapper>
)

export default FormSignIn
