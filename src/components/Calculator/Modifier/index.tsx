import { memo } from 'react';

import { useCalculator } from '@/store/calculator-context';

import styles from './index.module.css';

const Modifier = () => {
    const { reset } = useCalculator();
    return (
        <div className={`${styles.modifiers} subgrid`}>
            <button onClick={reset}>AC</button>
        </div>
    );
};

export default memo(Modifier);
