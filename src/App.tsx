import Calculator from './pages/Calculator';
import { CalculatorProvider } from './context/calculator/context';

import './css/index.css';

const App = () => {
  return (
    <CalculatorProvider>
      <Calculator />
    </CalculatorProvider>
  );
};

export default App;
