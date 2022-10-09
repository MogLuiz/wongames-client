import GameItem, { GameItemProps } from "components/GameItem"

import * as S from "./styles"

export type CartListProps = {
  items: GameItemProps[]
  total: string
}

const CartList = ({ items, total }: CartListProps) => (
  <S.Wrapper>
    <h1>CartList</h1>
  </S.Wrapper>
)

export default CartList
