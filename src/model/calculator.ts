import type { CalculatorArgs } from '@/components/Calculator';
import { Operator, OPERATORS } from '@/constants/operation';
import { calcOperation } from '@/utils/calcOperation';

export const calculatorMachine = (
  state: string,
  input: CalculatorArgs
): string => {
  const init = '0';

  if (isOperator(input)) {
    const userOperation = state?.match(OPERATOR_REGEX)?.at(0) as Operator;
    if (userOperation) {
      const prevOperation = String(state)
        .match(OPERATOR_REGEX)
        ?.at(0) as Operator;
      return state.replace(prevOperation, input);
    }
    return state + String(input);
  }

  if (Number(input)) {
    if (state === '0') {
      return String(input);
    }

    const isOverNumberSize = !getCalculatorNumberArray(
      state + String(input)
    ).every((n) => n.length <= MAX_NUMBER_SIZE);

    if (isOverNumberSize) {
      alert(MESSAGE.OVER_MAX_NUMBER_SIZE);
      return String(state);
    }
    return state + String(input);
  }

  if (input === 'clear') {
    return '0';
  }

  if (input === '=') {
    const userOperation = state?.match(OPERATOR_REGEX)?.at(0) as Operator;
    const userNumbers = getCalculatorNumberArray(state);
    if (!state) {
      alert(MESSAGE.EMPTY_NUMBER);
      return state;
    }

    if (!userOperation) {
      alert(MESSAGE.EMPTY_OPERATION);
      return state;
    }

    if (userNumbers.length < 2) {
      alert(MESSAGE.LACK_NUMBER);
      return state;
    }

    const result = calcOperation(
      Number(userNumbers.at(0)),
      Number(userNumbers.at(1))
    )[userOperation]();

    return String(result);
  }

  return init;
};

const MAX_NUMBER_SIZE = 3;

const MESSAGE = {
  OVER_MAX_NUMBER_SIZE: `${MAX_NUMBER_SIZE}자리 이상은 입력할 수 없어요.`,
  EMPTY_NUMBER: `계산할 값을 입력해주세요!`,
  EMPTY_OPERATION: `연산자를 입력해주세요!`,
  LACK_NUMBER: `연산할 두 숫자를 입력해주세요!`,
};

const isOperator = (arg: any): arg is Operator => OPERATORS.includes(arg);
const OPERATOR_REGEX = /[X]|[/]|[+]|[-]/gi;
const getCalculatorNumberArray = (str: string) => {
  return str.replace(OPERATOR_REGEX, ',').split(',');
};
