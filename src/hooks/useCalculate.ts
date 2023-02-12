import { useRef, useState } from 'react';
import { OPERATORS, Operation } from '../constants';
import { calculations, isNumber, isOperator } from '../utils';

const useCalculate = () => {
  const [result, setResult] = useState<number | null>(null);
  const prevNumberRef = useRef<number | null>(null);
  const operatorRef = useRef<Exclude<Operation, '='> | null>(null);
  const isPositive = useRef(true);
  const isDirty = result !== null;

  const handleDigit = (digit: number) => {
    setResult((prev) => {
      if (prev === null) {
        return digit;
      }

      const newNumber = prev * 10 + digit;
      return newNumber < 1000 ? newNumber : prev;
    });
  };

  const handleOperator = (input: Operation) => {
    if (!isDirty) {
      if (input === OPERATORS.SUBTRACT) {
        isPositive.current = false;
      }
      if (input === OPERATORS.ADD) {
        isPositive.current = true;
      }
      return;
    }

    if (input === OPERATORS.EQUAL) {
      if (operatorRef.current === null) return;
      if (prevNumberRef.current === null) return;

      const calculate = calculations[operatorRef.current];
      const newResult = calculate(prevNumberRef.current, result);
      clear();
      setResult(newResult);
      return;
    }

    /**
     * 이전연산자가 없는 경우 (초기상태)
     */
    if (operatorRef.current === null) {
      prevNumberRef.current = isPositive.current ? result : -result;
      operatorRef.current = input;
      setResult(null);
      return;
    }

    const calculate = calculations[operatorRef.current];
    const newResult = calculate(prevNumberRef.current ?? 0, result);
    prevNumberRef.current = newResult;
    operatorRef.current = input;
    setResult(null);
  };

  const handleInput = (input: string | number) => {
    if (isOperator(input)) {
      handleOperator(input);
      return;
    }

    if (isNumber(input)) {
      handleDigit(input);
    }
  };

  const clear = () => {
    isPositive.current = true;
    prevNumberRef.current = null;
    operatorRef.current = null;
    setResult(null);
  };

  const total = result !== null ? result : prevNumberRef.current ?? 0;

  return {
    clear,
    handleInput,
    result: total,
  };
};

export default useCalculate;
