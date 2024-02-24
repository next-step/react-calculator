import { useState, MouseEvent } from 'react';
import { Operators } from '../../../constants';

export const useCalculate = () => {
  const [operand, setOperand] = useState<[number, number]>([0, 0]);
  const [operator, setOperator] = useState<Operators | null>(null);

  const clear = () => {
    setOperand([0, 0]);
    setOperator(null);
  };

  const handleOperator = (e: MouseEvent<HTMLButtonElement>) => {
    const { textContent: operator } = e.currentTarget;
    if (!operator) return;

    if (operator === Operators.EQUALS) {
      // 연산
      return;
    }

    setOperator(operator as Operators);
  };

  const handleDigit = (e: MouseEvent<HTMLButtonElement>) => {
    const { textContent: digit } = e.currentTarget;
    if (!digit) return;

    const isFirstOperandInput = !operand[1] && !operator;
    if (isFirstOperandInput) {
      const value = operand[0] + digit;

      setOperand([Number(value), operand[1]]);
    }

    if (!isFirstOperandInput) {
      const value = operand[1] + digit;

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
