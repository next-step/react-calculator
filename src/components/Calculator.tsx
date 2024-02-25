import useCalculator from '../hooks/useCalculator';
import Key from './key/KeyButton';

export default function Calculator() {
  const { num1, num2, isNum2Negative, operator, inputNumber, clear, inputOperator } =
    useCalculator();

  const messageOfNum2 = isNum2Negative ? `(-${num2 ? `${num2})` : ''}` : num2 ?? '';
  const message = num1 === Infinity ? '오류' : `${num1}${operator ?? ''}${messageOfNum2}`;
  return (
    <div className="calculator">
      <h1 id="total">{message}</h1>
      <Key.Digits onClick={inputNumber} />
      <Key.Modifiers onClick={clear} />
      <Key.Operations onClick={inputOperator} />
    </div>
  );
}
