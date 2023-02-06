import { useCalculator } from '@/store/calculator-context';

import styles from './index.module.css';

const Digits = () => {
  const { addNumber: handleNumber } = useCalculator();
  return (
    <div className={`${styles.digits} flex`}>
      {DIGIT_NUMBERS.map((n) => (
        <button
          className={styles.digit}
          key={n}
          onClick={() => handleNumber(n)}
        >
          {n}
        </button>
      ))}
    </div>
  );
};

export default Digits;

const DIGIT_NUMBERS = Array.from({ length: 10 }, (_, i) => 9 - i);
