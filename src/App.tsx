import { useState } from 'react';
import DisplayNumber from './component/DisplayNumber';
import DigitNumber from './component/DigitNumber';
import OperationButton from './component/OperationButton';
import './css/index.css';

function App() {
  const operators = ['/', 'X', '-', '+', '='];
  const digitNumbers = ['9', '8', '7', '6', '5', '4', '3', '2', '1', '0'];
  const [displayNumber, setDisplayNumber] = useState('0');

  // 입력된 문자열을 숫자와 연산자로 분리하는 함수
  const splitInputString = (input: string) => input.split(/([/X+=-])/).filter(part => part !== '');

  const handleDigitNumberClick = (digitNumber: string) => {
    setDisplayNumber((prev) => {
      const splitArray = splitInputString(prev);
      const lastElement = splitArray[splitArray.length - 1];

      // 마지막 문자가 연산자로 끝날 경우
      if (operators.includes(lastElement)) {
        return prev + digitNumber;
      }

      const lastNumber = parseInt(lastElement + digitNumber, 10);
      // 마지막 숫자가 3자리가 넘어갈 경우
      if (lastNumber >= 1000) {
        alert('숫자는 세 자리까지만 입력 가능합니다!');
        return prev;
      }

      splitArray[splitArray.length - 1] = lastNumber.toString();
      return splitArray.join('');
    });
  };

  const handleOperationClick = (operator: string) => {
    setDisplayNumber((prev) => {
      if (operator === '=') {
        return calculateResult(prev);
      } else {
        return appendOperator(prev, operator);
      }
    });
  };

  const calculateResult = (input: string) => {
    const MIN_OPERANDS = 3 // 최소 입력값

    const splitArray = splitInputString(input);
    if (splitArray.length < MIN_OPERANDS) return input; // 연산을 수행할 충분한 입력값이 없는 경우

    const num1 = parseInt(splitArray[splitArray.length - 3], 10) || 0;
    const operation = splitArray[splitArray.length - 2];
    const num2 = parseInt(splitArray[splitArray.length - 1], 10) || 0;

    const operations: { [key: string]: (num1: number, num2: number) => string} = {
      '/': (num1: number, num2: number) => calResult(num1 / num2),
      'X': (num1: number, num2: number) => calResult(num1 * num2),
      '-': (num1: number, num2: number) => calResult(num1 - num2),
      '+': (num1: number, num2: number) => calResult(num1 + num2),
    };

    const calResult = (result: number) => {
      if (result === Infinity) return '오류';
      return Math.floor(result).toString();
    }

    const operationFunc = operations[operator];
    if(typeof operationFunc === 'function') {
      return operationFunc(num1, num2);
    }

    return '오류';
  };

  const appendOperator = (input: string, operator: string) => {
    const lastElement = input.slice(-1);
    if (operators.includes(lastElement)) {
      alert('숫자를 먼저 입력한 후 연산자를 입력해주세요!');
      return input;
    } else {
      return input + operator;
    }
  };

  const handleClearClick = () => setDisplayNumber('0');

  return (
      <div className="calculator">
        <DisplayNumber displayNumber={displayNumber} />
        <div className="digits flex">
          {digitNumbers.map((digitNumber, index) => (
              <DigitNumber key={index} digitNumber={digitNumber} onClick={handleDigitNumberClick} />
          ))}
        </div>
        <div className="modifiers subgrid">
          <button className="modifier" onClick={handleClearClick}>AC</button>
        </div>
        <div className="operations subgrid">
          {operators.map((operator, index) => (
              <OperationButton key={index} operator={operator} onClick={handleOperationClick} />
          ))}
        </div>
      </div>
  );
}

export default App;
