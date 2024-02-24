import { Calculator, useCalculator } from '@/components';
import './App.css';
import { CALCULATOR_KEYS } from '@/constants/calculatorKeys.ts';

const App = () => {
  const { displayValue, handleInputProcess } = useCalculator();
  return (
    <Calculator calculatorKeys={CALCULATOR_KEYS} displayValue={displayValue} handleInputProcess={handleInputProcess} />
  );
};

export default App;
