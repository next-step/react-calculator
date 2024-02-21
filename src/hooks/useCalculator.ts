import { useCallback, useRef, useState } from "react";
import { Calculator } from "../calculator/calculator";

export default function useCalculator() {
  const { current: calculator } = useRef<Calculator>(new Calculator());

  const [result, setResult] = useState("0");

  const pressNumber = useCallback(function pressNumber(numberText: string) {
    calculator.pressNumber(numberText);
    setResult(calculator.getDisplayValue());
  }, []);

  const calculate = useCallback(function calculate() {
    calculator.calculate();
    setResult(calculator.getDisplayValue());
  }, []);

  const pressOperator = useCallback(function pressOperator(
    operatorSymbol: "+" | "-" | "*" | "/"
  ) {
    calculator.pressOperator(operatorSymbol);
    setResult(calculator.getDisplayValue());
  },
  []);

  const allClear = useCallback(function allClear() {
    calculator.allClear();
    setResult(calculator.getDisplayValue());
  }, []);

  return {
    result,
    pressNumber,
    calculate,
    pressOperator,
    allClear,
  } as const;
}
