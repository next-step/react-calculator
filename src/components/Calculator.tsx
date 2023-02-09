import Button from './Button';

import useCalculator from 'hooks/useCalculator';

import { OPERATION, DIGIT, MAX_LENGTH, ERROR_MESSAGE } from 'constant';
import type { ValueOf } from 'types';

type Digit = ValueOf<typeof DIGIT>;
type Operation = ValueOf<typeof OPERATION>;

function Calculator() {
  const { calculator, calculate, clear, setOperand, setOperation } = useCalculator();
  const { accumulator, augend, addend, operation } = calculator;

  const handleDigitButton: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    if (!operation && String(augend).length >= MAX_LENGTH) {
      alert(ERROR_MESSAGE.MAX_LENGTH);
      return;
    }

    if (operation && String(addend).length >= MAX_LENGTH) {
      alert(ERROR_MESSAGE.MAX_LENGTH);
      return;
    }

    const digit = e.currentTarget.textContent as Digit;
    setOperand(digit);
  };

  const handleOperationButton: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    if (!augend) {
      alert(ERROR_MESSAGE.NUMBER_FIRST);
      return;
    }

    const operation = e.currentTarget.textContent as Operation;
    const isCalcultateOperation = operation === OPERATION.CALCULATE;

    if (isCalcultateOperation) {
      calculate();
      return;
    }

    setOperation(operation);
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
        <Button className="modifier" onClick={clear}>
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
