interface DigitButtonProps {
  digit: number;
}

export default function DigitButton({ digit }: DigitButtonProps) {
  return <button className="digit">{digit}</button>;
}
