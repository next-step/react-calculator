import { Button, useCalculator } from '@/components';
import { ControlAction, Digit, Operation } from '@/types';

import styles from './Calculator.module.css';

const digits = Object.values(Digit).reverse();
const operations = [Operation.Divide, Operation.Multiply, Operation.Subtract, Operation.Add];

export const Calculator = () => {
  const { displayValue, handleClear, handleResult, handleInputProcess } = useCalculator();

  return (
    <div className={styles.calculator}>
      <h1 className={styles.total}>{displayValue}</h1>
      <div className={styles.digits}>
        {digits.map((digit) => {
          const handleDigitClick = () => {
            handleInputProcess(digit);
          };
          return (
            <Button colorScheme="digit" onClick={handleDigitClick}>
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
        {operations.map((operation) => {
          const handleOperationClick = () => {
            handleInputProcess(operation);
          };
          return (
            <Button colorScheme="operation" onClick={handleOperationClick}>
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
