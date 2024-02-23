import { Button, useCalculator } from '@/components';
import { ControlAction, Digit, Operation } from '@/types';

import styles from './Calculator.module.css';

const DIGITS = [
  Digit.Nine,
  Digit.Eight,
  Digit.Seven,
  Digit.Six,
  Digit.Five,
  Digit.Four,
  Digit.Three,
  Digit.Two,
  Digit.One,
  Digit.Zero,
];
const OPERATIONS = [Operation.Divide, Operation.Multiply, Operation.Subtract, Operation.Add];

export const Calculator = () => {
  const { displayValue, handleClear, handleResult, handleInputProcess } = useCalculator();
  return (
    <div className={styles.calculator}>
      <h1 className={styles.total}>{displayValue}</h1>
      <div className={styles.digits}>
        {DIGITS.map((digit) => {
          const handleDigitClick = () => {
            handleInputProcess(digit);
          };
          return (
            <Button key={digit} colorScheme="digit" onClick={handleDigitClick}>
              {digit}
            </Button>
          );
        })}
      </div>
      <div className={`${styles.modifiers} ${styles.subgrid}`}>
        <Button colorScheme="modifier" onClick={handleClear}>
          {ControlAction.Clear}
        </Button>
      </div>
      <div className={`${styles.operations} ${styles.subgrid}`}>
        {OPERATIONS.map((operation) => {
          const handleOperationClick = () => {
            handleInputProcess(operation);
          };
          return (
            <Button key={operation} colorScheme="operation" onClick={handleOperationClick}>
              {operation}
            </Button>
          );
        })}
        <Button colorScheme="operation" onClick={handleResult}>
          {ControlAction.Result}
        </Button>
      </div>
    </div>
  );
};
