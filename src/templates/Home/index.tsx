// Packages
import React from "react"

// Components
import Menu from "components/Menu"
import Container from "components/Container"
import Footer from "components/Footer"
import Heading from "components/Heading"

// Styles
import * as S from "./styles"

const Home = ({ heading }: any) => (
  <section>
    <Container>
      <Menu />
    </Container>

    <Container>
      <Heading lineLeft lineColor="secondary" color="black">
        New Releases
      </Heading>
    </Container>

    <Container>
      <Heading lineLeft lineColor="secondary">
        Most Popular
      </Heading>
    </Container>

    <Container>
      <Heading lineLeft lineColor="secondary">
        Upcomming
      </Heading>
    </Container>

    <Container>
      <Heading lineLeft lineColor="secondary">
        Free Games
      </Heading>
    </Container>

    <Container>
      <Footer />
    </Container>
  </section>
)

export default Home