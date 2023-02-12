import React, { useContext } from 'react';

import Button from '../@common/Button';
import { CalculatorContext } from './Calculator';

import { REDUCER_TYPE } from '../../hooks/useCalculate';
import { MESSAGES, NUMBER_ERROR } from '../../constants/messages';
import { OPERATIONS, type OperationType } from '../../constants/calculate';
import { isValidNumber } from '../../utils/validation';

const OPERATORS = Object.keys(OPERATIONS);

const Operations = () => {
  const { total, beforeNumber, currentNumber, operator, dispatch } =
    useContext(CalculatorContext);

  const onClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const { textContent } = e.target as HTMLDivElement;
    const isCalculate = beforeNumber && currentNumber;
    const isEqual = textContent === '=';

    if (operator === '' && total === '' && currentNumber === '') {
      return alert(MESSAGES.OPERATOR.NOT_FIRST);
    }

    // operator가 비어있지 않은 상태에서 등호 기호를 누르지 않은 상황이거나
    // 계산된 값이 모두 입력되어 있지 않을 때 등호 기호를 누른 경우
    if ((operator !== '' && !isEqual) || (!isCalculate && isEqual)) {
      return;
    }

    if (isCalculate) {
      const result = OPERATIONS[operator as OperationType](
        Number(beforeNumber),
        Number(currentNumber)
      );
      dispatch({
        type: REDUCER_TYPE.CALCULATE,
        payload: isValidNumber(result!) ? result : NUMBER_ERROR,
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
