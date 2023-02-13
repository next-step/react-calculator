import {
  calculate,
  updateAccumulator,
  updateOperand,
  updateOperation,
  ICalculator,
} from 'components/Calculator/CalculatorModel';
import { Digit, OPERATION } from 'constants/calculator';

const initialState: ICalculator = {
  operation: null,
  leftOperand: 0,
  rightOperand: null,
  accumulator: '0',
};

describe('Calculator Model', () => {
  test('연산자를 저장할 수 있어야 한다.', () => {
    let calculator = { ...initialState };

    calculator = updateOperation(calculator, OPERATION.PLUS);

    expect(calculator.operation).toBe(OPERATION.PLUS);
  });

  test('피연산자를 저장할 수 있어야 한다. 단, 오른쪽 피연산자는 연산자의 저장이 선행되어야 한다.', () => {
    let calculator = { ...initialState };

    calculator = updateOperand(calculator, Digit.SEVEN);
    expect(calculator.leftOperand).toBe(7);

    calculator = updateOperation(calculator, OPERATION.PLUS);

    calculator = updateOperand(calculator, Digit.FOUR);
    expect(calculator.rightOperand).toBe(4);
  });

  test('덧셈 연산이 가능해야 한다.', () => {
    let calculator = { ...initialState };

    calculator = updateOperand(calculator, Digit.SEVEN);
    calculator = updateOperation(calculator, OPERATION.PLUS);
    calculator = updateOperand(calculator, Digit.FOUR);
    calculator = calculate(calculator);

    expect(calculator.leftOperand).toBe(11);
  });

  test('뺄셈 연산이 가능해야 한다.', () => {
    let calculator = { ...initialState };

    calculator = updateOperand(calculator, Digit.SEVEN);
    calculator = updateOperation(calculator, OPERATION.MINUS);
    calculator = updateOperand(calculator, Digit.FOUR);
    calculator = calculate(calculator);

    expect(calculator.leftOperand).toBe(3);
  });

  test('곱셈 연산이 가능해야 한다.', () => {
    let calculator = { ...initialState };

    calculator = updateOperand(calculator, Digit.SEVEN);
    calculator = updateOperation(calculator, OPERATION.MULTIPLE);
    calculator = updateOperand(calculator, Digit.FOUR);
    calculator = calculate(calculator);

    expect(calculator.leftOperand).toBe(28);
  });

  test('나눗셈 연산이 가능해야 한다. 단, 연산 결과의 소수점 이하는 버린다.', () => {
    let calculator = { ...initialState };

    calculator = updateOperand(calculator, Digit.SEVEN);
    calculator = updateOperation(calculator, OPERATION.DIVIDE);
    calculator = updateOperand(calculator, Digit.FOUR);
    calculator = calculate(calculator);

    expect(calculator.leftOperand).toBe(1);
  });

  test('연산자와 피연산자의 입력 순서를 기억하고 있어야 한다.', () => {
    let calculator = { ...initialState };

    calculator = updateAccumulator(updateOperand(calculator, Digit.SEVEN));
    expect(calculator.accumulator).toBe('7');

    calculator = updateAccumulator(updateOperation(calculator, OPERATION.PLUS));
    expect(calculator.accumulator).toBe('7+');

    calculator = updateAccumulator(updateOperand(calculator, Digit.FOUR));
    expect(calculator.accumulator).toBe('7+4');

    calculator = updateAccumulator(calculate(calculator));
    expect(calculator.accumulator).toBe('11');
  });
});
