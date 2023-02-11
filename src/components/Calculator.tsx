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
  beforeNumber: string;
  operator: string;
  dispatch: React.Dispatch<any>;
}

const CalculatorContext = createContext({} as ContextCalculatorProps);

const Calculator = ({ children }: PropsWithChildren) => {
  const { state, dispatch } = useCalculate();

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
  const { total, beforeNumber, currentNumber, dispatch } =
    useContext(CalculatorContext);

  const onClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const { textContent } = e.target as HTMLDivElement;
    const input = currentNumber + textContent;

    if (input.length > MAX_INPUT_NUMBER) {
      return alert(MESSAGES.DIGIT.MAX_LENGTH);
    }

    dispatch({
      type: REDUCER_TYPE.INPUT_DIGIT,
      payload: {
        total:
          !total && currentNumber
            ? currentNumber + textContent
            : total + textContent,
        currentNumber: input,
      },
    });
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
  const { total, beforeNumber, currentNumber, operator, dispatch } =
    useContext(CalculatorContext);

  const onClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const { textContent } = e.target as HTMLDivElement;

    if (operator && textContent !== '=') {
      return alert(MESSAGES.OPERATOR.NOT_FIRST);
    }

    if (beforeNumber && currentNumber) {
      const result = OPERATIONS[operator as OperationType](
        Number(beforeNumber),
        Number(currentNumber)
      );
      dispatch({
        type: REDUCER_TYPE.CALCULATE,
        payload: result,
      });
      return;
    }

    dispatch({
      type: REDUCER_TYPE.INPUT_OPERATOR,
      payload: {
        total: currentNumber
          ? currentNumber + textContent
          : total + textContent,
        operator: textContent,
        beforeNumber: currentNumber,
      },
    });
    dispatch({ type: REDUCER_TYPE.RESET_CURRENT_NUMBER });
  };

  return (
    <div className="operations subgrid" onClick={onClick}>
      {OPERATORS.map((operator) => (
        <Button key={operator} className="digit">
          {operator}
        </Button>
      ))}
    </div>
  );
};

export default Calculator;
