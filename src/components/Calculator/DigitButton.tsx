interface DigitButtonProps {
  number: number;
}

export default function DigitButton({ number }: DigitButtonProps) {
  return <button className="digit">{number}</button>;
}
