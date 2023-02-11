import styles from './index.module.css';

type Props = {
  computedInput: string;
};
const TotalPad = (props: Props) => {
  return <h1 className={styles.total}>{props.computedInput}</h1>;
};

export default TotalPad;
