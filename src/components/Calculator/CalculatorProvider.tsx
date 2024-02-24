import { PropsWithChildren, createContext, useContext, useState } from 'react';
import calculateHelper from './calculateHelper';
import useValidation from './useValidation';

export enum Operator {
  Add = '+',
  Subtract = '-',
  Multiply = '*',
  Divide = '/',
  Equal = '=',
  AllClear = 'AC',
}

export type Digit = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export type Process = (number | Operator)[];

export type ErrorMessage = 'Error';

interface Context {
  appendNumberToProcess: (value: Digit) => void;
  appendOpretionToProcess: (value: Operator) => void;
  process: Process;
  clearProcess: () => void;
  caculateProcess: () => void;
  display: Process | number | string;
}

export const CalculateContext = createContext<Context | null>(null);

function CalculateProvider({ children }: PropsWithChildren) {
  const [process, setProcess] = useState<Process>([]);
  const { calculate } = calculateHelper(process);
  const {
    isProcessEndsWithOperator,
    isRecentNumberThreeDigitsInProcess,
    isOperatorFirstInProcess,
    processHasOperator,
  } = useValidation(process);

  const appendNumberToProcess = (value: Digit) => {
    if (isRecentNumberThreeDigitsInProcess()) {
      alert('숫자는 한번에 최대 3자리 수까지 입력 가능하다.');
      return;
    }
    setProcess([...process, value]);
  };

  const appendOpretionToProcess = (value: Operator) => {
    if (isOperatorFirstInProcess()) {
      setProcess([0, value]);
      return;
    }

    if (processHasOperator()) {
      alert('두 숫자만 계산이 가능하다.');
      return;
    }

    if (isProcessEndsWithOperator()) {
      alert('연산자는 연속으로 입력할 수 없다.');
      return;
    }
    setProcess([...process, value]);
  };

  const clearProcess = () => {
    setProcess([]);
  };

  const caculateProcess = () => {
    if (isProcessEndsWithOperator()) {
      alert('연산자로 끝나면 안된다.');
      clearProcess();
      return;
    }

    const result = calculate();
    const floorResult = Math.floor(result);

    return setProcess([floorResult]);
  };

  const display = (() => {
    const isProcessNotStarted = process.length === 0;

    if (isProcessNotStarted) return 0;

    const isFiniteValue = process.some((item) => isFinite(item as number));

    if (isFiniteValue) {
      return process;
    } else {
      return '오류';
    }
  })();

  const context: Context = {
    appendNumberToProcess,
    appendOpretionToProcess,
    process,
    clearProcess,
    caculateProcess,
    display,
  };

  return <CalculateContext.Provider value={context}>{children}</CalculateContext.Provider>;
}

function useCalculate() {
  return useContext(CalculateContext);
}

export { CalculateProvider, useCalculate };
