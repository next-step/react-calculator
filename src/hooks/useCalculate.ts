import { useCallback, useRef, useState } from 'react';
import { operations } from '../constants';
import { calculate } from '../utils';

const useCalculate = () => {
  const [total, setTotal] = useState<number>(0);

  const operatorRef = useRef<((next: number) => number) | null>();
  const prevNumberRef = useRef<number | null>(null);

  const operate = (operation: keyof typeof operations) => {
    const isClickOperationBefore = prevNumberRef.current === null;

    if (operations[operation] === operations.SUBTRACT) {
      setTotal(-total);
      prevNumberRef.current = -total;
      return;
    }

    if (isClickOperationBefore) {
      operatorRef.current = calculate[operation](total);
      return;
    }

    const nextTotalValue = operatorRef.current
      ? Math.floor(operatorRef.current(total))
      : total;

    operatorRef.current = calculate[operation](nextTotalValue);
    setTotal(nextTotalValue);
    prevNumberRef.current = null;
  };

  const isLimitLength = (number: number) => {
    const LIMIT_NUMBER_LENGTH = 3;

    return Math.abs(number).toString().length >= LIMIT_NUMBER_LENGTH;
  };

  const insertDigit = useCallback((digit: number) => {
    const prevNumber = prevNumberRef.current;

    setTotal((prevTotal) => {
      if (prevNumber === null) {
        prevNumberRef.current = digit;
        return digit;
      }

      if (isLimitLength(prevTotal)) {
        prevNumberRef.current = prevTotal;
        return prevTotal;
      }

      const newNumber =
        prevNumber < 0 ? prevNumber * 10 - digit : prevNumber * 10 + digit;

      prevNumberRef.current = newNumber;
      return newNumber;
    });
  }, []);

  const clear = useCallback(() => {
    setTotal(0);
    operatorRef.current = null;
    prevNumberRef.current = null;
  }, [setTotal]);

  return {
    total,
    insertDigit,
    operate,
    clear,
  };
};

export default useCalculate;
