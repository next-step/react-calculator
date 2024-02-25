import { useState } from 'react';
import { BUTTON } from '../components/button/button.constant';
import { Modifier, Operator } from '../components/button/button.type';
import { Validation } from '../utils/validation';

export const useCalculator = () => {
  const [state, setState] = useState<{
    x: number;
    y: number;
    result: number;
    operator: Operator | null;
  }>({
    x: 0,
    y: 0,
    result: 0,
    operator: null,
  });

  const handleDigit = (value: number) => {
    if (!state.operator) {
      Validation.digitOverThreeDigits(state.x);

      setState((prev) => ({ ...prev, x: prev.x * 10 + value }));

      return;
    }

    Validation.digitOverThreeDigits(state.y);

    setState((prev) => ({ ...prev, y: prev.y * 10 + value }));
  };

  const reset = () => {
    setState({
      x: 0,
      y: 0,
      result: 0,
      operator: null,
    });
  };

  const handleModifier = (value: Modifier) => {
    if (value === BUTTON.MODIFIER.CHILDREN.AC.VALUE) {
      reset();
    }
  };

  const calculate = (value: Operator) => {
    if (value === BUTTON.OPERATION.CHILDREN.EQUAL.VALUE) {
      setState((prev) => {
        let result = 0;

        switch (state.operator) {
          case BUTTON.OPERATION.CHILDREN.ADD.VALUE: {
            result = prev.x + prev.y;
            Validation.add(result);

            break;
          }

          case BUTTON.OPERATION.CHILDREN.SUBTRACT.VALUE: {
            result = prev.x - prev.y;
            Validation.subtract(result);

            break;
          }

          case BUTTON.OPERATION.CHILDREN.MULTIPLY.VALUE: {
            result = prev.x * prev.y;
            Validation.multiply(result);

            break;
          }

          case BUTTON.OPERATION.CHILDREN.DIVIDE.VALUE: {
            Validation.divide(prev.y);

            result = Math.round((prev.x / prev.y) * 10) / 10;

            Validation.isInfinite(result);

            break;
          }

          default: {
            break;
          }
        }

        return {
          x: result,
          y: 0,
          result,
          operator: null,
        };
      });
    }
  };

  const handleOperator = (value: Operator) => {
    if (value !== BUTTON.OPERATION.CHILDREN.EQUAL.VALUE) {
      setState((prev) => ({ ...prev, operator: value }));

      return;
    }

    calculate(value);
  };

  return {
    result: state.result,
    current: {
      x: state.x,
      y: state.y,
    },
    operator: state.operator,
    handleDigit,
    handleOperator,
    handleModifier,
  };
};
