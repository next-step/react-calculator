import Calculator from './components/Calculator';
import { CalculatorProvider } from './contexts/CalculatorContext';

export default function App() {
  return (
    <CalculatorProvider>
      <Calculator />
    </CalculatorProvider>
  );
}
