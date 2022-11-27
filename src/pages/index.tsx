import Home, { HomeTemplateProps } from "templates/Home"

import { QUERY_HOME } from "graphql/queries/home"
import { initializeApollo } from "services/apollo"
import { QueryHome, QueryHome_banners } from "graphql/generated/QueryHome"

import highlightMock from "components/Highlight/mock"
import gamesMock from "components/GameCardSlider/mock"

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
  const { data } = await apolloClient.query<QueryHome>({ query: QUERY_HOME })

  const bannersFactoryComposition = data?.banners.map(bannerDataFactory)

  return {
    props: {
      revalidate: 10,
      banners: bannersFactoryComposition,
      newGames: gamesMock,
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
