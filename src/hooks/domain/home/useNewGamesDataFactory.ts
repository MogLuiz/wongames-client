import { QueryHome_newGames } from "graphql/generated/QueryHome"

export const useNewGamesDataFactory = (newGames: Array<QueryHome_newGames>) => {
  const newGamesFactory = ({
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

  const newGamesFactoryComposition = newGames.map(newGamesFactory)

  return { newGamesFactoryComposition }
}
