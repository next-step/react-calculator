import './totalScreen.css';

import { type CalculatorState } from '../../../reducer';

const INFINITY = 'Infinity';

const TotalScreen = ({
  calculatorState,
}: {
  calculatorState: CalculatorState;
}) => {
  const calculatorResult =
    calculatorState.prevValue +
    calculatorState.operator +
    calculatorState.value;

  const screen = calculatorResult.includes(INFINITY)
    ? '오류'
    : calculatorResult;

  return <h1 id="total">{screen}</h1>;
};

export default TotalScreen;
