import '../css/digits.css';
import { useCalculator } from '../store/CalcContext';

const Digits = () => {
  const { addDigit } = useCalculator();

  return (
    <div className="digits flex">
      {numbers.map((number) => (
        <button key={number} onClick={() => addDigit(number)}>
          {number}
        </button>
      ))}
    </div>
  );
};

export default Digits;

const numbers = ['9', '8', '7', '6', '5', '4', '3', '2', '1', '0'];
