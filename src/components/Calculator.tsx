import { useReducer } from 'react';

import Button from './Button';

import { OPERATION, DIGIT, MAX_LENGTH } from 'constant';
import { calculate } from 'utils';
import type { ValueOf } from 'types';

type Digit = ValueOf<typeof DIGIT>;
type Operation = ValueOf<typeof OPERATION>;

interface ICalculator {
  total: number;
  addend: number;
  augend: number;
  accumulator: string;
  operation: Operation | null;
}

const initialState: ICalculator = {
  total: 0,
  addend: 0,
  augend: 0,
  accumulator: '0',
  operation: null,
};

type Action =
  | {
      type: 'digit';
      payload: Digit;
    }
  | {
      type: 'operation';
      payload: Operation;
    }
  | {
      type: 'calculate';
    }
  | {
      type: 'clear';
    };

function reducer(state: ICalculator, action: Action) {
  const { operation, addend, augend } = state;

  switch (action.type) {
    case 'digit':
      if (!operation) {
        const newAugend = Number('' + augend + action.payload);
        const newAccumulator = String(newAugend);

        return {
          ...state,
          augend: newAugend,
          accumulator: newAccumulator,
        };
      } else {
        const newAddend = Number('' + addend + action.payload);
        const newAccumulator = augend + operation + newAddend;

        return {
          ...state,
          addend: newAddend,
          accumulator: newAccumulator,
        };
      }
    case 'operation': {
      const newAccumulator = augend + action.payload;

      return {
        ...state,
        operation: action.payload,
        accumulator: newAccumulator,
      };
    }
    case 'calculate':
      if (!operation) {
        throw new Error('Missing Operation');
      }

      const total = calculate(augend, addend, operation);

      return {
        ...state,
        total,
        operation: null,
        augend: total,
        addend: 0,
        accumulator: String(total),
      };
    case 'clear':
      return {
        ...initialState,
      };
    default:
      throw new Error('Unhandled Action type');
  }
}

function Calculator() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { accumulator, augend, addend, operation } = state;

  const handleDigitButton: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    if (!operation && String(augend).length >= MAX_LENGTH) {
      alert('숫자는 세 자리까지만 입력 가능합니다!');
      return;
    }

    if (operation && String(addend).length >= MAX_LENGTH) {
      alert('숫자는 세 자리까지만 입력 가능합니다!');
      return;
    }

    const digit = e.currentTarget.textContent as Digit;
    dispatch({ type: 'digit', payload: digit });
  };

  const handleOperationButton: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    const operation = e.currentTarget.textContent as Operation;
    const isCalcultateOperation = operation === OPERATION.CALCULATE;

    if (isCalcultateOperation) {
      dispatch({ type: 'calculate' });
      return;
    }

    dispatch({ type: 'operation', payload: operation });
  };

  const handleModifierButton: React.MouseEventHandler<HTMLButtonElement> = () => {
    dispatch({ type: 'clear' });
  };

  return (
    <div className="calculator">
      <h1 id="total">{accumulator}</h1>
      <div className="digits flex">
        {Object.values(DIGIT).map((digit) => (
          <Button key={digit} className="digit" onClick={handleDigitButton}>
            {digit}
          </Button>
        ))}
      </div>
      <div className="modifiers subgrid">
        <Button className="modifier" onClick={handleModifierButton}>
          AC
        </Button>
      </div>
      <div className="operations subgrid">
        {Object.values(OPERATION).map((operation) => (
          <Button key={operation} className="operation" onClick={handleOperationButton}>
            {operation}
          </Button>
        ))}
      </div>
    </div>
  );
}

export default Calculator;
