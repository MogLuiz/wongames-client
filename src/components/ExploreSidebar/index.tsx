import { useState } from "react"

import { Close } from "@styled-icons/material-outlined/Close"
import { FilterList } from "@styled-icons/material-outlined/FilterList"

import Heading from "components/Heading"
import Button from "components/Button"
import Checkbox from "components/Checkbox"
import Radio from "components/Radio"

import { ItemProps } from "./types"

import * as S from "./styles"

export type ExploreSidebarProps = {
  items: ItemProps[]
}

const ExploreSidebar = ({ items }: ExploreSidebarProps) => (
  <S.Wrapper>
    <h1>ExploreSidebar</h1>
  </S.Wrapper>
)

export default ExploreSidebar
