import { type Operator, OPERATORS } from '@/constants/operation';

import styles from './index.module.css';

type Props = {
  onClick: (o: Operator | '=') => () => void;
};

const OperationButton = (props: Props) => {
  return (
    <div className={`${styles.operations} subgrid`}>
      {OPERATORS.map((operation) => (
        <button
          key={operation}
          className={styles.operation}
          onClick={props.onClick(operation)}
        >
          {operation}
        </button>
      ))}
      <button className={styles.operation} onClick={props.onClick('=')}>
        =
      </button>
    </div>
  );
};

export default OperationButton;
