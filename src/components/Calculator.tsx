import Key from './Key';
import { OperatorType } from '../common/types';
import { DIGITS, OPERATORS } from '../common/constants';
import useCalculator from '../hooks/useCalculator';

export default function Calculator() {
  const { num1, num2, operator, inputNumber, clear, inputOperator } = useCalculator();

  const handleClickDigit = (digit: number) => {
    inputNumber(digit);
  };

  const handleClickOperation = (operator: OperatorType) => {
    inputOperator(operator);
  };

  const message = num1 === Infinity ? '오류' : `${num1}${operator ?? ''}${num2 ?? ''}`;
  return (
    <div className="calculator">
      <h1 id="total">{message}</h1>
      <div className="digits flex">
        {DIGITS.map(digit => (
          <Key
            key={digit}
            className="digit"
            label={`${digit}`}
            onClick={() => handleClickDigit(digit)}
          />
        ))}
      </div>
      <div className="modifiers subgrid">
        <Key className="modifier" label="AC" onClick={clear} />
      </div>
      <div className="operations subgrid">
        {OPERATORS.map(operator => (
          <Key
            key={operator}
            className="operation"
            label={operator}
            onClick={() => handleClickOperation(operator)}
          />
        ))}
      </div>
    </div>
  );
}
