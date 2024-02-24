import { useCalculate } from './hooks/useCalculate';
import Digits from './components/Digits';
import Modifier from './components/Modifier';
import Operations from './components/Operations';
import Display from './components/Display';

export default function Calculator() {
  const { operator, operand, clear, handleDigit, handleOperator } =
    useCalculate();
  return (
    <div className='calculator'>
      <Display operand={operand} operator={operator} />
      <Digits onClick={handleDigit} />
      <Modifier onClick={clear} />
      <Operations onClick={handleOperator} />
    </div>
  );
}
