interface DigitProps {
  number: string;
  setDigit(digit: String): void;
}

function DigitButton({ number, setDigit }: DigitProps) {
  
  const onClickDigit = (e: React.MouseEvent) => {
    setDigit(e.currentTarget.textContent || "");
  }
  
  return (
    <button className="digit" onClick={onClickDigit}>{number}</button>
  )
}

export default DigitButton;