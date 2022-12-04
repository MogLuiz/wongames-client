/* eslint-disable react-hooks/rules-of-hooks */
import Home, { HomeTemplateProps } from "templates/Home"

import { initializeApollo } from "services/apollo"

import { QUERY_HOME } from "graphql/queries/home"
import { QueryHome } from "graphql/generated/QueryHome"

import {
  useGamesDataFactory,
  useBannersDataFactory,
  useHighlightMapper
} from "hooks/domain/home"

import highlightMock from "components/Highlight/mock"

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
  const {
    newGamesData,
    freeGamesData,
    upcomingGamesData,
    mostPopularGamesData
  } = useGamesDataFactory({
    newGames,
    upcomingGames,
    freeGames,
    mostPopularGames: sections!.popularGames!.games
  })

  return {
    props: {
      revalidate: 10,
      banners: bannerData,
      newGames: newGamesData,
      newGamesSectionTitle: sections?.newGames?.title,
      mostPopularHighlight: highlightMapper(sections?.popularGames?.highlight),
      mostPopularGames: mostPopularGamesData,
      mostPopularSectionTitle: sections?.popularGames?.title,
      upcommingGames: upcomingGamesData,
      upcommingGamesSectionTitle: sections?.upcomingGames?.title,
      upcommingHighlight: highlightMapper(sections?.upcomingGames?.highlight),
      freeGames: freeGamesData,
      freeGamesSectionTitle: sections?.freeGames?.title,
      freeHighlight: highlightMapper(sections?.freeGames?.highlight)
    }
  }
}
