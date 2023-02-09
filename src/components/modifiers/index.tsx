import { Dispatch, SetStateAction } from "react";

interface IModifiersProps {
  setCalculation: Dispatch<SetStateAction<string>>;
}

function Modifiers({ setCalculation }: IModifiersProps) {
  const modifierHandler = () => {
    setCalculation("");
  };
  return (
    <div className="modifiers subgrid">
      <button onClick={modifierHandler} className="modifier">
        AC
      </button>
    </div>
  );
}

export default Modifiers;
