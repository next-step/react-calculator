import useCalculator from "./hooks/useCalculator";

function App() {
  const [total, setTotal] = useCalculator("0");

  return (
    <div id="app">
      <h1 id="total">{total}</h1>
      <button id="1" onClick={() => setTotal(1)}>
        1
      </button>
      <button id="2" onClick={() => setTotal(2)}>
        2
      </button>
      <button id="3" onClick={() => setTotal(3)}>
        3
      </button>
      <button id="4" onClick={() => setTotal(4)}>
        4
      </button>
      <button id="5" onClick={() => setTotal(5)}>
        5
      </button>
      <button id="6" onClick={() => setTotal(6)}>
        6
      </button>
      <button id="7" onClick={() => setTotal(7)}>
        7
      </button>
      <button id="8" onClick={() => setTotal(8)}>
        8
      </button>
      <button id="9" onClick={() => setTotal(9)}>
        9
      </button>
      <button id="0" onClick={() => setTotal(0)}>
        0
      </button>
    </div>
  );
}

export default App;
