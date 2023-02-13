import { useCalculator } from '../../../modules/context/Calculator/CalculatorContext';
import Digit from './Digit';

const digitList = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
const MAX_DIGIT_LENGTH = 3;

const Digits = () => {
  const { calculator, addFirstDigit, addSecondDigit } = useCalculator();

  const handleDigitClick = (e: React.MouseEvent<HTMLElement>) => {
    const event = e.target as HTMLButtonElement;

    if (
      calculator.firstDigits.length < MAX_DIGIT_LENGTH &&
      !calculator.operation
    ) {
      addFirstDigit(event.value);
    } else if (calculator.secondDigits.length < MAX_DIGIT_LENGTH) {
      addSecondDigit(event.value);
    }
  };

  return (
    <div className="digits flex" onClick={handleDigitClick}>
      {digitList.map((number) => (
        <Digit key={number} number={number} />
      ))}
    </div>
  );
};

export default Digits;
