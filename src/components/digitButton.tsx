interface DigitButtonProps {
  digit: number
}

const DigitButton = ({ digit }: DigitButtonProps) => {
  return <button className="digit">{digit}</button>
}

export default DigitButton
