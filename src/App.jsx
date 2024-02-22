import useCalculator from "./hooks/useCalculator";

function App() {
  const [total, update, allClear] = useCalculator();

  return (
    <div id="app">
      <div className="calculator">
        <h1 id="total">{total}</h1>
        <div className="digits">
          <button className="digit" onClick={() => update("9")}>
            9
          </button>
          <button className="digit" onClick={() => update("8")}>
            8
          </button>
          <button className="digit" onClick={() => update("7")}>
            7
          </button>
          <button className="digit" onClick={() => update("6")}>
            6
          </button>
          <button className="digit" onClick={() => update("5")}>
            5
          </button>
          <button className="digit" onClick={() => update("4")}>
            4
          </button>
          <button className="digit" onClick={() => update("3")}>
            3
          </button>
          <button className="digit" onClick={() => update("2")}>
            2
          </button>
          <button className="digit" onClick={() => update("1")}>
            1
          </button>
          <button className="digit" onClick={() => update("0")}>
            0
          </button>
        </div>

        <div className="modifiers subgrid">
          <button className="modifier" onClick={allClear}>
            AC
          </button>
        </div>

        <div className="operations subgrid">
          <button className="operation" onClick={() => update("/")}>
            /
          </button>
          <button className="operation" onClick={() => update("X")}>
            X
          </button>
          <button className="operation" onClick={() => update("-")}>
            -
          </button>
          <button className="operation" onClick={() => update("＋")}>
            ＋
          </button>
          <button className="operation" onClick={() => update("=")}>
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
