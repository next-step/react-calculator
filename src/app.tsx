import { Button } from "./components/button";
import { Layout } from "./components/layout";
import { TotalDisplay } from "./components/total-display";
import { Operators } from "./constants";
import { useCalculator } from "./hooks/use-calculator";

export const CalculatorApp = () => {
  const {
    displayText,
    handleCalculate,
    handleNumberInput,
    handleReset,
    handleSetOperator,
  } = useCalculator();

  return (
    <Layout>
      <TotalDisplay>{displayText}</TotalDisplay>
      <Layout.Digits>
        {Array.from({ length: 10 }, (_, i) => (
          <Button key={i} variant="digit" onClick={() => handleNumberInput(i)}>
            {i}
          </Button>
        )).reverse()}
      </Layout.Digits>
      <Layout.Modifiers>
        <Button variant="modifier" onClick={handleReset}>
          AC
        </Button>
      </Layout.Modifiers>
      <Layout.Operations>
        {[
          Operators.Divide,
          Operators.Multiply,
          Operators.Minus,
          Operators.Plus,
        ].map((operator) => (
          <Button
            key={operator}
            variant="operation"
            onClick={() => handleSetOperator(operator)}
          >
            {operator}
          </Button>
        ))}
        <Button variant="operation" onClick={handleCalculate}>
          =
        </Button>
      </Layout.Operations>
    </Layout>
  );
};
