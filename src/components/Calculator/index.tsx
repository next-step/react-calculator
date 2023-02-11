import { useCallback, useState } from 'react';

import TotalPad from '@/components/Calculator/TotalPad';
import { Operator } from '@/constants/operation';
import { calculatorMachine } from '@/model/calculator';

import ButtonSection from './ButtonSection';
import styles from './index.module.css';

export type CalculatorArgs = Operator | number | string | undefined;

const Calculator = () => {
  const [state, setState] = useState('0');
  const handleClick = useCallback(
    (args: CalculatorArgs) => () => {
      setState((prev) => calculatorMachine(prev, args));
    },
    []
  );

  return (
    <div className={styles.calculator}>
      <TotalPad computedInput={String(state)} />
      <ButtonSection onClick={handleClick} />
    </div>
  );
};

export default Calculator;
