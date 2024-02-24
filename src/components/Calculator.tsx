import useCalculator from '../hooks/useCalculator';
import Key from './key/KeyButton';

export default function Calculator() {
  const { num1, num2, operator, inputNumber, clear, inputOperator } = useCalculator();

  const message = num1 === Infinity ? '오류' : `${num1}${operator ?? ''}${num2 ?? ''}`;
  return (
    <div className="calculator">
      <h1 id="total">{message}</h1>
      <Key.Digits onClick={inputNumber} />
      <Key.Modifiers onClick={clear} />
      <Key.Operations onClick={inputOperator} />
    </div>
  );
}
