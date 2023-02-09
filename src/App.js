import Calculator from "./component/Calculator";
import "./css/App.css";

import CalculatorModule from "./domain/calculator";

function App() {
  return (
    <div id="app">
      <Calculator calculator={new CalculatorModule()} />
    </div>
  );
}

export default App;
