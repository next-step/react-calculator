import { ComponentProps } from 'react'
import DigitButton from './DigitButton'

type Props = {
  onChange: (digit: number) => void
} & Omit<ComponentProps<'div'>, 'onChange'>

const DigitButtonList = ({ onChange }: Props) => {
  const NUMBER_LENGTH = 10
  const NUMBERS = Array.from(
    { length: NUMBER_LENGTH },
    (_, index) => NUMBER_LENGTH - index - 1,
  )

  return (
    <div className="digits flex">
      {NUMBERS.map((number) => (
        <DigitButton key={number} onClick={() => onChange(number)}>
          {number}
        </DigitButton>
      ))}
    </div>
  )
}

export default DigitButtonList
