import styles from './index.module.css';

type Props = {
  onClick: (arg: string) => () => void;
};

const AllClearButton = (props: Props) => {
  return (
    <div className={`${styles.modifiers} subgrid`}>
      <button onClick={props.onClick('clear')}>AC</button>
    </div>
  );
};

export default AllClearButton;
