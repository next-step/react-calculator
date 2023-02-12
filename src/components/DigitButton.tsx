import { DigitNumber } from '@/types/calculator'

interface DigitButtonProps {
  digit: DigitNumber
  onClick(digit: DigitNumber): void
}

const DigitButton = ({ digit, onClick }: DigitButtonProps) => {
  return (
    <button className="digit" onClick={() => onClick(digit)}>
      {digit}
    </button>
  )
}

export default DigitButton
