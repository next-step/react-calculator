import React, { useContext } from 'react';

import Button from '../@common/Button';
import { CalculatorContext } from './Calculator';

import { REDUCER_TYPE } from '../../hooks/useCalculate';
import { MESSAGES } from '../../constants/messages';
import {
  OPERATORS,
  OPERATIONS,
  type OperationType,
} from '../../constants/calculate';

const Operations = () => {
  const { total, beforeNumber, currentNumber, operator, dispatch } =
    useContext(CalculatorContext);

  const onClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const { textContent } = e.target as HTMLDivElement;

    if (operator === '' && total === '' && currentNumber === '') {
      return alert(MESSAGES.OPERATOR.NOT_FIRST);
    }
    if (operator !== '' && textContent !== '=') {
      return;
    }
    if (!(beforeNumber && currentNumber) && textContent === '=') {
      return;
    }

    if (beforeNumber && currentNumber) {
      const result = OPERATIONS[operator as OperationType](
        Number(beforeNumber),
        Number(currentNumber)
      );
      dispatch({
        type: REDUCER_TYPE.CALCULATE,
        payload: result,
      });
      return;
    }

    dispatch({
      type: REDUCER_TYPE.INPUT_OPERATOR,
      payload: {
        total: currentNumber
          ? currentNumber + textContent
          : total + textContent,
        operator: textContent,
        beforeNumber: currentNumber,
      },
    });
    dispatch({ type: REDUCER_TYPE.RESET_CURRENT_NUMBER });
  };

  return (
    <div className="operations subgrid" onClick={onClick}>
      {OPERATORS.map((operator) => (
        <Button key={operator} className="digit">
          {operator}
        </Button>
      ))}
    </div>
  );
};

export default Operations;
