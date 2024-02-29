import { MouseEventHandler, useState } from 'react';
import { DIGITS, ERROR_MESSAGE, OPERATION_SIGN } from '../constants';
import { Calculator } from '../lib/Calculator';
import { Validator } from '../lib/Validator';
import { OperationTypes } from '../types/operation';

const INITIAL_DISPLAY_VALUE = 0;
const INITIAL_CALCULATOR_STATUS = {
  display: INITIAL_DISPLAY_VALUE,
  operation: null,
  operand1: INITIAL_DISPLAY_VALUE,
  operand2: null,
};

export const useCalculator = () => {
  const [calculatorStatus, setCalculatorStatus] = useState<{
    display: string | number;
    operation: OperationTypes | null;
    operand1: number;
    operand2: number | null;
  }>(INITIAL_CALCULATOR_STATUS);

  const onClickDigit = (digit: (typeof DIGITS)[number]) => {
    if (!calculatorStatus.operation) {
      // 첫번째 피연산자 입력
      if (Validator.checkIsValidDigits(calculatorStatus.operand1 * 10 + digit)) {
        setCalculatorStatus((prev) => ({
          ...prev,
          operand1: prev.operand1 * 10 + digit,
          display: prev.operand1 * 10 + digit,
        }));
      }
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

    if (Validator.checkIsValidDigits(calculatorStatus.operand2 * 10 + digit)) {
      setCalculatorStatus((prev) => ({
        ...prev,
        operand2: prev.operand2! * 10 + digit,
        display: prev.operand2! * 10 + digit,
      }));
    }
  };

  const onClickModifier: MouseEventHandler<HTMLButtonElement> = () => {
    setCalculatorStatus(INITIAL_CALCULATOR_STATUS);
  };

  const onClickOperation = (operation: OperationTypes) => {
    if (operation === OPERATION_SIGN.equals) {
      // 결과 출력
      const result = Math.floor(
        Calculator.calculate(
          {
            operand1: calculatorStatus.operand1,
            operand2: calculatorStatus.operand2 ?? calculatorStatus.operand1,
          },
          calculatorStatus.operation ?? OPERATION_SIGN.equals,
        ),
      );

      if (Validator.checkIsError(result)) {
        setCalculatorStatus({
          ...INITIAL_CALCULATOR_STATUS,
          display: ERROR_MESSAGE,
        });
      } else {
        setCalculatorStatus({
          ...INITIAL_CALCULATOR_STATUS,
          operand1: result,
          display: result,
        });
      }

      return;
    }

    // 연산자 반영
    setCalculatorStatus((prev) => ({ ...prev, operation }));
  };

  return { calculatorStatus, onClickDigit, onClickModifier, onClickOperation };
};
