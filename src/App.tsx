import DigitButton from './components/DigitButton';
import { operations, DIGITS, OPERATIONS_LIST } from './constants';
import { useCalculate } from './hooks';

function App() {
  const { total, handleClearClick, handleDigitClick, handleOperationClick } =
    useCalculate();

  return (
    <div className="calculator">
      <h1 id="total">
        {Math.abs(total || 0) === Infinity ? '오류' : total || 0}
      </h1>
      <div className="digits flex">
        {DIGITS.map((digit) => (
          <DigitButton key={digit} digit={digit} onClick={handleDigitClick} />
        ))}
      </div>
      <div className="modifiers subgrid">
        <button className="modifier" onClick={handleClearClick}>
          AC
        </button>
      </div>
      <div className="operations subgrid">
        {OPERATIONS_LIST.map((operation) => (
          <button
            key={operation}
            className="operation"
            onClick={() => handleOperationClick(operation)}
          >
            {operations[operation]}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
