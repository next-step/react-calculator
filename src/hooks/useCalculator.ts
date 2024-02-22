import { useState } from 'react';
import { BUTTON } from '../components/button/button.constant';
import { Operator } from '../components/button/button.type';

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

  const handleDigit = (value: number) => {
    if (!operator) {
      setNumbers((prev) => ({ ...prev, x: prev.x * 10 + value }));

      return;
    }

    setNumbers((prev) => ({ ...prev, y: prev.y * 10 + value }));
  };

  const handleModifier = (value: string) => {
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

// export const BUTTON = {
//   DIGIT: {
//     TYPE: 'digit',
//     CLASSNAME: 'digit',
//     CHILDREN: {
//       NINE: {
//         ID: 'nine',
//         VALUE: 9,
//       },
//       EIGHT: {
//         ID: 'eight',
//         VALUE: 8,
//       },
//       SEVEN: {
//         ID: 'seven',
//         VALUE: 7,
//       },
//       SIX: {
//         ID: 'six',
//         VALUE: 6,
//       },
//       FIVE: {
//         ID: 'five',
//         VALUE: 5,
//       },
//       FOUR: {
//         ID: 'four',
//         VALUE: 4,
//       },
//       THREE: {
//         ID: 'three',
//         VALUE: 3,
//       },
//       TWO: {
//         ID: 'two',
//         VALUE: 2,
//       },
//       ONE: {
//         ID: 'one',
//         VALUE: 1,
//       },
//       ZERO: {
//         ID: 'zero',
//         VALUE: 0,
//       },
//     },
//   },

//   MODIFIER: {
//     TYPE: 'modifier',
//     CLASSNAME: 'modifier',
//     CHILDREN: {
//       AC: {
//         ID: 'ac',
//         VALUE: 'AC',
//       },
//     },
//   },

//   OPERATION: {
//     TYPE: 'operation',
//     CLASSNAME: 'operation',
//     CHILDREN: {
//       DIVIDE: {
//         ID: 'divide',
//         VALUE: '/',
//       },
//       MULTIPLY: {
//         ID: 'multiply',
//         VALUE: 'X',
//       },
//       SUBTRACT: {
//         ID: 'subtract',
//         VALUE: '-',
//       },
//       ADD: {
//         ID: 'add',
//         VALUE: '+',
//       },
//       EQUAL: {
//         ID: 'equal',
//         VALUE: '=',
//       },
//     },
//   },
// } as const;
