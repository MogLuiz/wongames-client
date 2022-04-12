// Packages
import React from "react"

// Assets
import {
  FavoriteBorder,
  Favorite,
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
  promotionalPrice?: string
  favorite?: boolean
}

const GameCard: React.FC<GameCardProps> = ({
  title,
  developer,
  img,
  price,
  promotionalPrice,
  favorite = false
}) => (
  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  <S.Wrapper>
    <S.ImageBox>
      <img src={img} alt={title} />
    </S.ImageBox>

    <S.Content>
      <S.Info>
        <S.Title>{title}</S.Title>
        <S.Developer>{developer}</S.Developer>
      </S.Info>
      <S.FavButton>
        {favorite ? (
          <Favorite aria-label="Remove from Wishlist" />
        ) : (
          <FavoriteBorder aria-label="Add to Wishlist" />
        )}
      </S.FavButton>

      <S.BuyBox>
        {!!promotionalPrice && <S.Price isPromotional>{price}</S.Price>}
        <S.Price>{promotionalPrice || price}</S.Price>
        <Button icon={<AddShoppingCart />} size="small" />
      </S.BuyBox>
    </S.Content>
  </S.Wrapper>
)

export default GameCard