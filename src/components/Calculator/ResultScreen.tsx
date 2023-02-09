import { ERROR_RESULT, ERROR_RESULT_ALT_TEXT } from '../../constants/calculator';
import { CalculatorState } from '../../types/calculator';

type Props = Omit<CalculatorState, 'operator'>;

const ResultScreen = ({ result, operand }: Props) => {
  const resultText = result === ERROR_RESULT ? ERROR_RESULT_ALT_TEXT : result;

  return (
    <h1 className="total">
      {operand === null && resultText}
      {operand}
    </h1>
  );
};

export default ResultScreen;
