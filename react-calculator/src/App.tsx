import AC from "./components/AC";
import Container from "./components/Container";
import Numbers from "./components/Numbers";
import Operations from "./components/Opertaions";
import Result from "./components/Result";
import useCalculate from "./hooks/useCalculate";

function App() {
  const { getResultValue, numHandler, allClear, operationHandler } =
    useCalculate();

  return (
    <body>
      <div id="app">
        <Container>
          <Result value={getResultValue()} />
          <Numbers numHandler={numHandler} />
          <AC allClear={allClear} />
          <Operations operationHandler={operationHandler} />
        </Container>
      </div>
    </body>
  );
}

export default App;
