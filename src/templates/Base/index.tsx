// Packages
import React from "react"

// Components
import Container from "components/Container"
import Menu from "components/Menu"
import Footer from "components/Footer"

// Styles
import * as S from "./styles"

export type BaseTemplateProps = {
  children: React.ReactNode
}

const Base = ({ children }: BaseTemplateProps) => (
  <section>
    <Container>
      <Menu />
    </Container>

    {children}

    <S.SectionFooter>
      <Container>
        <Footer />
      </Container>
    </S.SectionFooter>
  </section>
)

export default Base
