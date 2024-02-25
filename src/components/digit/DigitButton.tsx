interface DigitButtonProps {
  digit: number;
  onDigitClick: (value: string) => void;
}

export default function DigitButton({ digit, onDigitClick }: DigitButtonProps) {
  const handleDigitButton = () => {
    onDigitClick(String(digit));
  };

  return (
    <button className="digit" onClick={handleDigitButton}>
      {digit}
    </button>
  );
}
