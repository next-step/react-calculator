import { Dispatch, SetStateAction } from 'react';

import { calcNumbersWithSelectedOperation } from './utils';

const operations = ['/', 'X', '-', '+', '='];

interface OperationsProps {
  historyStateBundle: [number, Dispatch<SetStateAction<number>>];
  isNeedInitStateBundle: [boolean, Dispatch<SetStateAction<boolean>>];
  currentOperationStateBundle: [string, Dispatch<SetStateAction<string>>];
  currentNumberStateBundle: [string, Dispatch<SetStateAction<string>>];
}

function Operations({
  historyStateBundle,
  isNeedInitStateBundle,
  currentNumberStateBundle,
  currentOperationStateBundle,
}: OperationsProps) {
  const [history, setHistory] = historyStateBundle;
  const [isNeedInit, setIsNeedInit] = isNeedInitStateBundle;
  const [currentNumber, setCurrentNumber] = currentNumberStateBundle;
  const [currentOperation, setCurrentOperation] = currentOperationStateBundle;

  return (
    <div className='operations subgrid'>
      {
        operations.map((operation) => {
          const id = operation === '=' ? 'equal-sign' : undefined;

          return (
            <button
              key={`operation-${operation}`}
              id={id}
              className='operation'
              onClick={() => {
                if (isNeedInit) return;

                const result = calcNumbersWithSelectedOperation({
                  operation: currentOperation,
                  num1: history,
                  num2: Number(currentNumber),
                });
                const ceiledNumber = Math.ceil(result);

                setCurrentOperation(operation);
                setHistory(ceiledNumber);
                setCurrentNumber(changeToExpressionNumber(ceiledNumber));
                setIsNeedInit(true);
              }}
            >
              {operation}
            </button>
          );
        })
      }
    </div>
  );
}

function changeToExpressionNumber(number: number): string {
  if (number <= -Infinity || number >= Infinity) {
    return '오류';
  }

  return String(number);
}

export { Operations };
