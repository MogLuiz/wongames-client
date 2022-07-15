// Packages
import React from "react"

// Components
import Menu from "components/Menu"
import Container from "components/Container"

// Styles
import * as S from "./styles"

const Home: React.FC = () => (
  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  <section>
    <Container>
      <Menu />
    </Container>
  </section>
)

export default Home
