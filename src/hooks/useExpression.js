import { useState } from 'react';

import { arithmetic } from '../utils/arithmetic';

import { ERROR_MESSAGE, ERROR_TEXT } from '../constants/error';

const MAX_LENGHT = 3;

const useExpression = () => {
  const [totalText, setTotalText] = useState('0');
  const [operands, setOperands] = useState([]);
  const [operations, setOperations] = useState([]);

  const resetCalculator = (result) => {
    if (!result) {
      setOperands([]);
      setOperations([]);
    }

    setOperands([result]);
    setOperations([]);
  };

  const insertErrorMessage = (message) => {
    if (message) {
      alert(message);
    }

    resetCalculator();
    setTotalText(ERROR_TEXT);
  };

  const insertOperation = (buttonValue) => {
    if (!operands[0]) {
      alert(ERROR_MESSAGE.NUMBER_FIRST);
      return;
    }

    setOperations([buttonValue]);
    setTotalText(totalText + buttonValue);
  };

  const insertOperand = (buttonValue) => {
    const counter = operations.length;

    if (operands[counter]?.length >= MAX_LENGHT) {
      alert(ERROR_MESSAGE.NUMBER_OF_EXCEPTION);
      return;
    }

    operands[counter] = operands[counter] ? operands[counter] + buttonValue : buttonValue;

    setOperands([...operands]);
    setTotalText(totalText === '0' || totalText === ERROR_TEXT ? buttonValue : totalText + buttonValue);
  };

  const insertResult = (result) => {
    if (result === Infinity) {
      insertErrorMessage();
      return;
    }

    resetCalculator(result);
    setTotalText(String(result));
  };

  const handleExpressionWrite = (event) => {
    const buttonValue = event.target.value;

    isNaN(buttonValue) ? insertOperation(buttonValue) : insertOperand(buttonValue);
  };

  const handleCalculate = () => {
    const operand = operands.map(Number);
    const operation = operations[0];

    arithmetic[operation]
      ? insertResult(arithmetic[operation]?.(operand[0], operand[1]))
      : insertErrorMessage(ERROR_MESSAGE.NOT_ALLOWED);
  };

  const handleAllClear = () => {
    insertResult('0');
  };

  return [totalText, handleExpressionWrite, handleCalculate, handleAllClear];
};

export default useExpression;
