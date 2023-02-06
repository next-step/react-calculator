import { CalculatorProvider } from '@/store/CalculatorProvider';

import Digit from './Digit';
import styles from './index.module.css';
import Modifier from './Modifier';
import Operation from './Operation';
import TotalPad from './TotalPad';

const Calculator = () => {
  return (
    <div className={styles.calculator}>
      <CalculatorProvider>
        <TotalPad />
        <Digit />
        <Modifier />
        <Operation />
      </CalculatorProvider>
    </div>
  );
};

export default Calculator;
