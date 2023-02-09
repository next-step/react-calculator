import Calculator from './components/Calculator';
import { CalcProvider } from './store/CalcProvider';

const App = () => {
  return (
    <div class="app">
      <CalcProvider>
        <Calculator />
      </CalcProvider>
    </div>
  );
};

export default App;
