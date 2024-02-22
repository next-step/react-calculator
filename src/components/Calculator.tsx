import Key from './Key';

const DIGITS = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
const OPERATORS = ['/', 'X', '-', '+', '='];

export default function Calculator() {
  const handleClickDigit = (digit: number) => {
    console.log(digit);
  };
  const handleClickAC = () => {
    console.log('AC@@@@@@');
  };
  const handleClickOperation = (operator: string) => {
    console.log(operator);
  };
  return (
    <div className="calculator">
      <h1 id="total">0</h1>
      <div className="digits flex">
        {DIGITS.map(digit => (
          <Key
            key={digit}
            className="digit"
            label={`${digit}`}
            onClick={() => handleClickDigit(digit)}
          />
        ))}
      </div>
      <div className="modifiers subgrid">
        <Key className="modifier" label="AC" onClick={handleClickAC} />
      </div>
      <div className="operations subgrid">
        {OPERATORS.map(operator => (
          <Key
            key={operator}
            className="operation"
            label={operator}
            onClick={() => handleClickOperation(operator)}
          />
        ))}
      </div>
    </div>
  );
}
