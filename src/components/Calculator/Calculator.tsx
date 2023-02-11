import './calculator.css';

import { useCalculator } from '../../hooks/useCalculator';
import { Digit, Modifier, Operation, TotalScreen } from '../Calculator';

const Calculator = () => {
  const { appendDigit, appendOperator, calculate, reset, state } =
    useCalculator();
  return (
    <div className="calculator">
      <TotalScreen calculatorState={state} />
      <Digit appendDigit={appendDigit} />
      <Modifier reset={reset} />
      <Operation appendOperator={appendOperator} calculate={calculate} />
    </div>
  );
};

export default Calculator;
