import { useReducer, useContext, createContext, Dispatch, ReactNode } from 'react';

import { OPERAND_INITIAL_VALUE, OPERATOR_INITIAL_VALUE } from '../../constants/calculator';
import { InitialOperator, Operator } from '../../types/calculator';
import { Action } from './action';
import { calculatorReducer } from './reducer';

export const initialState = {
  operand1: OPERAND_INITIAL_VALUE,
  operand2: OPERAND_INITIAL_VALUE,
  operator: OPERATOR_INITIAL_VALUE,
} as const;

export type State = {
  operand1: number;
  operand2: number;
  operator: Operator | InitialOperator;
};

type CalculatorContext = {
  state: State;
  dispatch: Dispatch<Action>;
};

const calculatorContext = createContext<CalculatorContext | undefined>(undefined);

type Props = {
  children: ReactNode;
};

export const CalculatorProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(calculatorReducer, initialState);

  const value = { state, dispatch };

  return <calculatorContext.Provider value={value}>{children}</calculatorContext.Provider>;
};

export const useCalculator = () => {
  const context = useContext(calculatorContext);

  if (context === undefined) {
    throw new Error('useCalculator 훅은 CalculatorProvider 내부에서만 호출할 수 있습니다.');
  }

  return context;
};
