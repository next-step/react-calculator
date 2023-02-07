import { useCallback, useRef, useState } from 'react';
import { operations } from '../constants';
import { calculate } from '../utils';

const useCalculate = () => {
  const [total, setTotal] = useState<number | null>(null);

  const operatorRef = useRef<(next: number) => number>();
  const inputCountRef = useRef<number>(0);

  const handleOperationClick = (operation: keyof typeof operations) => {
    if (total === null) return;

    if (inputCountRef.current === 0) {
      operatorRef.current = calculate[operation](total);
      return;
    }

    const nextTotalValue = operatorRef.current
      ? Math.floor(operatorRef.current(total))
      : total;

    setTotal(nextTotalValue);
    operatorRef.current = calculate[operation](nextTotalValue);

    inputCountRef.current = 0;
  };

  const handleDigitClick = useCallback((digit: number) => {
    const count = inputCountRef.current;

    setTotal((prevTotal) => {
      if (!prevTotal) return digit;

      if (count === 0) {
        return digit;
      }
      if (count >= 3) return prevTotal;
      return prevTotal * 10 + digit;
    });

    inputCountRef.current = count + 1;
  }, []);

  const handleClearClick = useCallback(() => {
    setTotal(null);
    operatorRef.current = undefined;
    inputCountRef.current = 0;
  }, [setTotal]);

  return {
    total,
    handleDigitClick,
    handleOperationClick,
    handleClearClick,
  };
};

export default useCalculate;
