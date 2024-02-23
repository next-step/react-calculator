import './App.css';
import Digit from './components/button/Digit';
import Modifier from './components/button/Modifier';
import Operator from './components/button/Operator';

function App() {
  return (
    <div id="app">
      <div className="calculator">
        <h1 id="total">0</h1>
        <div className="digits flex">
          <Digit />
        </div>
        <div className="modifiers subgrid">
          <Modifier />
        </div>
        <div className="operations subgrid">
          <Operator />
        </div>
      </div>
    </div>
  );
}

export default App;
