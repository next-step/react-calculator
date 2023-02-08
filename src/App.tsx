import { AllClear } from "./components/AllClear";
import { NumberPad } from "./components/NumberPad";
import { Operation } from "./components/Operation";
import { Total } from "./components/Total";

function App() {
  return (
    <>
      <div className="calculator">
        <Total />
        <NumberPad />
        <AllClear />
        <Operation />
      </div>
    </>
  );
}

export default App;
