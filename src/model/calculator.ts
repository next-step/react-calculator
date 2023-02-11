import type { CalculatorArgs } from '@/components/Calculator/Calculator';
import { Operator, OPERATORS } from '@/constants/operation';
import { calcOperation } from '@/utils/calcOperation';
import { isInfinite } from '@/utils/numberUtils';

enum CalculatorAction {
  ADD_OPERATOR,
  REPLACE_OPERATOR,
  ADD_NUMBER,
  REPLACE_NUMBER,
  CLEAR,
  OPERATE,
}

export const calculatorMachine = (
  state = initialState,
  input: CalculatorArgs
): string => {
  try {
    const action = getAction(state, input);
    switch (action.type) {
      case CalculatorAction.ADD_NUMBER:
        return state + String(input);
      case CalculatorAction.REPLACE_NUMBER:
        return state + String(input);
      case CalculatorAction.ADD_OPERATOR:
        return state + action.payload;
      case CalculatorAction.REPLACE_OPERATOR:
        return state + action.payload;
      case CalculatorAction.OPERATE:
        return String(action.payload);
      case CalculatorAction.CLEAR:
        return initialState;
      default:
        throw new Error('Unexpected Calculator Action');
    }
  } catch (error) {
    console.error(error);
    return '오류';
  }
};

const initialState = '0';
const MAX_NUMBER_SIZE = 3;

const MESSAGE = {
  OVER_MAX_NUMBER_SIZE: `${MAX_NUMBER_SIZE}자리 이상은 입력할 수 없어요.`,
  EMPTY_NUMBER: `계산할 값을 입력해주세요!`,
  EMPTY_OPERATION: `연산자를 입력해주세요!`,
  LACK_NUMBER: `연산할 두 숫자를 입력해주세요!`,
};

const isOperator = (arg: any): arg is Operator => OPERATORS.includes(arg);

const OPERATOR_REGEX = /[X]|[/]|[+]|[-]/gi;
const getCalculatorNumberArray = (str: string) =>
  str.replace(OPERATOR_REGEX, ',').split(',');

const getAction = (state: string, input: CalculatorArgs) => {
  if (isOperator(input)) {
    if (getFirstOperator(state)) {
      return {
        type: CalculatorAction.REPLACE_OPERATOR,
        payload: state.replace(getFirstOperator(state), input),
      };
    }
    return { type: CalculatorAction.ADD_OPERATOR, payload: input };
  }

  if (Number(input)) {
    if (digitSizeValidator(state, input)) {
      throw new Error(MESSAGE.OVER_MAX_NUMBER_SIZE);
    }
    return {
      type: CalculatorAction.ADD_NUMBER,
      payload: state == initialState ? input : state + String(input),
    };
  }

  if (input === 'clear') {
    return { type: CalculatorAction.CLEAR };
  }
  if (input === '=') {
    const [firstNumber, secondNumber] = getCalculatorNumberArray(state);
    if (!firstNumber) {
      alert(MESSAGE.EMPTY_NUMBER);
      return { type: CalculatorAction.OPERATE, payload: state };
    }

    if (!getFirstOperator(state)) {
      alert(MESSAGE.EMPTY_OPERATION);
      return { type: CalculatorAction.OPERATE, payload: state };
    }

    if (!(firstNumber && secondNumber)) {
      alert(MESSAGE.LACK_NUMBER);
      return { type: CalculatorAction.OPERATE, payload: state };
    }

    const result = calcOperation(Number(firstNumber), Number(secondNumber))[
      getFirstOperator(state)
    ]();

    return {
      type: CalculatorAction.OPERATE,
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
