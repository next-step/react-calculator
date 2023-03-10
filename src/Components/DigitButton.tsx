interface DigitProps {
  number: string;
  setDigit(digit: String): void;
}

function DigitButton({ number, setDigit }: DigitProps) {
  
  const onDigitClick = (e: React.MouseEvent) => {
    setDigit(e.currentTarget.textContent || "");
  }
  
  return (
    <button className="digit" onClick={onDigitClick}>{number}</button>
  )
}

export default DigitButton;