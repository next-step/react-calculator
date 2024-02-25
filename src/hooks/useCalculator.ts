import { MouseEventHandler, useState } from 'react';
import { DIGITS, OPERATION_SIGN } from '../constants';
import { checkIsValidDigits } from '../utils/checkDigits';

const INITIAL_DISPLAY_VALUE = 0;
const INITIAL_CALCULATOR_STATUS = {
  display: INITIAL_DISPLAY_VALUE,
  operation: null,
  operand1: INITIAL_DISPLAY_VALUE,
  operand2: null,
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
  const [calculatorStatus, setCalculatorStatus] = useState<{
    display: number;
    operation: (typeof OPERATION_SIGN)[keyof typeof OPERATION_SIGN] | null;
    operand1: number;
    operand2: number | null;
  }>(INITIAL_CALCULATOR_STATUS);

  const onClickDigit = (digit: (typeof DIGITS)[number]) => {
    if (!calculatorStatus.operation) {
      // 첫번째 피연산자 입력
      if (!checkIsValidDigits(calculatorStatus.operand1 * digit)) {
        // 최대 3자리 수까지 입력 가능
        return;
      }

      setCalculatorStatus((prev) => ({
        ...prev,
        operand1: prev.operand1 * 10 + digit,
        display: prev.operand1 * 10 + digit,
      }));
      return;
    }

    // 두번째 피연산자 입력
    if (calculatorStatus.operand2 === null) {
      // 두번째 피연산자 초기 입력
      setCalculatorStatus((prev) => ({
        ...prev,
        operand2: digit,
        display: digit,
      }));
      return;
    }

    if (!checkIsValidDigits(calculatorStatus.operand2 * digit)) {
      // 최대 3자리 수까지 입력 가능
      return;
    }

    setCalculatorStatus((prev) => ({
      ...prev,
      operand2: prev.operand2! * 10 + digit,
      display: prev.operand2! * 10 + digit,
    }));
  };

  const onClickModifier: MouseEventHandler<HTMLButtonElement> = () => {
    setCalculatorStatus(INITIAL_CALCULATOR_STATUS);
  };

  const onClickOperation = (operation: (typeof OPERATION_SIGN)[keyof typeof OPERATION_SIGN]) => {
    if (operation === OPERATION_SIGN.equals) {
      // 결과 출력
      const result = Math.floor(
        calculate(
          {
            operand1: calculatorStatus.operand1,
            operand2: calculatorStatus.operand2 ?? calculatorStatus.operand1,
          },
          calculatorStatus.operation ?? OPERATION_SIGN.equals,
        ),
      );

      setCalculatorStatus({
        ...INITIAL_CALCULATOR_STATUS,
        operand1: result,
        display: result,
      });
      return;
    }

    // 연산자 반영
    setCalculatorStatus((prev) => ({ ...prev, operation }));
  };

  return { calculatorStatus, onClickDigit, onClickModifier, onClickOperation };
};
