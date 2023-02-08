import './totalScreen.css';

import { type CalculatorState } from '../../../reducer/index.js';

const TotalScreen = ({
  calculatorState,
}: {
  calculatorState: CalculatorState;
}) => {
  const screen =
    calculatorState.prevValue +
    calculatorState.operator +
    calculatorState.value;

  return <h1 id="total">{screen}</h1>;
};

export default TotalScreen;
