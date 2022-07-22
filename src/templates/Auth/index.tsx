// Packages
import React from "react"

import Logo from "components/Logo"
import Heading from "components/Heading"

// Styles
import * as S from "./styles"

const Auth = () => (
  <S.Wrapper>
    <S.BannerBlock>
      <Logo />

      <Heading>Seus jogos favoritos em um só lugar</Heading>
      <S.Subtitle>
        A <strong>WON</strong> é a melhor e mais completa plataforma de games.
      </S.Subtitle>

      <S.Footer>Won Games 2022 © Todos os Direitos Reservados</S.Footer>
    </S.BannerBlock>
  </S.Wrapper>
)

export default Auth
