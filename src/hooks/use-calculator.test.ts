import { RenderHookResult, renderHook } from "@testing-library/react";
import { useCalculator } from "./use-calculator";
import { Messages, Operators } from "../constants";
import { act } from "react-dom/test-utils";

describe("useCalculator", () => {
  let result: RenderHookResult<
    ReturnType<typeof useCalculator>,
    unknown
  >["result"];

  beforeEach(() => {
    window.alert = jest.fn();
    const { result: resultInstance } = renderHook(() => useCalculator());
    result = resultInstance;
  });

  test("처음 렌더링 시 displayText는 0이어야 합니다", () => {
    expect(result.current.displayText).toBe("0");
  });

  describe("숫자 입력", () => {
    test("handleNumber를 통해 숫자를 입력합니다", async () => {
      act(() => result.current.handleNumberInput(1));
      expect(result.current.displayText).toBe("1");

      act(() => result.current.handleNumberInput(2));
      expect(result.current.displayText).toBe("12");

      act(() => result.current.handleNumberInput(3));
      expect(result.current.displayText).toBe("123");
    });

    test("숫자는 0으로 시작할 수 없습니다", () => {
      act(() => {
        result.current.handleNumberInput(0);
      });

      expect(result.current.displayText).toBe("0");
    });

    test("숫자는 최대 3자리까지만 입력할 수 있습니다", () => {
      act(() => result.current.handleNumberInput(1));
      act(() => result.current.handleNumberInput(2));
      act(() => result.current.handleNumberInput(3));
      act(() => result.current.handleNumberInput(4));

      expect(result.current.displayText).toBe("123");
      expect(window.alert).toHaveBeenCalledWith(Messages.MaxInputLength);
    });

    test("연산자 입력 후에도 숫자는 최대 3자리까지만 입력할 수 있습니다", () => {
      act(() => result.current.handleNumberInput(1));
      act(() => result.current.handleSetOperator(Operators.Plus));
      act(() => result.current.handleNumberInput(2));
      act(() => result.current.handleNumberInput(3));
      act(() => result.current.handleNumberInput(4));
      act(() => result.current.handleNumberInput(5));

      expect(result.current.displayText).toBe("1+234");
      expect(window.alert).toHaveBeenCalledWith(Messages.MaxInputLength);
    });

    describe("연산자 입력", () => {
      test("handleSetOperator를 통해 연산자를 입력합니다", () => {
        act(() => result.current.handleNumberInput(1));
        act(() => result.current.handleSetOperator(Operators.Plus));

        expect(result.current.displayText).toBe("1+");
      });
    });

    test("연산자는 숫자 입력 후에만 입력할 수 있습니다", () => {
      act(() => result.current.handleSetOperator(Operators.Plus));

      expect(result.current.displayText).toBe("0");
      expect(window.alert).toHaveBeenCalledWith(Messages.InputNumberFirst);
    });

    // github.com/next-step/react-calculator 데모의 경우 연산자가 중복으로 입력이 가능하지만,
    // 첫번째 연산자까지만 계산이 되기에, 연산자 중복 입력을 막도록 구현하였습니다.
    test("이미 연산자가 있으면, 연산자를 입력할 수 없습니다", () => {
      act(() => result.current.handleNumberInput(1));
      act(() => result.current.handleSetOperator(Operators.Plus));
      act(() => result.current.handleSetOperator(Operators.Minus));

      expect(result.current.displayText).toBe("1+");
      expect(window.alert).toHaveBeenCalledWith(Messages.InputOperatorOnce);
    });
  });

  describe("handleCalculate를 통해 계산을 수행합니다", () => {
    test("연산자가 없는 경우 계산을 수행하지 않습니다", () => {
      act(() => result.current.handleNumberInput(1));
      act(() => result.current.handleCalculate());

      expect(result.current.displayText).toBe("1");
    });

    test("덧셈을 수행합니다", () => {
      act(() => result.current.handleNumberInput(1));
      act(() => result.current.handleSetOperator(Operators.Plus));
      act(() => result.current.handleNumberInput(2));
      act(() => result.current.handleCalculate());

      expect(result.current.displayText).toBe("3");
    });

    test("뺄셈을 수행합니다", () => {
      act(() => result.current.handleNumberInput(1));
      act(() => result.current.handleSetOperator(Operators.Minus));
      act(() => result.current.handleNumberInput(2));
      act(() => result.current.handleCalculate());

      expect(result.current.displayText).toBe("-1");
    });

    test("곱셈을 수행합니다", () => {
      act(() => result.current.handleNumberInput(2));
      act(() => result.current.handleSetOperator(Operators.Multiply));
      act(() => result.current.handleNumberInput(3));
      act(() => result.current.handleCalculate());

      expect(result.current.displayText).toBe("6");
    });

    test("나눗셈을 수행합니다", () => {
      act(() => result.current.handleNumberInput(10));
      act(() => result.current.handleSetOperator(Operators.Divide));
      act(() => result.current.handleNumberInput(2));
      act(() => result.current.handleCalculate());

      expect(result.current.displayText).toBe("5");
    });

    test("나눌 수 없는경우 오류를 표시합니다", () => {
      act(() => result.current.handleNumberInput(1));
      act(() => result.current.handleSetOperator(Operators.Divide));
      act(() => result.current.handleNumberInput(0));
      act(() => result.current.handleCalculate());

      expect(result.current.displayText).toBe("오류");
    });

    test("계산 결과값은 소숫점 이하는 버림합니다", () => {
      act(() => result.current.handleNumberInput(10));
      act(() => result.current.handleSetOperator(Operators.Divide));
      act(() => result.current.handleNumberInput(3));
      act(() => result.current.handleCalculate());

      expect(result.current.displayText).toBe("3");
    });
  });

  test("handleReset을 통해 초기화합니다", () => {
    act(() => {
      result.current.handleNumberInput(1);
      result.current.handleReset();
    });

    expect(result.current.displayText).toBe("0");
  });
});
