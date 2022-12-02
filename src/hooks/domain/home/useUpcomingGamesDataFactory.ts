import { QueryHome_upcomingGames } from "graphql/generated/QueryHome"

export const useUpcomingGamesDataFactory = (
  newGames: Array<QueryHome_upcomingGames>
) => {
  const newGamesFactory = ({
    name,
    slug,
    developers,
    cover,
    price
  }: QueryHome_upcomingGames) => ({
    title: name,
    slug: slug,
    developer: developers[0].name,
    img: `http://localhost:1337${cover?.url}`,
    price: price
  })

  const upcomingGamesData = newGames.map(newGamesFactory)

  return { upcomingGamesData }
}
