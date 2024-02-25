import { useRef, useState } from 'react';
import { AllClear, Digits, Operations, ScreenPanel } from '@/components';
import {
  MAX_NUMBER_LENGTH,
  ERROR_MESSAGE,
  MAX_NUMBER_COUNT,
  OPERATORS,
  MIN_NUMBER_TO_CALCULATE,
  INITIAL_SCREEN_VALUE,
} from '@/constants';
import { parseExpression, calculate } from '@/utils';
import type { DigitType, OperatorType } from '@/types';

function App() {
  const [screenValue, setScreenValue] = useState(INITIAL_SCREEN_VALUE);
  const inputNum = useRef('');
  const { numbers, operator } = parseExpression(screenValue);
  const operatorLabels = OPERATORS.map(({ label }) => label as string);
  const isError = screenValue === '오류';

  const handleClickDigit = (digit: DigitType) => {
    if (inputNum.current.length >= MAX_NUMBER_LENGTH) {
      alert(ERROR_MESSAGE.MAX_NUMBER_LENGTH);
      return;
    }
    if (isError) {
      setScreenValue(`${digit}`);
      return;
    }
    const newNum = `${parseInt(`${inputNum.current}${digit}`, 10)}`;
    const newScreenValue = operator
      ? `${numbers[0]}${operator}${newNum}`
      : newNum;

    inputNum.current = newNum;
    setScreenValue(newScreenValue);
  };

  const handleClickOperator = (operator: OperatorType) => {
    if (screenValue === INITIAL_SCREEN_VALUE) {
      alert(ERROR_MESSAGE.NO_NUMBER);
      return;
    }
    if (isError) {
      setScreenValue(INITIAL_SCREEN_VALUE);
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
    setScreenValue(INITIAL_SCREEN_VALUE);
  };
  const handleClickCalculate = () => {
    inputNum.current = '';
    if (numbers.length < MIN_NUMBER_TO_CALCULATE || !operator) {
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
        <ScreenPanel value={screenValue} />
        <Digits handleClickDigit={handleClickDigit} />
        <AllClear handleClickAllClear={handleClickAllClear} />
        <Operations
          handleClickOperator={handleClickOperator}
          handleClickCalculate={handleClickCalculate}
        />
      </div>
    </div>
  );
}

export default App;
