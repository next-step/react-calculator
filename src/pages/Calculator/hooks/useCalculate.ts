import { useState, MouseEvent } from 'react';
import { NUMBER_MAX_LENGTH, Operators } from '../../../constants';

type ArithmeticOperators = Exclude<Operators, Operators.EQUALS>;

const operations: {
  [key in ArithmeticOperators]: (a: number, b: number) => number;
} = {
  [Operators.DIVIDE]: (a: number, b: number) => Math.floor(a / b),
  [Operators.MULTIPLY]: (a: number, b: number) => a * b,
  [Operators.SUBTRACT]: (a: number, b: number) => a - b,
  [Operators.ADD]: (a: number, b: number) => a + b,
};

export const useCalculate = () => {
  const [operand, setOperand] = useState<[number, number]>([0, 0]);
  const [operator, setOperator] = useState<ArithmeticOperators | null>(null);

  const clear = () => {
    setOperand([0, 0]);
    setOperator(null);
  };

  const handleOperator = (e: MouseEvent<HTMLButtonElement>) => {
    const { textContent: targetOperator } = e.currentTarget;
    if (!targetOperator) return;

    const isFirstOperandInputExist = Boolean(operand[0]);
    if (!isFirstOperandInputExist) {
      alert('숫자를 먼저 입력해주세요.');
      return;
    }

    if (targetOperator === Operators.EQUALS) {
      if (!operator) return;

      const result = operations[operator](operand[0], operand[1]);
      setOperand([result, 0]);
      setOperator(null);
      return;
    }

    if (operand[0] && operand[1]) return;
    setOperator(targetOperator as ArithmeticOperators);
  };

  const handleDigit = (e: MouseEvent<HTMLButtonElement>) => {
    const { textContent: digit } = e.currentTarget;
    if (!digit) return;

    const isFirstOperandInput = !operand[1] && !operator;
    if (isFirstOperandInput) {
      const value = operand[0] + digit;
      if (value.length > NUMBER_MAX_LENGTH) {
        alert('숫자는 3자리까지만 입력 가능합니다.');
        return;
      }

      setOperand([Number(value), operand[1]]);
    }

    if (!isFirstOperandInput) {
      const value = operand[1] + digit;
      if (value.length > NUMBER_MAX_LENGTH) {
        alert('숫자는 3자리까지만 입력 가능합니다.');
        return;
      }

      setOperand([operand[0], Number(value)]);
    }
  };

  return {
    operator,
    operand,
    clear,
    handleOperator,
    handleDigit,
  };
};
