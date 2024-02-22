import { useState } from 'react';
import { BUTTON } from '../components/button/button.constant';
import { Digit, Modifier, Operator } from '../components/button/button.type';

export const useCalculator = () => {
  const [numbers, setNumbers] = useState<{
    x: number;
    y: number;
    result: number;
  }>({
    x: 0,
    y: 0,
    result: 0,
  });

  const [operator, setOperator] = useState<Operator | null>(null);

  const handleDigit = (value: Digit) => {
    if (!operator) {
      setNumbers((prev) => ({ ...prev, x: prev.x * 10 + value }));

      return;
    }

    setNumbers((prev) => ({ ...prev, y: prev.y * 10 + value }));
  };

  const handleModifier = (value: Modifier) => {
    if (value === BUTTON.MODIFIER.CHILDREN.AC.VALUE) {
      setNumbers({
        x: 0,
        y: 0,
        result: 0,
      });
      setOperator(null);
    }
  };

  const handleOperator = (value: Operator) => {
    if (operator) {
      setNumbers((prev) => {
        let result = 0;

        switch (operator) {
          case BUTTON.OPERATION.CHILDREN.ADD.VALUE:
            result = prev.x + prev.y;
            break;

          case BUTTON.OPERATION.CHILDREN.SUBTRACT.VALUE:
            result = prev.x - prev.y;
            break;

          case BUTTON.OPERATION.CHILDREN.MULTIPLY.VALUE:
            result = prev.x * prev.y;
            break;

          case BUTTON.OPERATION.CHILDREN.DIVIDE.VALUE:
            result = Math.round((prev.x / prev.y) * 10) / 10;
            break;

          default:
            break;
        }

        return {
          x: result,
          y: 0,
          result,
        };
      });
    }

    setOperator(value);
  };

  return {
    result: numbers.result,
    current: {
      x: numbers.x,
      y: numbers.y,
    },
    operator,
    handleDigit,
    handleOperator,
    handleModifier,
  };
};
