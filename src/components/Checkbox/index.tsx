// Packages
import React from "react"

// Styles
import * as S from "./styles"

export type CheckboxProps = {
  label: string
  labelFor: string
}

const Checkbox = ({ label, labelFor }: CheckboxProps) => (
  <S.Wrapper>
    <input id={labelFor} type="checkbox" />
    <label htmlFor={labelFor}>{label}</label>
  </S.Wrapper>
)

export default Checkbox
