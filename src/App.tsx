import { useState } from "react";

export default function App() {
  const [total, setTotal] = useState(0);

  return (
    <div className="calculator">
      <h1 id="total">{total}</h1>
      <div className="digits flex">
        {CONST.DIGIT_LIST.map((digit) => (
          <button key={digit} className="digit">
            {digit}
          </button>
        ))}
      </div>
      <div className="modifiers subgrid">
        <button className="modifier">{CONST.MODIFIER}</button>
      </div>
      <div className="operations subgrid">
        {CONST.OPERATION_LIST.map((operation) => (
          <button key={operation} className="operation">
            {operation}
          </button>
        ))}
      </div>
    </div>
  );
}

const CONST = {
  DIGIT_LIST: Array.from({ length: 10 }, (_, index) => index).reverse(),
  OPERATION_LIST: ["/", "X", "-", "+", "="],
  MODIFIER: "AC",
};
