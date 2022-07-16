// Packages
import React from "react"

// Components
import Menu from "components/Menu"
import Container from "components/Container"
import Footer from "components/Footer"

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

    <Container>
      <Footer />
    </Container>
  </section>
)

export default Home
