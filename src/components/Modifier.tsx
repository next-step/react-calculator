import { useCalculatorDispatch } from '../hooks/useCalculatorContext';
import { CONST } from '../utils/const';

export default function Modifier() {
  const dispatch = useCalculatorDispatch();

  return (
    <div className="modifiers subgrid">
      <button
        className="modifier"
        name={CONST.MODIFIER}
        onClick={() => dispatch({ type: 'modifier' })}
      >
        {CONST.MODIFIER}
      </button>
    </div>
  );
}
