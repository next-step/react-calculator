import { useContext } from "react";
import { ContextTotal } from "../context/ContextTotal";

const CalculatorModifier = () => {
  const { setTotal } = useContext(ContextTotal);

  return (
    <div className="modifiers subgrid">
      <button className="modifier" onClick={() => setTotal("0")}>
        AC
      </button>
    </div>
  );
};

export default CalculatorModifier;
