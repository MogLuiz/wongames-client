import {
  QueryHome_newGames,
  QueryHome_upcomingGames,
  QueryHome_freeGames
} from "graphql/generated/QueryHome"

type TUseGamesDataFactoryProps = {
  newGames: Array<QueryHome_newGames>
  upcomingGames: Array<QueryHome_upcomingGames>
  freeGames: Array<QueryHome_freeGames>
}

export const useGamesDataFactory = ({
  newGames,
  upcomingGames,
  freeGames
}: TUseGamesDataFactoryProps) => {
  const gamesFactory = ({
    name,
    slug,
    developers,
    cover,
    price
  }: QueryHome_newGames) => ({
    title: name,
    slug: slug,
    developer: developers[0].name,
    img: `http://localhost:1337${cover?.url}`,
    price: price
  })

  const newGamesData = newGames.map(gamesFactory)
  const upcomingGamesData = upcomingGames.map(gamesFactory)
  const freeGamesData = freeGames.map(gamesFactory)

  return { newGamesData, upcomingGamesData, freeGamesData }
}
