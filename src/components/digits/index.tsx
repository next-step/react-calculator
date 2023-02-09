import { Dispatch, SetStateAction, MouseEvent } from "react";

interface IDigitsProps {
  calculation: string;
  setCalculation: Dispatch<SetStateAction<string>>;
}

function Digits({ calculation, setCalculation }: IDigitsProps) {
  const digitHandler = (e: MouseEvent<HTMLButtonElement>) => {
    setCalculation(calculation + e.currentTarget.innerHTML);
  };
  return (
    <div className="digits flex">
      <button onClick={digitHandler} className="digit">
        9
      </button>
      <button onClick={digitHandler} className="digit">
        8
      </button>
      <button onClick={digitHandler} className="digit">
        7
      </button>
      <button onClick={digitHandler} className="digit">
        6
      </button>
      <button onClick={digitHandler} className="digit">
        5
      </button>
      <button onClick={digitHandler} className="digit">
        4
      </button>
      <button onClick={digitHandler} className="digit">
        3
      </button>
      <button onClick={digitHandler} className="digit">
        2
      </button>
      <button onClick={digitHandler} className="digit">
        1
      </button>
      <button onClick={digitHandler} className="digit">
        0
      </button>
    </div>
  );
}

export default Digits;
