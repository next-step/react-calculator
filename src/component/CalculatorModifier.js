const CalculatorModifier = (props) => {
  return (
    <div className="modifiers subgrid">
      <button className="modifier" onClick={() => props.setTotal("0")}>
        AC
      </button>
    </div>
  );
};

export default CalculatorModifier;
