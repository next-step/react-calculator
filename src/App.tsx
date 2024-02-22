import { Digits, Modifiers, Operations, Result } from './components';
import { useCalculator } from './hooks/useCalculator';
import { Layout } from './layout/Layout';

function App() {
  const {
    result,
    current,
    operator,
    handleDigit,
    handleModifier,
    handleOperator,
  } = useCalculator();

  return (
    <Layout>
      <Result result={result} current={current} operator={operator} />
      <Digits onClick={handleDigit} />
      <Modifiers onClick={handleModifier} />
      <Operations onClick={handleOperator} />
    </Layout>
  );
}

export default App;
