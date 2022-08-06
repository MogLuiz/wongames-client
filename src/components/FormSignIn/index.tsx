// Packages
import React from "react"
import Link from "next/link"

// Assets
import { Email, Lock } from "@styled-icons/material-outlined"

// Components
import TextField from "components/TextField"

// Styles
import * as S from "./styles"
import Button from "components/Button"

const FormSignIn = () => (
  <S.Wrapper>
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

    <S.FormLink>
      Ainda não tem uma conta?{" "}
      <Link href="/sign-up">
        <a>Cadastre-se</a>
      </Link>
    </S.FormLink>
  </S.Wrapper>
)

export default FormSignIn
