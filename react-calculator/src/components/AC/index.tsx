interface ACProps {
  allClear: () => void;
}

const AC = ({ allClear }: ACProps) => {
  return (
    <div className="modifiers subgrid">
      <button className="modifier" onClick={allClear}>
        AC
      </button>
    </div>
  );
};

export default AC;
