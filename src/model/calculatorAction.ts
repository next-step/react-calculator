import type { CalculatorArgs } from '@/components/Calculator/Calculator';
import { MESSAGE } from '@/constants/message';
import { CLEAR, OPERATE, Operator, OPERATORS } from '@/constants/operator';
import { calcOperation } from '@/utils/calcOperation';
import { isInfinite } from '@/utils/numberUtils';

import { initialState } from './calculator';
import { CalculatorError } from './calculatorError';
import { CalculatorActionType } from './type';

export const getCalculatorAction = (state: string, input: CalculatorArgs) => {
  if (isOperator(input)) {
    if (getFirstOperator(state)) {
      return {
        type: CalculatorActionType.REPLACE_OPERATOR,
        payload: state.replace(getFirstOperator(state), input),
      };
    }
    return { type: CalculatorActionType.ADD_OPERATOR, payload: input };
  }

  if (Number(input)) {
    if (digitSizeValidator(state, input)) {
      throw new CalculatorError(MESSAGE.OVER_MAX_NUMBER_SIZE(MAX_NUMBER_SIZE));
    }
    return {
      type: CalculatorActionType.ADD_NUMBER,
      payload: state == initialState ? input : state + String(input),
    };
  }

  if (input === CLEAR) {
    return { type: CalculatorActionType.CLEAR };
  }

  if (input === OPERATE) {
    const [firstNumber, secondNumber] = getCalculatorNumberArray(state);

    if (!firstNumber) {
      throw new CalculatorError(MESSAGE.EMPTY_NUMBER);
    }

    if (!getFirstOperator(state)) {
      throw new CalculatorError(MESSAGE.EMPTY_OPERATION);
    }

    if (!(firstNumber && secondNumber)) {
      throw new CalculatorError(MESSAGE.LACK_NUMBER);
    }

    const result = calcOperation(Number(firstNumber), Number(secondNumber))[
      getFirstOperator(state)
    ]();

    return {
      type: CalculatorActionType.OPERATE,
      payload: isInfinite(result) ? '오류' : String(result),
    };
  }
  return {
    type: 'UNEXPECTED',
  };
};

const MAX_NUMBER_SIZE = 3;
const OPERATOR_REGEX = /[X]|[/]|[+]|[-]/gi;

const digitSizeValidator = (state: string, input: CalculatorArgs) => {
  return !getCalculatorNumberArray(state + String(input)).every(
    (n) => n.length <= MAX_NUMBER_SIZE
  );
};
const getFirstOperator = (str: string) =>
  str.match(OPERATOR_REGEX)?.at(0) as Operator;

const isOperator = (arg: any): arg is Operator => OPERATORS.includes(arg);

const getCalculatorNumberArray = (str: string) =>
  str.replace(OPERATOR_REGEX, ',').split(',');
