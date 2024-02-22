import { Result, Digits, Modifiers, Operations } from './components';
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
      <Digits handler={handleDigit} />
      <Modifiers handler={handleModifier} />
      <Operations handler={handleOperator} />
    </Layout>
  );
}

export default App;
