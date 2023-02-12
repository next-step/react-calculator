interface Props {
  allClear: () => void;
}

const AC = (props: Props) => {
  const { allClear } = props;
  return (
    <div className="modifiers subgrid">
      <button className="modifier" onClick={allClear}>
        AC
      </button>
    </div>
  );
};

export default AC;
