// Packages
import React from "react"

// Components
import Container from "components/Container"
import Menu from "components/Menu"

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
  </section>
)

export default Base
