import { CalculatorButton, ResultScreen } from '../../components/Calculator';
import { DIGIT_MAX_NUMBER, MODIFIERS, OPERATORS } from '../../constants/calculator';
import useCalculator from '../../hooks/useCalculator';

const DIGIT_NUMBERS = Array.from({ length: DIGIT_MAX_NUMBER + 1 }, (_, index) => DIGIT_MAX_NUMBER - index);

const Calculator = () => {
  const {
    calculatorState,
    clickOperand: onClickOperand,
    clickOperator: onClickOperator,
    clickModifier: onClickModifier,
  } = useCalculator();
  const { operand, result } = calculatorState;

  return (
    <div className="calculator">
      <ResultScreen result={result} operand={operand} />
      <div className="digits flex">
        {DIGIT_NUMBERS.map((number) => {
          return (
            <CalculatorButton key={number} result={result} onClick={onClickOperand(number)}>
              {number}
            </CalculatorButton>
          );
        })}
      </div>
      <div className="modifiers subgrid">
        {Object.values(MODIFIERS).map((modifier) => {
          return (
            <CalculatorButton key={modifier} onClick={onClickModifier}>
              {modifier}
            </CalculatorButton>
          );
        })}
      </div>
      <div className="operators subgrid">
        {Object.values(OPERATORS).map((operator) => {
          return (
            <CalculatorButton key={operator} result={result} onClick={onClickOperator(operator)}>
              {operator}
            </CalculatorButton>
          );
        })}
      </div>
    </div>
  );
};

export default Calculator;
