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

// describe("연산자 입력", () => {
//   it("연산자 먼저 입력하기", () => {
//     const { result } = renderHook(() => useCalculator());

//     act(() => {
//       result.current[1]("+");
//     });

//     expect(result.current[0]).toBe(0);
//     expect(window.alert).toHaveBeenCalledWith(
//       "숫자를 먼저 입력한 후 연산자를 입력해주세요!"
//     );
//   });

//   it("연산자 처리하기", () => {
//     const { result } = renderHook(() => useCalculator());

//     act(() => {
//       result.current[1](1);
//       result.current[1](1);
//       result.current[1](1);
//       result.current[1]("+");
//       result.current[1](1);
//       result.current[1](1);
//       result.current[1](1);
//       result.current[1]("=");
//     });

//     expect(result.current[0]).toBe(222);
//   });

//   it("연산자 연속 입력하기", () => {
//     const { result } = renderHook(() => useCalculator());

//     act(() => {
//       result.current[1](1);
//       result.current[1](1);
//       result.current[1]("+");
//       result.current[1]("+");
//     });

//     expect(result.current[0]).toBe("11+");
//     expect(window.alert).toHaveBeenCalledWith(
//       "숫자를 먼저 입력한 후 연산자를 입력해주세요!"
//     );
//   });
// });
