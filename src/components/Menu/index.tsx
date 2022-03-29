// Packages
import React, { useState } from "react"

// Assets
import { ShoppingCart as ShoppingCartIcon } from "@styled-icons/material-outlined/ShoppingCart"
import { Menu2 as MenuIcon } from "@styled-icons/remix-fill/Menu2"
import { Search as SearchIcon } from "@styled-icons/material-outlined/Search"
import { Close as CloseIcon } from "@styled-icons/material-outlined/Close"

// Components
import { Button, Logo } from ".."

// Styles
import * as S from "./styles"

export type MenuProps = {
  userName?: string
}

const Menu: React.FC<MenuProps> = ({ userName }) => {
  // -------------------------------------------------
  // States
  // -------------------------------------------------
  const [isOpen, setIsOpen] = useState(false)
  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  return (
    <S.Wrapper>
      <S.IconWrapper onClick={() => setIsOpen(true)}>
        <MenuIcon aria-label="Open Menu" />
      </S.IconWrapper>
      <S.LogoWrapper>
        <Logo hideOnMobile />
      </S.LogoWrapper>
      <S.MenuGroup>
        <S.IconWrapper>
          <SearchIcon aria-label="search" />
        </S.IconWrapper>
        <S.IconWrapper>
          <ShoppingCartIcon aria-label="Open Shopping Cart" />
        </S.IconWrapper>
      </S.MenuGroup>

      <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
        <CloseIcon aria-label="Close Menu" onClick={() => setIsOpen(false)} />
        <S.MenuNav>
          <S.MenuLink href="#">Início</S.MenuLink>
          <S.MenuLink href="#">Explorar</S.MenuLink>

          {!!userName && (
            <>
              <S.MenuLink href="#">Minha conta</S.MenuLink>
              <S.MenuLink href="#">Lista de desejos</S.MenuLink>
            </>
          )}
        </S.MenuNav>

        <S.RegisterBox>
          <Button fullWidth size="large">
            Entrar
          </Button>
          <span>ou</span>
          <S.CreateAccount href="#" title="Sign In">
            Crie sua conta
          </S.CreateAccount>
        </S.RegisterBox>
      </S.MenuFull>
    </S.Wrapper>
  )
}

export default Menu
