import { useCalculator } from '@/store/calculator-context';

import styles from './index.module.css';

const TotalPad = () => {
    const { computedInput } = useCalculator();

    return <h1 className={styles.total}>{computedInput}</h1>;
};

export default TotalPad;
