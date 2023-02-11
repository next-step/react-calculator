const BUTTONS = {
  DIGIT: ['9', '8', '7', '6', '5', '4', '3', '2', '1', '0'],
  ALL_CLEAR: 'AC',
  OPERATOR: ['/', 'X', '-', '+', '='],
};

const App = () => {
  return (
    <div className="app">
      <div className="calculator">
        <h1 id="total">0</h1>
        <div className="input-display">
          <div className="digits flex">
            {BUTTONS.DIGIT.map((digit) => (
              <button key={`digit:${digit}`} className="digit">
                {digit}
              </button>
            ))}
          </div>
          <div className="modifiers subgrid">
            <button className="modifier">{BUTTONS.ALL_CLEAR}</button>
          </div>
          <div className="operations subgrid">
            {BUTTONS.OPERATOR.map((operator) => (
              <button key={`op:${operator}`} className="operation">
                {operator}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
