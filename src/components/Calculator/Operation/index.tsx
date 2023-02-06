import { memo } from 'react';

import { OPERATORS } from '@/constants/operation';
import { useCalculator } from '@/store/calculator-context';

import styles from './index.module.css';

const Operation = () => {
  const { addOperation: handleOperation, calculate } = useCalculator();
  return (
    <div className={`${styles.operations} subgrid`}>
      {OPERATORS.map((operation) => (
        <button
          key={operation}
          className={styles.operation}
          onClick={() => handleOperation(operation)}
        >
          {operation}
        </button>
      ))}
      <button className={styles.operation} onClick={calculate}>
        =
      </button>
    </div>
  );
};

export default memo(Operation);
