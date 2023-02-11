import { useCallback, useState } from 'react';

import TotalPad from '@/components/Calculator/TotalPad';
import { Operator } from '@/constants/operation';
import { calculatorMachine } from '@/model/calculator';

import ButtonSection from './ButtonSection';
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
