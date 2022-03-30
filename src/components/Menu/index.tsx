// Packages
import React, { useState } from "react"

// Assets
import { ShoppingCart as ShoppingCartIcon } from "@styled-icons/material-outlined/ShoppingCart"
import { Menu2 as MenuIcon } from "@styled-icons/remix-fill/Menu2"
import { Search as SearchIcon } from "@styled-icons/material-outlined/Search"
import { Close as CloseIcon } from "@styled-icons/material-outlined/Close"

// Components
import { Button, Logo, MediaMatch } from ".."

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
      <MediaMatch lessThan="medium">
        <S.IconWrapper onClick={() => setIsOpen(true)}>
          <MenuIcon aria-label="Open Menu" />
        </S.IconWrapper>
      </MediaMatch>

      <S.LogoWrapper>
        <Logo hideOnMobile />
      </S.LogoWrapper>

      <MediaMatch greaterThan="medium">
        <S.MenuNav>
          <S.MenuLink href="#">Início</S.MenuLink>
          <S.MenuLink href="#">Explorar</S.MenuLink>
        </S.MenuNav>
      </MediaMatch>

      <S.MenuGroup>
        <S.IconWrapper>
          <SearchIcon aria-label="search" />
        </S.IconWrapper>
        <S.IconWrapper>
          <ShoppingCartIcon aria-label="Open Shopping Cart" />
        </S.IconWrapper>
        {!userName && (
          <MediaMatch greaterThan="medium">
            <Button>Sign in</Button>
          </MediaMatch>
        )}
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

        {!userName && (
          <S.RegisterBox>
            <Button fullWidth size="large">
              Entrar
            </Button>
            <span>ou</span>
            <S.CreateAccount href="#" title="Sign In">
              Crie sua conta
            </S.CreateAccount>
          </S.RegisterBox>
        )}
      </S.MenuFull>
    </S.Wrapper>
  )
}

export default Menu
