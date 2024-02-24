import { useCalculate } from './CalculatorProvider';

export default function TotalDisplay() {
  const calculate = useCalculate();

  return <h1 id="total">{calculate?.display}</h1>;
}
