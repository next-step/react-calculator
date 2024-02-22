import Digit from "./components/digit/Digit";
import Modifier from "./components/modifier/Modifier";
import Operation from "./components/operation/Operation";
import Total from "./components/total/Total";

const App = () => {
  return (
    <div id="app">
      <div className="calculator">
        <Total />
        <Digit />
        <Modifier />
        <Operation />
      </div>
    </div>
  );
};

export default App;
