import { Result, Digits, Modifier, Operations } from './components';
import { Layout } from './layout/Layout';

function App() {
  return (
    <Layout>
      <Result />
      <Digits />
      <Modifier />
      <Operations />
    </Layout>
  );
}

export default App;
