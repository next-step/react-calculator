import './App.css';

function App() {
  return (
    <div id="app">
      <div className="calculator">
        <h1 id="total">0</h1>
        <div className="digits flex">
          <button type="button" className="digit">
            9
          </button>
          <button type="button" className="digit">
            8
          </button>
          <button type="button" className="digit">
            7
          </button>
          <button type="button" className="digit">
            6
          </button>
          <button type="button" className="digit">
            5
          </button>
          <button type="button" className="digit">
            4
          </button>
          <button type="button" className="digit">
            3
          </button>
          <button type="button" className="digit">
            2
          </button>
          <button type="button" className="digit">
            1
          </button>
          <button type="button" className="digit">
            0
          </button>
        </div>
        <div className="modifiers subgrid">
          <button type="button" className="modifier">
            AC
          </button>
        </div>
        <div className="operations subgrid">
          <button type="button" className="operation">
            /
          </button>
          <button type="button" className="operation">
            X
          </button>
          <button type="button" className="operation">
            -
          </button>
          <button type="button" className="operation">
            +
          </button>
          <button type="button" className="operation">
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
