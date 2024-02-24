interface DigitButtonProps {
  digit: number;
  onDigitClick: (value: string) => void;
}

export default function DigitButton({ digit, onDigitClick }: DigitButtonProps) {
  const buttonClickHandler = () => {
    onDigitClick(String(digit));
  };

  return (
    <button className="digit" onClick={buttonClickHandler}>
      {digit}
    </button>
  );
}
