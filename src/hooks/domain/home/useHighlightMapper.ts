import { QueryHome_sections_popularGames_highlight } from "graphql/generated/QueryHome"

export const useHighlightMapper = () => {
  const highlightMapper = (
    highlight: QueryHome_sections_popularGames_highlight | null | undefined
  ) =>
    highlight && {
      title: highlight.title,
      subtitle: highlight.subtitle,
      backgroundImage: `http://localhost:1337${highlight.background?.url}`,
      floatImage: `http://localhost:1337${highlight.floatImage?.url}`,
      buttonLabel: highlight.buttonLabel,
      buttonLink: highlight.buttonLink,
      alignment: highlight.alignment
    }

  return { highlightMapper }
}
