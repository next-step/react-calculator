import type { CalculatorArgs } from '@/components/Calculator/Calculator';
import { MESSAGE } from '@/constants/message';
import { Operator, OPERATORS } from '@/constants/operation';
import { calcOperation } from '@/utils/calcOperation';
import { isInfinite } from '@/utils/numberUtils';

import { CalculatorActionType } from './type';

const initialState = '0';

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
      throw new Error(MESSAGE.OVER_MAX_NUMBER_SIZE(MAX_NUMBER_SIZE));
    }
    return {
      type: CalculatorActionType.ADD_NUMBER,
      payload: state == initialState ? input : state + String(input),
    };
  }

  if (input === 'clear') {
    return { type: CalculatorActionType.CLEAR };
  }
  if (input === '=') {
    const [firstNumber, secondNumber] = getCalculatorNumberArray(state);
    if (!firstNumber) {
      alert(MESSAGE.EMPTY_NUMBER);
      return { type: CalculatorActionType.OPERATE, payload: state };
    }

    if (!getFirstOperator(state)) {
      alert(MESSAGE.EMPTY_OPERATION);
      return { type: CalculatorActionType.OPERATE, payload: state };
    }

    if (!(firstNumber && secondNumber)) {
      alert(MESSAGE.LACK_NUMBER);
      return { type: CalculatorActionType.OPERATE, payload: state };
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

const digitSizeValidator = (state: string, input: CalculatorArgs) => {
  return !getCalculatorNumberArray(state + String(input)).every(
    (n) => n.length <= MAX_NUMBER_SIZE
  );
};
const getFirstOperator = (str: string) =>
  str.match(OPERATOR_REGEX)?.at(0) as Operator;

const MAX_NUMBER_SIZE = 3;

const isOperator = (arg: any): arg is Operator => OPERATORS.includes(arg);

const OPERATOR_REGEX = /[X]|[/]|[+]|[-]/gi;
const getCalculatorNumberArray = (str: string) =>
  str.replace(OPERATOR_REGEX, ',').split(',');
