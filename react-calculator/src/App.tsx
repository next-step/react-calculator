import AC from "./components/AC";
import Container from "./components/Container";
import Numbers from "./components/Numbers";
import Operations from "./components/Opertaions";
import Result from "./components/Result";

function App() {
  return (
    <body>
      <div id="app">
        <Container>
          <Result value={0} />
          <Numbers numHandler={() => {}} />
          <AC />
          <Operations operationHandler={() => {}} />
        </Container>
      </div>
    </body>
  );
}

export default App;
