import Base from "templates/Base"

import { Container } from "components/Container"
import { Divider } from "components/Divider"
import { GameCardProps } from "components/GameCard"
import { HighlightProps } from "components/Highlight"
import PaymentOptions, { PaymentOptionsProps } from "components/PaymentOptions"
import CartList, { CartListProps } from "components/CartList"
import Heading from "components/Heading"
import Showcase from "components/Showcase"
import Empty from "components/Empty"

import * as S from "./styles"

export type CartProps = {
  recommendedGames: GameCardProps[]
  recommendedHighlight: HighlightProps
} & CartListProps &
  Pick<PaymentOptionsProps, "cards">

const Cart = () => (
  <S.Wrapper>
    <h1>Cart</h1>
  </S.Wrapper>
)

export default Cart
