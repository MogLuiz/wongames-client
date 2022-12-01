import { gql } from "@apollo/client"
import { GameFragment } from "graphql/fragments/game"

export const QUERY_GAMES = gql`
  query QueryGames($limit: Int!) {
    games(limit: $limit) {
      ...GameFragment
    }
  }
  ${GameFragment}
`
