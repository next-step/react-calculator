import { ERROR_RESULT, ERROR_RESULT_ALT_TEXT } from '../../constants/calculator';
import { useCalculator } from '../../context/calculator/context';

const Screen = () => {
  const { state } = useCalculator();
  const { operand1, operand2, operator } = state;

  return (
    <>
      <h1 className="total">
        {operand1 === ERROR_RESULT ? ERROR_RESULT_ALT_TEXT : operand1}
        {operator}
        {operand2 || ''}
      </h1>
    </>
  );
};

export default Screen;
