import { MouseEventHandler, useRef, useState } from 'react';
import { DIGITS, OPERATION_SIGN } from '../constants';

const INITIAL_DISPLAY_VALUE = 0;
const INITIAL_OPERATION = null;
const INITIAL_OPERANDS = {
  first: INITIAL_DISPLAY_VALUE,
  second: null,
};

const calculate = (
  { operand1, operand2 }: { operand1: number; operand2: number },
  operation: (typeof OPERATION_SIGN)[keyof typeof OPERATION_SIGN],
) => {
  switch (operation) {
    case OPERATION_SIGN.addition:
      return operand1 + operand2;
    case OPERATION_SIGN.subtraction:
      return operand1 - operand2;
    case OPERATION_SIGN.division:
      return operand1 / operand2;
    case OPERATION_SIGN.multiplication:
      return operand1 * operand2;
    case OPERATION_SIGN.equals:
      return operand1;
    default:
      throw new Error('Invalid operation');
  }
};

export const useCalculator = () => {
  const [display, setDisplay] = useState(INITIAL_DISPLAY_VALUE);

  const operationRef = useRef<(typeof OPERATION_SIGN)[keyof typeof OPERATION_SIGN] | null>(
    INITIAL_OPERATION,
  );
  const operandsRef = useRef<{ first: number; second: number | null }>(INITIAL_OPERANDS);
  console.log('operandsRef.current', operandsRef.current);

  const onClickDigit = (digit: (typeof DIGITS)[number]) => {
    console.log('operandsRef.current', operandsRef.current);
    console.log('digit', digit);
    if (!operationRef.current) {
      // 첫번째 피연산자 입력
      if (operandsRef.current.first / 100 >= 1) {
        // 최대 3자리 수까지 입력 가능
        return;
      }

      operandsRef.current.first = operandsRef.current.first * 10 + digit;
      setDisplay(operandsRef.current.first);
      return;
    }

    // 두번째 피연산자 입력
    if (operandsRef.current.second === null) {
      // 두번째 피연산자 초기 입력
      operandsRef.current.second = digit;
      setDisplay(operandsRef.current.second);
      return;
    }

    if (operandsRef.current.second / 100 >= 1) {
      // 최대 3자리 수까지 입력 가능
      return;
    }

    operandsRef.current.second = operandsRef.current.second * 10 + digit;
    setDisplay(operandsRef.current.second);
  };

  const onClickModifier: MouseEventHandler<HTMLButtonElement> = () => {
    console.log('계산기 초기화');
    operationRef.current = INITIAL_OPERATION;
    // operandsRef.current.first = INITIAL_OPERANDS.first;
    // operandsRef.current.second = INITIAL_OPERANDS.second;
    operandsRef.current = INITIAL_OPERANDS;

    setDisplay(INITIAL_DISPLAY_VALUE);
  };

  const onClickOperation = (operation: (typeof OPERATION_SIGN)[keyof typeof OPERATION_SIGN]) => {
    if (operation === OPERATION_SIGN.equals) {
      const result = calculate(
        {
          operand1: operandsRef.current.first,
          operand2: operandsRef.current.second ?? operandsRef.current.first,
        },
        operationRef.current ?? OPERATION_SIGN.equals,
      );

      operationRef.current = INITIAL_OPERATION;
      operandsRef.current.first = INITIAL_OPERANDS.first;
      operandsRef.current.second = INITIAL_OPERANDS.second;
      setDisplay(result);
      return;
    }

    operationRef.current = operation;
  };

  return { display, onClickDigit, onClickModifier, onClickOperation };
};
