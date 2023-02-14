import AC from "./components/AC";
import Numbers from "./components/Numbers";
import Operations from "./components/Opertaions";
import Result from "./components/Result";
import useCalculate from "./hooks/useCalculate";

function App() {
  const { getResultValue, numHandler, allClear, operationHandler } =
    useCalculate();

  return (
    <div id="app">
      <div className="calculator">
        <Result displayValue={getResultValue()} />
        <Numbers numHandler={numHandler} />
        <AC allClear={allClear} />
        <Operations operationHandler={operationHandler} />
      </div>
    </div>
  );
}

export default App;
