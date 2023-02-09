import Total from './Total';
import Digits from './Digits';
import Modifier from './Modifier';
import Operations from './Operations';

import '../css/calculator.css';

const Calculator = () => {
  return (
    <div className="calculator">
      <Total />
      <Digits />
      <Modifier />
      <Operations />
    </div>
  );
};

export default Calculator;
