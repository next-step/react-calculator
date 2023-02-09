import { useState } from 'react';
import { calculate, validateOperand } from '../domain/calculator';

import type { CalculatorState, Operator } from '../types/calculator';

const initialCalculatorState: CalculatorState = {
  result: 0,
  operand: null,
  operator: null,
};

const useCalculator = () => {
  const [calculatorState, setCalculatorState] = useState<CalculatorState>(initialCalculatorState);

  console.log(calculatorState);

  const clickOperand = (operand: number) => () => {
    try {
      if (calculatorState.operand === null) {
        setCalculatorState((prev) => ({ ...prev, operand }));
        return;
      }

      const concatOperand = String(calculatorState.operand) + String(operand);

      validateOperand(Number(concatOperand));

      setCalculatorState((prev) => ({ ...prev, operand: Number(concatOperand), operator: calculatorState.operator }));
    } catch (error) {
      alert(error);
    }
  };

  const clickOperator = (operator: Operator) => () => {
    const states = [calculatorState.result, calculatorState.operand, calculatorState.operator];
    if (states.every((state) => state !== null)) {
      setCalculatorState({
        result: calculate(calculatorState),
        operand: null,
        operator,
      });
      return;
    }

    setCalculatorState({
      result: calculatorState.operand ?? calculatorState.result,
      operand: null,
      operator,
    });
  };

  const clickModifier = () => {
    setCalculatorState(initialCalculatorState);
  };

  return { calculatorState, clickOperand, clickOperator, clickModifier };
};

export default useCalculator;
