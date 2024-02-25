interface DigitButtonProps {
  digit: string;
  onClick: (value: string) => void;
}

export default function DigitButton({ digit, onClick }: DigitButtonProps) {
  return (
    <button className="digit" onClick={() => onClick(digit)}>
      {digit}
    </button>
  );
}
