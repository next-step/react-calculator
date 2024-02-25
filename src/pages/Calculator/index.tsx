import { useCalculate } from './hooks/useCalculate';
import Digits from './components/Digits';
import Modifier from './components/Modifier';
import Operations from './components/Operations';
import Display from './components/Display';

export default function Calculator() {
  const { operationsState, error, clear, handleDigit, handleOperator } =
    useCalculate();

  return (
    <div className='calculator'>
      <Display operationState={operationsState} error={error} />
      <Digits handleDigit={handleDigit} />
      <Modifier handleClear={clear} />
      <Operations handleOperator={handleOperator} />
    </div>
  );
}
