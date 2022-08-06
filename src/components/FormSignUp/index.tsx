import Link from "next/link"
import { AccountCircle, Email, Lock } from "@styled-icons/material-outlined"

import Button from "components/Button"
import TextField from "components/TextField"

import * as S from "./styles"

const FormSignUp = () => (
  <S.Wrapper>
    <form>
      <TextField
        name="name"
        placeholder="Nome completo"
        type="name"
        icon={<AccountCircle />}
      />
      <TextField
        name="email"
        placeholder="Email"
        type="email"
        icon={<Email />}
      />
      <TextField
        name="password"
        placeholder="Senha"
        type="password"
        icon={<Lock />}
      />
      <TextField
        name="confirm-password"
        placeholder="Confirmar senha"
        type="password"
        icon={<Lock />}
      />

      <Button size="large" fullWidth>
        Criar conta
      </Button>

      <S.FormLink>
        Já tem uma conta?{" "}
        <Link href="/sign-in">
          <a>Entrar</a>
        </Link>
      </S.FormLink>
    </form>
  </S.Wrapper>
)

export default FormSignUp
