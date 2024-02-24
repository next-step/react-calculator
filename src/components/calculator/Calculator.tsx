import type { Digit } from '@/types';
import type { CalculatorKeyConfig } from '@/components';
import { CalculatorDisplay, CalculatorKeyLayout } from '@/components';
import { parseCalculatorKeys } from '@/services';

import styles from './Calculator.module.css';

const KEY_LAYOUT_CLASS_NAME = {
  DIGITS: styles.digits,
  MODIFIERS: `${styles.modifiers} ${styles.subgrid}`,
  OPERATORS: `${styles.operators} ${styles.subgrid}`,
};

type CalculatorProps = {
  calculatorKeys: CalculatorKeyConfig[];
  displayValue: string | Digit;
  handleInputProcess: (value: string | number) => void;
};

export const Calculator = ({ calculatorKeys, displayValue, handleInputProcess }: CalculatorProps) => {
  const { digitKey, operatorKey, allClearKey } = parseCalculatorKeys(calculatorKeys);
  return (
    <div className={styles.calculator}>
      <CalculatorDisplay>{displayValue}</CalculatorDisplay>
      <CalculatorKeyLayout className={KEY_LAYOUT_CLASS_NAME.DIGITS} keys={digitKey} onKeyClick={handleInputProcess} />
      <CalculatorKeyLayout
        className={KEY_LAYOUT_CLASS_NAME.MODIFIERS}
        keys={allClearKey}
        onKeyClick={handleInputProcess}
      />
      <CalculatorKeyLayout
        className={KEY_LAYOUT_CLASS_NAME.OPERATORS}
        keys={operatorKey}
        onKeyClick={handleInputProcess}
      />
    </div>
  );
};
