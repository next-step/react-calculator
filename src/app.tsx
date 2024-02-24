import { Button } from "./components/button";
import { Layout } from "./components/layout";
import { TotalDisplay } from "./components/total-display";
import { Operators } from "./constants";

export const App = () => {
  return (
    <Layout>
      <TotalDisplay>0</TotalDisplay>
      <Layout.Digits>
        {Array.from({ length: 10 }, (_, i) => (
          <Button key={i} variant="digit">
            {i}
          </Button>
        )).reverse()}
      </Layout.Digits>
      <Layout.Modifiers>
        <Button variant="modifier">AC</Button>
      </Layout.Modifiers>
      <Layout.Operations>
        <Button variant="operation">{Operators.Divide}</Button>
        <Button variant="operation">{Operators.Multiply}</Button>
        <Button variant="operation">{Operators.Minus}</Button>
        <Button variant="operation">{Operators.Plus}</Button>
        <Button variant="operation">=</Button>
      </Layout.Operations>
    </Layout>
  );
};
