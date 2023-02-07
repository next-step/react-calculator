import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { insertDigit } from '@/store/calculator';
import Validator from '@/domain/Validator.js';

function App() {
  const dispatch = useDispatch();
  const calculatorValue = useSelector((state) => state.calculator.value);
  const DIGIT = ['9', '8', '7', '6', '5', '4', '3', '2', '1', '0'];

  const digitHandler = (digit) => {
    const { isMaxDigitLength, MESSAGE } = Validator;
    const updateValue = calculatorValue + digit;

    if (!isMaxDigitLength(updateValue)) {
      alert(MESSAGE.MAX_DIGIT_LENGTH);
      return;
    }

    dispatch(insertDigit(digit));
  };

  return (
    <div className="calculator">
      <h1 id="total">{calculatorValue}</h1>
      <div className="digits flex">
        {DIGIT.map((digit) => (
          <button
            key={digit}
            className="digit"
            type="button"
            onClick={() => digitHandler(digit)}
          >{digit}</button>
        ))}
      </div>
      <div className="modifiers subgrid">
        <button className="modifier">AC</button>
      </div>
      <div className="operations subgrid">
        <button className="operation">/</button>
        <button className="operation">X</button>
        <button className="operation">-</button>
        <button className="operation">+</button>
        <button className="operation">=</button>
      </div>
    </div>
  );
}

export default App;
