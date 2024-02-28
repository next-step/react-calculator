import { useCalculatorState } from '../hooks/useCalculatorContext';
import Digits from './Digits';
import Modifier from './Modifier';
import Operations from './Operations';

export default function Calculator() {
  const state = useCalculatorState();

  return (
    <div className="calculator">
      <h1 id="total">{state.total}</h1>
      <Digits />
      <Modifier />
      <Operations />
    </div>
  );
}
