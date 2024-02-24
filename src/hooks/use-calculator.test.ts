import { renderHook } from "@testing-library/react-hooks";
import { useCalculator } from "./use-calculator";
import { Messages, Operators } from "../constants";

describe("useCalculator", () => {
  let current: ReturnType<typeof useCalculator>;

  beforeEach(() => {
    window.alert = jest.fn();
    const {
      result: { current: currentInstance },
    } = renderHook(() => useCalculator());
    current = currentInstance;
  });

  test("처음 렌더링 시 displayText는 0이어야 합니다", () => {
    expect(current.displayText).toBe("0");
  });

  describe("숫자 입력", () => {
    test("handleNumber를 통해 숫자를 입력합니다", () => {
      current.handleNumberInput(1);
      expect(current.displayText).toBe("1");

      current.handleNumberInput(2);
      expect(current.displayText).toBe("12");

      current.handleNumberInput(3);
      expect(current.displayText).toBe("123");
    });

    test("숫자는 0으로 시작할 수 없습니다", () => {
      current.handleNumberInput(0);

      expect(current.displayText).toBe("0");
    });

    test("숫자는 최대 3자리까지만 입력할 수 있습니다", () => {
      current.handleNumberInput(1);
      current.handleNumberInput(2);
      current.handleNumberInput(3);
      current.handleNumberInput(4);

      expect(current.displayText).toBe("123");
      expect(window.alert).toHaveBeenCalledWith(Messages.MaxInputLength);
    });

    test("연산자 입력 후에도 숫자는 최대 3자리까지만 입력할 수 있습니다", () => {
      current.handleNumberInput(1);
      current.handleSetOperator(Operators.Plus);
      current.handleNumberInput(2);
      current.handleNumberInput(3);
      current.handleNumberInput(4);
      current.handleNumberInput(5);

      expect(current.displayText).toBe("1 + 234");
      expect(window.alert).toHaveBeenCalledWith(Messages.MaxInputLength);
    });

    describe("연산자 입력", () => {
      test("handleSetOperator를 통해 연산자를 입력합니다", () => {
        current.handleNumberInput(1);
        current.handleSetOperator(Operators.Plus);

        expect(current.displayText).toBe("1 +");
      });
    });

    test("연산자는 숫자 입력 후에만 입력할 수 있습니다", () => {
      current.handleSetOperator(Operators.Plus);

      expect(current.displayText).toBe("0");
      expect(window.alert).toHaveBeenCalledWith(Messages.InputNumberFirst);
    });

    test("이미 연산자가 있더라도, 연산자는 숫자 입력 후에만 입력할 수 있습니다", () => {
      current.handleNumberInput(1);
      current.handleSetOperator(Operators.Plus);
      current.handleNumberInput(2);
      current.handleSetOperator(Operators.Plus);

      expect(current.displayText).toBe("1 + 2");

      expect(window.alert).toHaveBeenCalledWith(Messages.InputNumberFirst);
    });

    // github.com/next-step/react-calculator 데모의 경우 연산자가 중복으로 입력이 가능하지만,
    // 첫번째 연산자까지만 계산이 되기에, 연산자 중복 입력을 막도록 구현하였습니다.
    test("이미 연산자가 있으면, 연산자를 입력할 수 없습니다", () => {
      current.handleNumberInput(1);
      current.handleSetOperator(Operators.Plus);
      current.handleSetOperator(Operators.Minus);

      expect(current.displayText).toBe("1 +");
      expect(window.alert).toHaveBeenCalledWith(Messages.InputOperatorOnce);
    });
  });

  describe("handleCalculate를 통해 계산을 수행합니다", () => {
    test("덧셈을 수행합니다", () => {
      current.handleNumberInput(1);
      current.handleSetOperator(Operators.Minus);
      current.handleNumberInput(2);
      current.handleCalculate();

      expect(current.displayText).toBe("3");
    });

    test("뺄셈을 수행합니다", () => {
      current.handleNumberInput(1);
      current.handleSetOperator(Operators.Minus);
      current.handleNumberInput(2);
      current.handleCalculate();

      expect(current.displayText).toBe("-1");
    });

    test("곱셈을 수행합니다", () => {
      current.handleNumberInput(2);
      current.handleSetOperator(Operators.Multiply);
      current.handleNumberInput(3);
      current.handleCalculate();

      expect(current.displayText).toBe("6");
    });

    test("나눗셈을 수행합니다", () => {
      current.handleNumberInput(10);
      current.handleSetOperator(Operators.Divide);
      current.handleNumberInput(2);
      current.handleCalculate();

      expect(current.displayText).toBe("5");
    });

    test("나눌 수 없는경우 문자를 표시합니다", () => {
      current.handleNumberInput(1);
      current.handleSetOperator(Operators.Divide);
      current.handleNumberInput(0);
      current.handleCalculate();

      expect(current.displayText).toBe("Infinity");
    });

    test("계산 결과값은 소숫점 이하는 버림합니다", () => {
      current.handleNumberInput(10);
      current.handleSetOperator(Operators.Divide);
      current.handleNumberInput(3);
      current.handleCalculate();

      expect(current.displayText).toBe("3");
    });
  });

  test("handleReset을 통해 초기화합니다", () => {
    current.handleNumberInput(1);
    current.handleReset();

    expect(current.displayText).toBe("0");
  });
});
