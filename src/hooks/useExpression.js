import { useState } from 'react';

import { arithmetic } from '../utils/arithmetic';

const useExpression = () => {
  const [expression, setExpression] = useState({ number: [], operation: [], counter: 0 });

  const writeExpression = (buttonValue, totalText) => {
    const { number, operation } = expression;
    let counter = expression.counter;

    if (isNaN(buttonValue) && !number[counter]) {
      alert('숫자를 먼저 입력한 후 연산자를 입력해주세요!');
      return totalText;
    }

    if (isNaN(buttonValue)) {
      operation.push(buttonValue);
      counter = counter + 1;
    }

    if (!isNaN(buttonValue)) {
      number[counter] = number[counter] ? number[counter] + buttonValue : buttonValue;
    }

    setExpression({ number, operation, counter });
    return buttonValue;
  };

  const calculateExpression = () => {
    const number = expression.number.map(Number);
    const operation = expression.operation[0];

    const result = arithmetic(number[0], number[1], operation);

    if (result === '') {
      setExpression({ number: [], operation: [], counter: 0 });
      return result;
    }

    setExpression({ number: [result], operation: [], counter: 0 });
    return result;
  };

  return [writeExpression, calculateExpression];
};

export default useExpression;
