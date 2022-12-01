/* eslint-disable react-hooks/rules-of-hooks */
import Home, { HomeTemplateProps } from "templates/Home"

import { QUERY_HOME } from "graphql/queries/home"
import { initializeApollo } from "services/apollo"
import { QueryHome, QueryHome_banners } from "graphql/generated/QueryHome"

import highlightMock from "components/Highlight/mock"
import gamesMock from "components/GameCardSlider/mock"
import { useNewGamesDataFactory } from "hooks/domain/home/useNewGamesDataFactory"

const bannerDataFactory = ({
  button,
  image,
  ribbon,
  subtitle,
  title
}: QueryHome_banners) => ({
  img: `http://localhost:1337${image?.url}`,
  title: title,
  subtitle: subtitle,
  buttonLabel: button?.label,
  buttonLink: button?.link,
  ...(ribbon && {
    ribbon: ribbon.text,
    ribbonColor: ribbon.color,
    ribbonSize: ribbon.size
  })
})

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()
  const {
    data: { banners, newGames }
  } = await apolloClient.query<QueryHome>({ query: QUERY_HOME })

  const { newGamesFactoryComposition } = useNewGamesDataFactory(newGames)
  const bannersFactoryComposition = banners.map(bannerDataFactory)

  return {
    props: {
      revalidate: 10,
      banners: bannersFactoryComposition,
      newGames: newGamesFactoryComposition,
      mostPopularHighlight: highlightMock,
      mostPopularGames: gamesMock,
      upcommingGames: gamesMock,
      upcommingHighlight: highlightMock,
      upcommingMoreGames: gamesMock,
      freeGames: gamesMock,
      freeHighlight: highlightMock
    }
  }
}
