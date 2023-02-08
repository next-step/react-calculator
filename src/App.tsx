import { useState } from "react";
import Digits from "./components/digits";
import Modifiers from "./components/modifiers";
import Operations from "./components/operations";
import Total from "./components/total";
import "./css/index.css";

function App() {
  const [total, setTotal] = useState(0);
  const [calculate, setScalculate] = useState({
    firstNumber: 0,
    secondNumber: 0,
    operator: "",
  });
  return (
    <main id="app">
      <div className="calculator">
        <Total />
        <Digits />
        <Modifiers />
        <Operations />
      </div>
    </main>
  );
}

export default App;
