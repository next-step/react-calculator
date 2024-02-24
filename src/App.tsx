import { useRef, useState } from 'react';
import { AC, Digits, Operations, Screen } from '@/components';
import {
  MAX_NUMBER_LENGTH,
  ERROR_MESSAGE,
  MAX_NUMBER_COUNT,
  OPERATORS,
} from '@/constants';
import { parseExpression, calculate } from '@/utils';
import type { OperatorType } from '@/types';

function App() {
  const [screenValue, setScreenValue] = useState('0');
  const inputNum = useRef('');
  const { numbers, operator } = parseExpression(screenValue);
  const operatorLabels = OPERATORS.map(({ label }) => label as string);
  const isError = screenValue === '오류';

  const handleClickDigit = (digit: number) => {
    if (inputNum.current.length >= MAX_NUMBER_LENGTH) {
      alert(ERROR_MESSAGE.MAX_NUMBER_LENGTH);
      return;
    }
    if (isError) {
      setScreenValue(`${digit}`);
      return;
    }
    const newNum = Number(`${inputNum.current}${digit}`).toString();
    const newScreenValue = operator
      ? `${numbers[0]}${operator}${newNum}`
      : newNum;

    inputNum.current = newNum;
    setScreenValue(newScreenValue);
  };

  const handleClickOperator = (operator: OperatorType) => {
    if (screenValue === '0') {
      alert(ERROR_MESSAGE.NO_NUMBER);
      return;
    }
    if (isError) {
      setScreenValue('0');
      return;
    }
    if (numbers.length >= MAX_NUMBER_COUNT) {
      alert(ERROR_MESSAGE.MAX_NUMBER_COUNT);
      return;
    }

    inputNum.current = '';
    const newScreenValue = operatorLabels.includes(
      screenValue[screenValue.length - 1]
    )
      ? `${screenValue.slice(0, -1)}${operator}`
      : `${screenValue}${operator}`;
    setScreenValue(newScreenValue);
  };
  const handleClickAllClear = () => {
    inputNum.current = '';
    setScreenValue('0');
  };
  const handleClickCalculate = () => {
    inputNum.current = '';
    if (numbers.length < 2 || !operator) {
      setScreenValue(`${numbers[0]}`);
      return;
    }
    const result = calculate(numbers, operator);
    const newScreenValue = !Number.isFinite(result) ? '오류' : `${result}`;
    setScreenValue(newScreenValue);
  };
  return (
    <div id='app'>
      <div className='calculator'>
        <Screen value={screenValue} />
        <Digits handleClickDigit={handleClickDigit} />
        <AC handleClickAllClear={handleClickAllClear} />
        <Operations
          handleClickOperator={handleClickOperator}
          handleClickCalculate={handleClickCalculate}
        />
      </div>
    </div>
  );
}

export default App;
