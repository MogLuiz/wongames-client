/* eslint-disable react-hooks/rules-of-hooks */
import Home, { HomeTemplateProps } from "templates/Home"

import { QUERY_HOME } from "graphql/queries/home"
import { initializeApollo } from "services/apollo"
import { QueryHome } from "graphql/generated/QueryHome"

import {
  useNewGamesDataFactory,
  useBannersDataFactory,
  useUpcomingGamesDataFactory
} from "hooks/domain/home"

import highlightMock from "components/Highlight/mock"
import gamesMock from "components/GameCardSlider/mock"

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()
  const {
    data: { banners, newGames, upcomingGames, freeGames }
  } = await apolloClient.query<QueryHome>({ query: QUERY_HOME })

  const { bannerData } = useBannersDataFactory(banners)
  const { newGamesData } = useNewGamesDataFactory(newGames)
  const { upcomingGamesData } = useUpcomingGamesDataFactory(upcomingGames)

  return {
    props: {
      revalidate: 10,
      banners: bannerData,
      newGames: newGamesData,
      mostPopularHighlight: highlightMock,
      mostPopularGames: gamesMock,
      upcommingGames: upcomingGamesData,
      upcommingHighlight: highlightMock,
      freeGames: gamesMock,
      freeHighlight: highlightMock
    }
  }
}
