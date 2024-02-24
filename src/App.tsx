import { Calculator, useCalculator } from '@/components';
import { CALCULATOR_KEY_SETS } from '@/constants';

import './App.css';

const App = () => {
  const { displayValue, handleInputProcess } = useCalculator();
  return (
    <Calculator keySets={CALCULATOR_KEY_SETS} displayValue={displayValue} handleInputProcess={handleInputProcess} />
  );
};

export default App;
