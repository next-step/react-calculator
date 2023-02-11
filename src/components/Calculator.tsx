import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useState,
} from 'react';

import Button from './@common/Button';
import {
  DIGITS,
  OPERATORS,
  OPERATIONS,
  type OperationType,
  MAX_INPUT_NUMBER,
} from '../constants/calculate';
import useCalculate, { REDUCER_TYPE } from '../hooks/useCalculate';
import { MESSAGES } from '../constants/messages';

interface ContextCalculatorProps {
  total: string;
  currentNumber: string;
  dispatch: React.Dispatch<any>;
}

const CalculatorContext = createContext({} as ContextCalculatorProps);

const Calculator = ({ children }: PropsWithChildren) => {
  const [total, setTotal] = useState('');
  const [currentNumber, setCurrentNumber] = useState('');
  const [beforeNumber, setBeforeNumber] = useState('');
  const [operator, setOperator] = useState('');
  const [isClear, setIsClear] = useState(false); //이전 데이터 값 삭제 상태
  const [isCalculated, setIsCalculated] = useState(false);
  const { state, dispatch } = useCalculate();

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

  return (
    <CalculatorContext.Provider value={{ ...state!, dispatch }}>
      <div className="calculator">{children}</div>
    </CalculatorContext.Provider>
  );
};

Calculator.Display = () => {
  const { total, currentNumber } = useContext(CalculatorContext);
  return (
    <div className="display">
      <p>{total}</p>
      <h1>{currentNumber || '0'}</h1>
    </div>
  );
};

Calculator.Reset = () => {
  const { dispatch } = useContext(CalculatorContext);

  const onClick = () => {
    dispatch({ type: REDUCER_TYPE.RESET });
  };
  return (
    <div className="modifiers subgrid">
      <button className="modifier" onClick={onClick}>
        AC
      </button>
    </div>
  );
};

Calculator.Digits = () => {
  const { total, dispatch } = useContext(CalculatorContext);

  const onClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const { textContent } = e.target as HTMLDivElement;
    const input = total + textContent;

    if (input.length > MAX_INPUT_NUMBER) {
      return alert(MESSAGES.DIGIT.MAX_LENGTH);
    }

    dispatch({ type: REDUCER_TYPE.INPUT, payload: input });
  };
  return (
    <div className="digits flex" onClick={onClick}>
      {DIGITS.map((digit) => (
        <Button key={digit} className="digit">
          {digit}
        </Button>
      ))}
    </div>
  );
};

Calculator.Operations = () => {
  return (
    <div className="operations subgrid">
      {OPERATORS.map((operator) => (
        <Button key={operator} className="digit">
          {operator}
        </Button>
      ))}
    </div>
  );
};

export default Calculator;
