import { Operator, useCalculate } from './CalculatorProvider';

function Divide() {
  const calculate = useCalculate();

  return (
    <button
      onClick={() => {
        calculate?.appendOpretionToProcess(Operator.Divide);
      }}
      className="operation"
    >
      {Operator.Divide}
    </button>
  );
}

function Multiply() {
  const calculate = useCalculate();
  return (
    <button
      onClick={() => {
        calculate?.appendOpretionToProcess(Operator.Multiply);
      }}
      className="operation"
    >
      {Operator.Multiply}
    </button>
  );
}

function Subtract() {
  const calculate = useCalculate();
  return (
    <button
      onClick={() => {
        calculate?.appendOpretionToProcess(Operator.Subtract);
      }}
      className="operation"
    >
      {Operator.Subtract}
    </button>
  );
}

function Add() {
  const calculate = useCalculate();
  return (
    <button
      onClick={() => {
        calculate?.appendOpretionToProcess(Operator.Add);
      }}
      className="operation"
    >
      {Operator.Add}
    </button>
  );
}

function Equal() {
  const calculate = useCalculate();
  return (
    <button
      onClick={() => {
        calculate?.caculateProcess();
      }}
      className="operation"
    >
      {Operator.Equal}
    </button>
  );
}

const OperationButton = {
  Divide,
  Multiply,
  Subtract,
  Add,
  Equal,
};

export default OperationButton;
