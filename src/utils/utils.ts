interface calcNumbersWithSelectedOperationProps {
  operation: string;
  num1: number;
  num2: number;
}

export function calcNumbersWithSelectedOperation({
  operation,
  num1,
  num2,
}: calcNumbersWithSelectedOperationProps) {
  if (!num1 && !num2) return 0;
  if (!num1) return num2;
  if (!num2) return num1;

  switch(operation) {
    case('+'): {
      return add(num1, num2);
    }
    case('-'): {
      return subtract(num1, num2);
    }
    case('X'): {
      return multiple(num1, num2);
    }
    case('/'): {
      return divide(num1, num2);
    }
    default: {
      return num2;
    }
  }
}

function add(num1: number, num2: number) {
  return num1 + num2;
}

function subtract(num1: number, num2: number) {
  return num1 - num2;
}

function multiple(num1: number, num2: number) {
  return num1 * num2;
}

function divide(num1: number, num2: number) {
  return num1 / num2;
}
