import useCalculator from "./hooks/useCalculator";

function App() {
  const [total, update, allClear] = useCalculator();

  return (
    <div id="app">
      <h1>{total}</h1>
      <button onClick={() => update("1")}>1</button>
      <button onClick={() => update("2")}>2</button>
      <button onClick={() => update("3")}>3</button>
      <button onClick={() => update("4")}>4</button>
      <button onClick={() => update("5")}>5</button>
      <button onClick={() => update("6")}>6</button>
      <button onClick={() => update("7")}>7</button>
      <button onClick={() => update("8")}>8</button>
      <button onClick={() => update("9")}>9</button>
      <button onClick={() => update("0")}>0</button>

      <button onClick={allClear}>AC</button>

      <button onClick={() => update("+")}>+</button>
      <button onClick={() => update("-")}>-</button>
      <button onClick={() => update("/")}>/</button>
      <button onClick={() => update("X")}>X</button>

      <button onClick={() => update("=")}>=</button>
    </div>
  );
}

export default App;
