import { MouseEvent } from 'react';

import { OPERATORS, ERROR_RESULT } from '../../constants/calculator';
import { ADD, SUBTRACT, DIVIDE, MULTIPLY, EQUAL, OperatorActions, useCalculator } from '../../context/calculator';
import { Operator } from '../../types/calculator';

const OPERATOR_ACTION_MAPPER: Record<Operator, OperatorActions> = {
  [OPERATORS.PLUS]: ADD,
  [OPERATORS.MINUS]: SUBTRACT,
  [OPERATORS.MULTIPLY]: MULTIPLY,
  [OPERATORS.DIVIDE]: DIVIDE,
  [OPERATORS.EQUAL]: EQUAL,
};

const Operators = () => {
  const {
    state: { operand1 },
    dispatch,
  } = useCalculator();

  const handleClickOperator = (e: MouseEvent<HTMLDivElement>) => {
    if (!(e.target instanceof HTMLButtonElement)) return;

    const { operator } = e.target.dataset;
    if (operator === undefined) return;

    dispatch({ type: OPERATOR_ACTION_MAPPER[operator as Operator], payload: operator as Operator });
  };

  return (
    <div className="operators subgrid" onClick={handleClickOperator}>
      {Object.values(OPERATORS).map((operator) => {
        return (
          <button key={operator} className="operator" disabled={operand1 === ERROR_RESULT} data-operator={operator}>
            {operator}
          </button>
        );
      })}
    </div>
  );
};

export default Operators;
