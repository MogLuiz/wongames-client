import Base from "templates/Base"

import GameInfo, { GameInfoProps } from "components/GameInfo"

import * as S from "./styles"

export type GameTemplateProps = {
  cover: string
  gameInfo: GameInfoProps
}

const Game = ({ cover, gameInfo }: GameTemplateProps) => (
  <Base>
    <S.Cover src={cover} role="image" aria-label="cover" />

    <GameInfo {...gameInfo} />
  </Base>
)

export default Game
