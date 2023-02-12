import React, { createContext, PropsWithChildren } from 'react';

import useCalculate, { type StateType } from '../../hooks/useCalculate';

import Reset from './Reset';
import Digits from './Digits';
import Display from './Display';
import Operations from './Operations';

interface ContextCalculatorProps extends StateType {
  dispatch: any;
}

export const CalculatorContext = createContext({} as ContextCalculatorProps);

const Calculator = ({ children }: PropsWithChildren) => {
  const { state, dispatch } = useCalculate();

  return (
    <CalculatorContext.Provider value={{ ...state!, dispatch }}>
      <div className="calculator">{children}</div>
    </CalculatorContext.Provider>
  );
};

Calculator.Display = Display;
Calculator.Reset = Reset;
Calculator.Digits = Digits;
Calculator.Operations = Operations;

export default Calculator;
