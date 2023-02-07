import { Screen, Digits, Operators } from '../../components/Calculator';

const Calculator = () => {
  return (
    <div className="calculator">
      <Screen />
      <Digits />
      <Operators />
    </div>
  );
};

export default Calculator;
