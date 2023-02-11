import { useState } from 'react';

const numbers = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
const operations = ['/', 'X', '-', '+', '='];

let needInit = false;

function App() {
  const [history, setHistory] = useState(0);
  const [currentOperation, setCurrentOperation] = useState('');
  const [expressionNumber, setExpressionNumber] = useState('');

  return (
    <div id="app">
      <div className='calculator'>
        <h1 id='total'>{expressionNumber || '0'}</h1>
        <div className='digits flex'>
          {numbers.map((number) => (
            <button key={`digit-${number}`} className='digit' onClick={() => {
              const stringNumber = String(number);
              if (needInit) {
                needInit = false;
                return setExpressionNumber(stringNumber);
              }

              if (expressionNumber.length >= 3) return;

              setExpressionNumber(expressionNumber + stringNumber);
            }}>
              {number}
            </button>)
          )}
        </div>
        <div className='modifiers subgrid'>
          <button className='modifier' onClick={() => {
            setExpressionNumber('');
            setHistory(0);
            setCurrentOperation('');
          }}>
            AC
          </button>
        </div>
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
                    if (needInit) return;

                    const result = calcNumbersWithSelectedOperation({
                      operation: currentOperation,
                      num1: history,
                      num2: Number(expressionNumber),
                    });
                    const ceiledNumber = Math.ceil(result);

                    setCurrentOperation(operation);
                    setHistory(ceiledNumber);
                    setExpressionNumber(changeToExpressionNumber(ceiledNumber));
                    needInit = true;
                  }}
                >
                  {operation}
                </button>
              );
            })
          }
        </div>
      </div>
    </div>
  );
}

interface calcNumbersWithSelectedOperationProps {
  operation: string;
  num1: number;
  num2: number;
}

function calcNumbersWithSelectedOperation({
  operation,
  num1,
  num2,
}: calcNumbersWithSelectedOperationProps) {
  if (!num1 && !num2) return 0;
  if (!num1) return num2;
  if (!num2) return num1;

  switch(operation) {
    case('+'): {
      return add(num1, num2);
    }
    case('-'): {
      return subtract(num1, num2);
    }
    case('X'): {
      return multiple(num1, num2);
    }
    case('/'): {
      return divide(num1, num2);
    }
    default: {
      return num2;
    }
  }
}

function add(num1: number, num2: number) {
  return num1 + num2;
}

function subtract(num1: number, num2: number) {
  return num1 - num2;
}

function multiple(num1: number, num2: number) {
  return num1 * num2;
}

function divide(num1: number, num2: number) {
  return num1 / num2;
}

function changeToExpressionNumber(number: number): string {
  if (number <= -Infinity || number >= Infinity) {
    return '오류';
  }

  return String(number);
}

export default App;
