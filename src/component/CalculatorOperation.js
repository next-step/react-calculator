import CalculatorOperationItem from "./CalculatorOperationItem";
const OPERATIONS = ["/", "*", "-", "+", "="];

const CalculatorOperation = (props) => {
  return (
    <div className="operations subgrid">
      {OPERATIONS.map((operation, index) => (
        <CalculatorOperationItem operation={operation} key={index} />
      ))}
    </div>
  );
};

export default CalculatorOperation;
