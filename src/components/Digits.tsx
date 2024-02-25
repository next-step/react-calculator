import { useCalculatorDispatch } from '../hooks/useCalculatorContext';
import { CONST } from '../utils/const';

export default function Digits() {
  const dispatch = useCalculatorDispatch();

  return (
    <div className="digits flex">
      {CONST.DIGIT_LIST.map((digit) => (
        <button
          key={digit}
          className="digit"
          name={digit}
          onClick={() => dispatch({ type: 'digit', param: digit })}
        >
          {digit}
        </button>
      ))}
    </div>
  );
}
