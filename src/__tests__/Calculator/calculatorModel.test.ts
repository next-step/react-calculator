import CalculatorModel from 'components/Calculator/CalculatorModel';
import { Digit, OPERATION } from 'constants/calculator';

describe('Calculator Model Class', () => {
  test('연산자를 저장할 수 있어야 한다.', () => {
    const calculatorModel = new CalculatorModel();

    calculatorModel.setOperation(OPERATION.PLUS);

    expect(calculatorModel.operation).toBe(OPERATION.PLUS);
  });

  test('피연산자를 저장할 수 있어야 한다. 단, 오른쪽 피연산자는 연산자의 저장이 선행되어야 한다.', () => {
    const calculatorModel = new CalculatorModel();

    calculatorModel.setOperand(Digit.SEVEN);
    expect(calculatorModel.leftOperand).toBe(7);

    calculatorModel.setOperation(OPERATION.PLUS);

    calculatorModel.setOperand(Digit.FOUR);
    expect(calculatorModel.rightOperand).toBe(4);
  });

  test('연산자와 피연산자의 입력 순서를 기억하고 있어야 한다.', () => {
    const calculatorModel = new CalculatorModel();

    calculatorModel.setOperand(Digit.SEVEN);
    expect(calculatorModel.accumulator).toBe('7');

    calculatorModel.setOperation(OPERATION.PLUS);
    expect(calculatorModel.accumulator).toBe('7+');

    calculatorModel.setOperand(Digit.FOUR);
    expect(calculatorModel.accumulator).toBe('7+4');
  });

  test('덧셈 연산이 가능해야 한다.', () => {
    const calculatorModel = new CalculatorModel();

    calculatorModel.setOperand(Digit.SEVEN);
    calculatorModel.setOperation(OPERATION.PLUS);
    calculatorModel.setOperand(Digit.FOUR);
    calculatorModel.calculate();

    expect(calculatorModel.leftOperand).toBe(11);
    expect(calculatorModel.accumulator).toBe('11');
  });

  test('뺄셈 연산이 가능해야 한다.', () => {
    const calculatorModel = new CalculatorModel();

    calculatorModel.setOperand(Digit.SEVEN);
    calculatorModel.setOperation(OPERATION.MINUS);
    calculatorModel.setOperand(Digit.FOUR);
    calculatorModel.calculate();

    expect(calculatorModel.leftOperand).toBe(3);
    expect(calculatorModel.accumulator).toBe('3');
  });

  test('곱셈 연산이 가능해야 한다.', () => {
    const calculatorModel = new CalculatorModel();

    calculatorModel.setOperand(Digit.SEVEN);
    calculatorModel.setOperation(OPERATION.MULTIPLE);
    calculatorModel.setOperand(Digit.FOUR);
    calculatorModel.calculate();

    expect(calculatorModel.leftOperand).toBe(28);
    expect(calculatorModel.accumulator).toBe('28');
  });

  test('나눗셈 연산이 가능해야 한다. 단, 연산 결과의 소수점 이하는 버린다.', () => {
    const calculatorModel = new CalculatorModel();

    calculatorModel.setOperand(Digit.SEVEN);
    calculatorModel.setOperation(OPERATION.DIVIDE);
    calculatorModel.setOperand(Digit.FOUR);
    calculatorModel.calculate();

    expect(calculatorModel.leftOperand).toBe(1);
    expect(calculatorModel.accumulator).toBe('1');
  });

  test('계산기의 초기 상태로 돌아갈 수 있어야 한다.', () => {
    const calculatorModel = new CalculatorModel();

    calculatorModel.setOperand(Digit.SEVEN);
    calculatorModel.setOperation(OPERATION.DIVIDE);
    calculatorModel.setOperand(Digit.FOUR);
    calculatorModel.calculate();

    expect(calculatorModel.leftOperand).toBe(1);

    calculatorModel.allClear();

    expect(calculatorModel.leftOperand).toBe(0);
    expect(calculatorModel.operation).toBeNull();
    expect(calculatorModel.rightOperand).toBeNull();
    expect(calculatorModel.accumulator).toBe('');
  });
});
