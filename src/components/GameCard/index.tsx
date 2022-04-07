// Packages
import React from "react"

// Assets
import {
  FavoriteBorder,
  AddShoppingCart
} from "@styled-icons/material-outlined"

// Components
import { Button } from "components"

// Styles
import * as S from "./styles"

export type GameCardProps = {
  title: string
  developer: string
  img: string
  price: string
}

const GameCard: React.FC<GameCardProps> = ({
  title,
  developer,
  img,
  price
}) => (
  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  <S.Wrapper>
    <S.ImageBox>
      <img src={img} alt={title} />
    </S.ImageBox>

    <S.Info>
      <S.Title>{title}</S.Title>
      <S.Developer>{developer}</S.Developer>
    </S.Info>

    <S.FavButton>
      <FavoriteBorder aria-label="Add to Wishlist" />
    </S.FavButton>

    <S.BuyBox>
      <S.Price>{price}</S.Price>
      <Button icon={<AddShoppingCart />} size="small" />
    </S.BuyBox>
  </S.Wrapper>
)

export default GameCard
