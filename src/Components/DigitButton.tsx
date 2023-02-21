interface DigitProps {
  number: number;
}

function DigitButton({number}: DigitProps) {
  return (
    <button className="digit">{number}</button>
  )
}

export default DigitButton;