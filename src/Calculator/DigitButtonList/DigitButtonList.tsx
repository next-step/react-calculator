import { ComponentProps, useState } from 'react'
import DigitButton from './DigitButton'

type Props = {
  onChange: (digit: number) => void
} & Omit<ComponentProps<'div'>, 'onChange'>

const DigitButtonList = ({ onChange }: Props) => {
  const [digit, setDigit] = useState(0)
  const NUMBER_LENGTH = 10
  const NUMBERS = Array.from(
    { length: NUMBER_LENGTH },
    (_, index) => NUMBER_LENGTH - index - 1,
  )

  return (
    <div className="digits flex">
      {NUMBERS.map((number) => (
        <DigitButton
          onClick={() => {
            const nextDigit = Number(`${digit}${number}`)

            setDigit(nextDigit)
            onChange(nextDigit)
          }}
        >
          {number}
        </DigitButton>
      ))}
    </div>
  )
}

export default DigitButtonList
