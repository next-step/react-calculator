const CalculatorModifier = ({ setTotal }) => {
  return (
    <div className="modifiers subgrid">
      <button className="modifier" onClick={() => setTotal("0")}>
        AC
      </button>
    </div>
  );
};

export default CalculatorModifier;
