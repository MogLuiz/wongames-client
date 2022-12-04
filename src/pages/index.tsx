/* eslint-disable react-hooks/rules-of-hooks */
import Home, { HomeTemplateProps } from "templates/Home"

import { initializeApollo } from "services/apollo"

import { QUERY_HOME } from "graphql/queries/home"
import { QueryHome } from "graphql/generated/QueryHome"

import {
  useBannersDataFactory,
  useHighlightMapper,
  useGamesMapper
} from "hooks/domain/home"

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()
  const {
    data: { banners, newGames, upcomingGames, freeGames, sections }
  } = await apolloClient.query<QueryHome>({ query: QUERY_HOME })

  const { bannerData } = useBannersDataFactory(banners)
  const { highlightMapper } = useHighlightMapper()
  const { gamesMapper } = useGamesMapper()

  return {
    props: {
      revalidate: 10,
      banners: bannerData,
      newGames: gamesMapper(newGames),
      newGamesSectionTitle: sections?.newGames?.title,
      mostPopularHighlight: highlightMapper(sections?.popularGames?.highlight),
      mostPopularGames: gamesMapper(sections!.popularGames!.games),
      mostPopularSectionTitle: sections?.popularGames?.title,
      upcommingGames: gamesMapper(upcomingGames),
      upcommingGamesSectionTitle: sections?.upcomingGames?.title,
      upcommingHighlight: highlightMapper(sections?.upcomingGames?.highlight),
      freeGames: gamesMapper(freeGames),
      freeGamesSectionTitle: sections?.freeGames?.title,
      freeHighlight: highlightMapper(sections?.freeGames?.highlight)
    }
  }
}
