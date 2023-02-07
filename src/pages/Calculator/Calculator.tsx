import { Screen, Digits, Modifiers, Operators } from '../../components/Calculator';

const Calculator = () => {
  return (
    <div className="calculator">
      <Screen />
      <Digits />
      <Modifiers />
      <Operators />
    </div>
  );
};

export default Calculator;
