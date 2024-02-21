import { act, renderHook } from "@testing-library/react";
import useCalculator from ".";

describe("숫자 입력 테스트", () => {
  beforeAll(() => {
    jest.spyOn(window, "alert").mockImplementation(() => {});
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  it("0 연속 입력", () => {
    const { result } = renderHook(() => useCalculator());

    act(() => {
      result.current[1](0);
      result.current[1](0);
    });

    expect(result.current[0]).toBe(0);
  });

  it("세자리 입력", () => {
    const { result } = renderHook(() => useCalculator());

    act(() => {
      result.current[1](1);
      result.current[1](1);
      result.current[1](1);
    });

    expect(result.current[0]).toBe(111);
  });

  it("네자리 입력", () => {
    const { result } = renderHook(() => useCalculator());

    act(() => {
      result.current[1](1);
      result.current[1](1);
      result.current[1](1);
      result.current[1](1);
    });

    expect(result.current[0]).toBe(111);
    expect(window.alert).toHaveBeenCalledWith(
      "숫자는 세 자리까지만 입력 가능합니다!"
    );
  });

  it("숫자 0 입력 후 3자리 입력", () => {
    const { result } = renderHook(() => useCalculator());

    act(() => {
      result.current[1](0);
      result.current[1](1);
      result.current[1](1);
      result.current[1](1);
    });

    expect(result.current[0]).toBe(111);
  });
});
