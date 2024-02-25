interface DigitButtonProps {
  digit: number;
  onClick: (value: string) => void;
}

export default function DigitButton({ digit, onClick }: DigitButtonProps) {
  const handleDigitButton = () => {
    onClick(String(digit));
  };

  return (
    <button className="digit" onClick={handleDigitButton}>
      {digit}
    </button>
  );
}
