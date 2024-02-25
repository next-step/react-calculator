interface CalculatorDisplayProps {
  display: string;
}

export default function CalculatorDisplay({ display }: CalculatorDisplayProps) {
  return <h1 id="total">{display}</h1>;
}
