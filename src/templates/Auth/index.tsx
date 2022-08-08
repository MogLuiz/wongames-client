// Packages
import React from "react"
import Link from "next/link"

// Components
import Logo from "components/Logo"
import Heading from "components/Heading"

// Styles
import * as S from "./styles"

type AuthProps = {
  title: string
  children: React.ReactNode
}

const Auth = ({ children, title }: AuthProps) => (
  <S.Wrapper>
    <S.BannerBlock>
      <S.BannerContent>
        <Link href="/">
          <a>
            <Logo id="banner" />
          </a>
        </Link>

        <div>
          <Heading size="huge">Seus jogos favoritos em um só lugar</Heading>
          <S.Subtitle>
            A <strong>WON</strong> é a melhor e mais completa plataforma de
            games.
          </S.Subtitle>
        </div>

        <S.Footer>Won Games 2022 © Todos os Direitos Reservados</S.Footer>
      </S.BannerContent>
    </S.BannerBlock>

    <S.Content>
      <S.ContentWrapper>
        <Link href="/">
          <a>
            <Logo size="large" color="black" id="content" />
          </a>
        </Link>

        <Heading color="black" lineColor="secondary" lineLeft>
          {title}
        </Heading>

        {children}
      </S.ContentWrapper>
    </S.Content>
  </S.Wrapper>
)

export default Auth
