interface DigitButtonProps {
  digit: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
}

const DigitButton = ({ digit }: DigitButtonProps) => {
  return <button className="digit">{digit}</button>
}

export default DigitButton
