import { act, renderHook } from "@testing-library/react";
import useCalculator from ".";

describe("입력 테스트", () => {
  it("첫번째 숫자 입력", () => {
    const { result } = renderHook(() => useCalculator());

    act(() => {
      result.current[1](1);
    });

    expect(result.current[0]).toBe("1");
  });

  it("연산자 입력", () => {
    const { result } = renderHook(() => useCalculator());

    act(() => {
      result.current[1](1);
      result.current[1]("+");
    });

    expect(result.current[0]).toBe("1+");
  });

  it("두번째 숫자 입력", () => {
    const { result } = renderHook(() => useCalculator());

    act(() => {
      result.current[1](1);
      result.current[1]("+");
      result.current[1](1);
    });

    expect(result.current[0]).toBe("1+1");
  });

  it("계산 연산자 입력", () => {
    const { result } = renderHook(() => useCalculator());

    act(() => {
      result.current[1](1);
      result.current[1]("+");
      result.current[1](1);
      result.current[1]("=");
    });

    expect(result.current[0]).toBe("2");
  });
});
