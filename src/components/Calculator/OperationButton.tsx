function Divide() {
  return <button className="operation">/</button>;
}

function Multiply() {
  return <button className="operation">X</button>;
}

function Subtract() {
  return <button className="operation">-</button>;
}

function Add() {
  return <button className="operation">+</button>;
}

function Equal() {
  return <button className="operation">=</button>;
}

const OperationButton = {
  Divide,
  Multiply,
  Subtract,
  Add,
  Equal,
};

export default OperationButton;
