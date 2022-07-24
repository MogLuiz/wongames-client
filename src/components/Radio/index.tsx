// Packages
import { InputHTMLAttributes } from "react"

// Types
import { RadioValue } from "./types"

// Styles
import * as S from "./styles"

export type RadioProps = {
  onCheck?: (value?: RadioValue) => void
  label?: string
  labelColor?: "white" | "black"
  labelFor?: string
  value?: RadioValue
} & InputHTMLAttributes<HTMLInputElement>

const Radio = ({
  label,
  onCheck,
  labelColor = "white",
  labelFor = "",
  value,
  ...props
}: RadioProps) => {
  const onChange = () => {
    !!onCheck && onCheck(value)
  }

  return (
    <S.Wrapper>
      <S.Input
        id={labelFor}
        type="radio"
        value={value}
        onChange={onChange}
        {...props}
      />
      {!!label && (
        <S.Label labelColor={labelColor} htmlFor={labelFor}>
          {label}
        </S.Label>
      )}
    </S.Wrapper>
  )
}

export default Radio
