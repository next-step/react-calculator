import Digits from './Digits';
import Modifier from './Modifier';
import Operations from './Operations';
import Total from './Total';
import { useCalculator } from '../hooks';
import './calculator.css';

function Calculator() {
  const { total, handleDigits, handleModifier, handleOperations } = useCalculator();

  return (
    <div className="calculator">
      <Total total={total} />
      <Digits handleDigits={handleDigits} />
      <Modifier handleModifier={handleModifier} />
      <Operations handleOperations={handleOperations} />
    </div>
  );
}

export default Calculator;
