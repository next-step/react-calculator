import React, { createContext, PropsWithChildren, useState } from 'react';

import Button from './@common/Button';
import {
  DIGITS,
  OPERATORS,
  OPERATIONS,
  type OperationType,
} from '../constants/calculate';

// 계산기 안에 있는 컴포넌트를 다른 컴포넌트에서 사용하진 않을테니... 계산기를 여러 방향으로 조합하여 사용한다면?
// 계산식이 보여질 곳, 입력 숫자, 연산자의 위치가 바뀔 수 있을 것 같다.

interface Props {
  total: string;
  setTotal: React.Dispatch<React.SetStateAction<string>>;
  currentNumber: string;
  setCurrentNumber: React.Dispatch<React.SetStateAction<string>>;
}

const Calculator = ({ children }: PropsWithChildren) => {
  const [total, setTotal] = useState('');
  const [currentNumber, setCurrentNumber] = useState('');
  const [beforeNumber, setBeforeNumber] = useState('');
  const [operator, setOperator] = useState('');
  const [isClear, setIsClear] = useState(false);
  const [isCalculated, setIsCalculated] = useState(false);

  const onClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const { textContent } = e.target as HTMLDivElement;
    setTotal((prev) => prev + textContent);

    if (isClear) {
      setCurrentNumber(textContent!);
      setIsClear(false);
      return;
    }

    setCurrentNumber((prev) => prev + textContent);
  };

  const onOperatorClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const { textContent } = e.target as HTMLDivElement;

    if (isCalculated) {
      if (textContent !== '=') {
        setTotal(currentNumber + textContent);
      }
      setBeforeNumber(currentNumber);
      setIsCalculated(false);
      setIsClear(true);
      setOperator(textContent as OperationType);
      return;
    }
    if (beforeNumber) {
      const result = OPERATIONS[operator as OperationType](
        Number(beforeNumber),
        Number(currentNumber)
      );
      setCurrentNumber(`${result}` || '');
      setIsCalculated(true);
      setTotal('');
    }
    setIsClear(true);
    setOperator(textContent as OperationType);
    setBeforeNumber(currentNumber);
    if (textContent !== '=') {
      setTotal((prev) => prev + textContent);
    }
  };

  return (
    <div className="calculator">
      <div className="display">
        <p>{total}</p>
        <h1>{currentNumber || '0'}</h1>
      </div>

      <div className="digits flex" onClick={onClick}>
        {DIGITS.map((digit) => (
          <Button key={digit} className="digit">
            {digit}
          </Button>
        ))}
      </div>

      <div className="modifiers subgrid">
        <button className="modifier" onClick={() => setTotal('')}>
          AC
        </button>
      </div>

      <div className="operations subgrid" onClick={onOperatorClick}>
        {OPERATORS.map((operator) => (
          <Button key={operator} className="digit">
            {operator}
          </Button>
        ))}
      </div>
    </div>
  );
};

Calculator.Display = ({ total, currentNumber }: Props) => {
  return (
    <div className="display">
      <p>{total}</p>
      <h1>{currentNumber || '0'}</h1>
    </div>
  );
};

Calculator.Digits = ({ setTotal, setCurrentNumber }: Props) => {
  const onClick = () => {
    // TODO: Check the Digit Validation
    setCurrentNumber((prev) => prev);
    setTotal((prev) => prev);
  };

  return (
    <div className="digits flex">
      {DIGITS.map((digit) => (
        <Button key={digit} className="digit">
          {digit}
        </Button>
      ))}
    </div>
  );
};

export default Calculator;
