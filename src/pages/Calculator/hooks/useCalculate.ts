import { useState, MouseEvent } from 'react';
import { Operators, operations } from '../../../constants';

export const useCalculate = () => {
  const [operand, setOperand] = useState<[number, number]>([0, 0]);
  const [operator, setOperator] = useState<Operators | null>(null);

  const clear = () => {
    setOperand([0, 0]);
    setOperator(null);
  };

  const handleOperator = (e: MouseEvent<HTMLButtonElement>) => {
    const { textContent: targetOperator } = e.currentTarget;
    if (!targetOperator) return;

    if (targetOperator === Operators.EQUALS) {
      const result = operations[operator!](operand[0], operand[1]);
      setOperand([result, 0]);
      setOperator(null);
      return;
    }
    setOperator(targetOperator as Operators);
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
