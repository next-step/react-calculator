import { Button, useCalculator } from '@/components';
import { ControlAction, Digit, Operator } from '@/types';

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
const OPERATORS = [Operator.Divide, Operator.Multiply, Operator.Subtract, Operator.Add];

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
      <div className={`${styles.operators} ${styles.subgrid}`}>
        {OPERATORS.map((operator) => {
          const handleOperatorClick = () => {
            handleInputProcess(operator);
          };
          return (
            <Button key={operator} colorScheme="operator" onClick={handleOperatorClick}>
              {operator}
            </Button>
          );
        })}
        <Button colorScheme="operator" onClick={handleResult}>
          {ControlAction.Result}
        </Button>
      </div>
    </div>
  );
};
