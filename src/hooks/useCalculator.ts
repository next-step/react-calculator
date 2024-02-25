import { useState } from "react";
import { Calculator as CalculatorApp } from "@/utils/calculator";
import { ERROR_MESSAGE } from "@/constants/message";
import { REGEXP } from "@/constants/regexp";
import { Operation, Operator } from "@/types/calculator";
import { OPERATION_SYMBOLS } from "@/constants/calculator";

export const useCalculator = () => {
  const calculator = new CalculatorApp();
  const [formula, setFormula] = useState('');

  const performCalculation = () => {
    const tokens = formula.split(REGEXP.OPERATOR);
    const operations = {
      '+': calculator.sum,
      '-': calculator.subtract,
      'x': calculator.multiply,
      '/': calculator.division
    };

    let index = 0;
    let currentValue = Number(tokens[index]);

    while (index < tokens.length - 1) {
      const operator = tokens[index + 1] as Operator
      const nextValue = Number(tokens[index + 2]);

      operations[operator].call(calculator, currentValue, nextValue);
      currentValue = calculator.getValue();
      index += 2;
    }

    return currentValue;
  };

  const clearFormula = () => setFormula('');

  const appendOperation = (operation: Operation) => {
    if (!REGEXP.END_WITH_NUMBER.test(formula)) {
      alert(ERROR_MESSAGE.NOT_VALID_FORMULA);
      return;
    }

    setFormula((prev) => `${prev}${OPERATION_SYMBOLS[operation]}`);
  };

  const appendNumber = (num: number) => {
    const currentFormula = formula.startsWith('0') && formula.length === 1 ? '' : formula;
    const newFormula = `${currentFormula}${num}`;

    if (REGEXP.MAX_LENGTH_NUMBER.test(newFormula)) {
      alert(ERROR_MESSAGE.MAX_LENGTH_NUMBER);
      return;
    }

    setFormula(newFormula);
  };

  const calculateAndSetFormula = () => {
    const result = performCalculation();
    setFormula(result.toString());
  };

  return {
    formula,
    clearFormula,
    appendOperation,
    appendNumber,
    calculateAndSetFormula
  };
};
