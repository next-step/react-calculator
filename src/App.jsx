import { useState } from 'react';
import { Calculator, exceedLimitOfDigitError } from './Model/Calculator';

const BUTTONS = {
  DIGIT: ['9', '8', '7', '6', '5', '4', '3', '2', '1', '0'],
  ALL_CLEAR: 'AC',
  OPERATOR: ['/', 'X', '-', '+', '='],
};

const App = () => {
  const [calculator, setCalculator] = useState(Calculator());
  const handleClick = (e) => {
    try {
      setCalculator(calculator.enter(e.target.innerText));
    } catch (e) {
      if (e instanceof exceedLimitOfDigitError)
        alert('숫자는 세 자리까지만 입력 가능합니다!');
    }
  };

  return (
    <div className="app">
      <div className="calculator">
        <h1 id="total">{calculator.value}</h1>
        <div className="input-display" onClick={handleClick}>
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
