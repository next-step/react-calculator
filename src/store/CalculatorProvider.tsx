import { PropsWithChildren, useMemo } from 'react';
import { useReducer } from 'react';

import { MAX_NUMBER_SIZE } from '@/constants/limit';
import { MESSAGE } from '@/constants/message';
import type { Operator } from '@/constants/operation';
import { OPERATOR_REGEX } from '@/constants/regex';
import { calcOperation } from '@/utils/calcOperation';
import { isInfinite } from '@/utils/numberUtils';

import { CalculatorContext } from './calculator-context';
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
      dispatch({ type: 'REPLACE_NUMBER', nextNumber });
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

    dispatch({ type: 'ADD_NUMBER', nextNumber });
  };

  const addOperation = (nextOperation: Operator) => {
    if (userOperation) {
      const prevOperation = state.userInput
        .match(OPERATOR_REGEX)
        ?.at(0) as Operator;

      dispatch({ type: 'REPLACE_OPERATION', prevOperation, nextOperation });
      return;
    }

    dispatch({ type: 'ADD_OPERATION', nextOperation });
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

    dispatch({ type: 'CALCULATE', result });
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
