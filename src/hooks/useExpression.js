import { useState } from 'react';

import { arithmetic } from '../utils/arithmetic';

import { INPUT_NUMBER_FIRST_MESSAGE, NUMBER_OF_EXCEPTION_MESSAGE } from '../constants/error';

const useExpression = () => {
  const [expression, setExpression] = useState({ number: [], operation: [], counter: 0 });

  const writeExpression = (buttonValue, totalText) => {
    const { number, operation } = expression;
    let counter = expression.counter;

    if (isNaN(buttonValue) && !number[counter]) {
      alert(INPUT_NUMBER_FIRST_MESSAGE);
      return totalText;
    }

    if (isNaN(buttonValue)) {
      operation.push(buttonValue);
      counter = counter + 1;
    }

    if (number[counter] && number[counter].length >= 3) {
      alert(NUMBER_OF_EXCEPTION_MESSAGE);
      return '';
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

    return resetExpression(result);
  };

  const resetExpression = (result = '') => {
    if (result === '') {
      setExpression({ number: [], operation: [], counter: 0 });
      return 0;
    }

    setExpression({ number: [result], operation: [], counter: 0 });
    return result;
  };

  return [writeExpression, calculateExpression, resetExpression];
};

export default useExpression;
