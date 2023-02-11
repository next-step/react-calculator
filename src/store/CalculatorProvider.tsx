import { PropsWithChildren, useMemo } from 'react';
import { useReducer } from 'react';

import type { Operator } from '@/constants/operation';
import { CalculatorContext } from '@/store/calculator-context';
import { calcOperation } from '@/utils/calcOperation';
import { isInfinite } from '@/utils/numberUtils';

import { calculatorReducer, initialState } from './calculator-reducer';

export const CalculatorProvider = (props: PropsWithChildren) => {
  const [state, dispatch] = useReducer(calculatorReducer, initialState);
  const { userInput } = state;

  const computedInput = useMemo(
    () => (isInfinite(Number(userInput)) ? '오류' : userInput),
    [userInput]
  );
  const userNumbers = useMemo(
    () => getCalculatorNumberArray(userInput),
    [userInput]
  );
  const userOperation = useMemo(
    () => userInput.match(OPERATOR_REGEX)?.at(0),
    [userInput]
  ) as Operator;

  const addNumber = (nextNumber: number) => {
    if (userInput === initialState.userInput) {
      dispatch({ type: 'REPLACE_NUMBER', payload: nextNumber });
      return;
    }

    if (
      !getCalculatorNumberArray(userInput + nextNumber).every(
        (n) => n.length <= MAX_NUMBER_SIZE
      )
    ) {
      alert(MESSAGE.OVER_MAX_NUMBER_SIZE);
      return;
    }

    dispatch({ type: 'ADD_NUMBER', payload: nextNumber });
  };

  const addOperation = (nextOperation: Operator) => {
    if (userOperation) {
      const prevOperation = state.userInput
        .match(OPERATOR_REGEX)
        ?.at(0) as Operator;

      dispatch({
        type: 'REPLACE_OPERATION',
        payload: { prevOperation, nextOperation },
      });
      return;
    }

    dispatch({ type: 'ADD_OPERATION', payload: nextOperation });
  };

  const calculate = () => {
    if (!userInput) {
      alert(MESSAGE.EMPTY_NUMBER);
      return;
    }

    if (!userOperation) {
      alert(MESSAGE.EMPTY_OPERATION);
      return;
    }

    if (userNumbers.length < 2) {
      alert(MESSAGE.LACK_NUMBER);
      return;
    }

    const result = calcOperation(
      Number(userNumbers.at(0)),
      Number(userNumbers.at(1))
    )[userOperation]();

    dispatch({ type: 'CALCULATE', payload: result });
  };

  const reset = () => {
    dispatch({ type: 'RESET' });
  };

  const value = { computedInput, addNumber, addOperation, calculate, reset };

  return <CalculatorContext.Provider value={value} {...props} />;
};

const getCalculatorNumberArray = (str: string) => {
  return str.replace(OPERATOR_REGEX, ',').split(',');
};

const OPERATOR_REGEX = /[X]|[/]|[+]|[-]/gi;
const MAX_NUMBER_SIZE = 3;
const MESSAGE = {
  OVER_MAX_NUMBER_SIZE: `${MAX_NUMBER_SIZE}자리 이상은 입력할 수 없어요.`,
  EMPTY_NUMBER: `계산할 값을 입력해주세요!`,
  EMPTY_OPERATION: `연산자를 입력해주세요!`,
  LACK_NUMBER: `연산할 두 숫자를 입력해주세요!`,
};
