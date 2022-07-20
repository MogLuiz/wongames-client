// Packages
import React, { InputHTMLAttributes, useState } from "react"

// Styles
import * as S from "./styles"

export type CheckboxProps = {
  onCheck?: (status: boolean) => void
  label?: string
  labelFor?: string
  labelColor?: "white" | "black"
} & InputHTMLAttributes<HTMLInputElement>

const Checkbox = ({
  onCheck,
  label,
  labelFor = "",
  labelColor = "white"
}: CheckboxProps) => {
  const [checked, setChecked] = useState(false)

  const handleOnChange = () => {
    setChecked(!checked)

    if (onCheck) onCheck(checked)
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
