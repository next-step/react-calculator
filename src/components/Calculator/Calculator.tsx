import { useCallback, useState } from 'react';

import { ButtonSection, TotalPad } from '@/components/Calculator';
import { type Operator } from '@/constants/operator';
import { calculatorMachine } from '@/model/calculator';

import styles from './index.module.css';

export type CalculatorArgs = Operator | number | string | undefined;

const Calculator = () => {
  const [padResult, setPadResult] = useState('0');
  const handleClick = useCallback(
    (args: CalculatorArgs) => () => {
      setPadResult((prev) => calculatorMachine(prev, args));
    },
    []
  );

  return (
    <div className={styles.calculator}>
      <TotalPad computedInput={padResult} />
      <ButtonSection onClick={handleClick} />
    </div>
  );
};

export default Calculator;
