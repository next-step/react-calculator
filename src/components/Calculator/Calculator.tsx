import useCalculator from 'components/calculator/hooks/useCalculator';

import { Digit, OPERATION } from 'constants/calculator';

function Calculator() {
  const { total, handleClickAllClear, handleClickDigit, handleClickOperation } = useCalculator();

  return (
    <div className="calculator">
      <h1 id="total">{total}</h1>
      <div className="digits flex">
        {Object.values(Digit).map((digit) => (
          <button key={digit} className="digit" onClick={handleClickDigit}>
            {digit}
          </button>
        ))}
      </div>
      <div className="modifiers subgrid">
        <button className="modifier" onClick={handleClickAllClear}>
          AC
        </button>
      </div>
      <div className="operations subgrid">
        {Object.values(OPERATION).map((operation) => (
          <button key={operation} className="operation" onClick={handleClickOperation}>
            {operation}
          </button>
        ))}
        <button className="operation" onClick={handleClickOperation}>
          =
        </button>
      </div>
    </div>
  );
}

export default Calculator;
