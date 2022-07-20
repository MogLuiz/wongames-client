// Packages
import React, { InputHTMLAttributes, useState } from "react"

// Styles
import * as S from "./styles"

export type CheckboxProps = {
  onCheck?: (status: boolean) => void
  isChecked?: boolean
  label?: string
  labelFor?: string
  labelColor?: "white" | "black"
} & InputHTMLAttributes<HTMLInputElement>

const Checkbox = ({
  onCheck,
  isChecked = false,
  label,
  labelFor = "",
  labelColor = "white"
}: CheckboxProps) => {
  const [checked, setChecked] = useState(isChecked)

  const handleOnChange = () => {
    const status = !checked
    setChecked(status)

    onCheck && onCheck(status)
  }

  return (
    <S.Wrapper>
      <S.Input
        id={labelFor}
        type="checkbox"
        onChange={handleOnChange}
        checked={checked}
      />
      {!!label && (
        <S.Label labelColor={labelColor} htmlFor={labelFor}>
          {label}
        </S.Label>
      )}
    </S.Wrapper>
  )
}

export default Checkbox
