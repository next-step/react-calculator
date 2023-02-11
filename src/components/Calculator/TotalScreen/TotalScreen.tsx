import './totalScreen.css';

import { type CalculatorState } from '../../../reducer';

const INFINITY = 'Infinity';
const ERROR_MESSAGE = '오류';

const TotalScreen = ({
  calculatorState: { prevValue, operator, value },
}: {
  calculatorState: CalculatorState;
}) => {
  const calculatorResult = `${prevValue}${operator}${value}`;

  const screen = calculatorResult.includes(INFINITY)
    ? ERROR_MESSAGE
    : calculatorResult;

  return <h1 id="total">{screen}</h1>;
};

export default TotalScreen;
