import { QueryHome_newGames } from "graphql/generated/QueryHome"

export const useGamesMapper = () => {
  const formatGame = ({
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

  const gamesMapper = (games: Array<QueryHome_newGames>) => {
    return games.map(formatGame)
  }

  return {
    gamesMapper
  }
}
