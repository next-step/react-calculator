import './calculator.css'

import Digit from './Digit';
import Modifier from './Modifier';
import Operation from './Operation';
import TotalScreen from './TotalScreen';

const Calculator = () => {
  return (
    <div className="calculator">
      <TotalScreen />
      <Digit />
      <Modifier />
      <Operation />
    </div>
  );
};

export default Calculator;
