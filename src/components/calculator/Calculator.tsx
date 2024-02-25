import type { CalculatorKeyConfig } from '@/components';
import { CalculatorDisplay, CalculatorKeySet } from '@/components';
import { parseCalculatorKeys } from '@/services';

import styles from './Calculator.module.css';

const KEY_LAYOUT_CLASS_NAME = {
  DIGITS: styles.digits,
  MODIFIERS: `${styles.modifiers} ${styles.subgrid}`,
  OPERATORS: `${styles.operators} ${styles.subgrid}`,
};

type CalculatorProps = {
  keySets: CalculatorKeyConfig[];
  displayValue: string;
  handleInputProcess: (value: string | number) => void;
};

export const Calculator = ({ keySets, displayValue, handleInputProcess }: CalculatorProps) => {
  const { digitKey, operatorKey, allClearKey } = parseCalculatorKeys(keySets);
  return (
    <div className={styles.calculator}>
      <CalculatorDisplay>{displayValue}</CalculatorDisplay>
      <CalculatorKeySet className={KEY_LAYOUT_CLASS_NAME.DIGITS} keys={digitKey} onKeyClick={handleInputProcess} />
      <CalculatorKeySet
        className={KEY_LAYOUT_CLASS_NAME.MODIFIERS}
        keys={allClearKey}
        onKeyClick={handleInputProcess}
      />
      <CalculatorKeySet
        className={KEY_LAYOUT_CLASS_NAME.OPERATORS}
        keys={operatorKey}
        onKeyClick={handleInputProcess}
      />
    </div>
  );
};
