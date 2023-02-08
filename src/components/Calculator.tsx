import Digits from './Digits';
import Modifier from './Modifier';
import Operations from './Operations';
import Total from './Total';
import './calculator.css';

function Calculator() {
  return (
    <div className="calculator">
      <Total />
      <Digits />
      <Modifier />
      <Operations />
    </div>
  );
}

export default Calculator;
