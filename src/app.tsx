import { Button } from "./components/button";
import { Layout } from "./components/layout";
import { TotalDisplay } from "./components/total-display";

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
        <Button variant="operation">/</Button>
        <Button variant="operation">X</Button>
        <Button variant="operation">-</Button>
        <Button variant="operation">+</Button>
        <Button variant="operation">=</Button>
      </Layout.Operations>
    </Layout>
  );
};
