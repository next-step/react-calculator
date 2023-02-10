import { IModifiersProps } from "../../types/allProps";

function Modifiers({ setCalculation }: IModifiersProps) {
  const allClearHandler = () => {
    setCalculation("");
  };
  return (
    <div className="modifiers subgrid">
      <button onClick={allClearHandler} className="modifier">
        AC
      </button>
    </div>
  );
}

export default Modifiers;
