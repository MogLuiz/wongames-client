// Packages
import React from "react"

// Assets
import {
  AddShoppingCart,
  FavoriteBorder
} from "@styled-icons/material-outlined"

// Components
import Button from "components/Button"
import Heading from "components/Heading"
import Ribbon from "components/Ribbon"

// Styles
import * as S from "./styles"

export type GameInfoProps = {
  title: string
  description: string
  price: string
}

const GameInfo = ({ description, price, title }: GameInfoProps) => (
  <S.Wrapper>
    <Heading color="black" lineBottom>
      {title}
    </Heading>

    <Ribbon color="secondary">{`$${price}`}</Ribbon>

    <S.Description>{description}</S.Description>

    <S.ButtonsWrapper>
      <Button icon={<AddShoppingCart />} size="large">
        Add to cart
      </Button>
      <Button icon={<FavoriteBorder />} size="large" minimal>
        Wishlist
      </Button>
    </S.ButtonsWrapper>
  </S.Wrapper>
)

export default GameInfo
