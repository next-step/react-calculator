import {
  Dispatch,
  SetStateAction,
  MouseEvent,
  useState,
  useEffect,
} from "react";

interface IDigitsProps {
  calculation: string;
  setCalculation: Dispatch<SetStateAction<string>>;
}

function Digits({ calculation, setCalculation }: IDigitsProps) {
  const [digits, setDigits] = useState("");
  const digitHandler = (e: MouseEvent<HTMLButtonElement>) => {
    if (digits.length < 3) {
      setDigits(digits + e.currentTarget.innerText);
      setCalculation(calculation + e.currentTarget.innerText);
    } else {
      alert("최대 3자리수 까지 입력 가능합니다!");
    }
  };
  useEffect(() => {
    if (calculation === "") {
      setDigits("");
    }
  }, [calculation]);
  console.log(digits);
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
