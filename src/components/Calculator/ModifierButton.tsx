import { Operator, useCalculate } from './CalculatorProvider';

function AllClear() {
  const calculate = useCalculate();

  return (
    <button
      className="modifier"
      onClick={() => {
        calculate?.clearProcess();
      }}
    >
      {Operator.AllClear}
    </button>
  );
}

const ModifierButton = {
  AllClear,
};

export default ModifierButton;
