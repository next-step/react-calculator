import { fireEvent, render } from "@testing-library/react";
import App from "./App";

describe("최대 3자리 숫자 입력 테스트", () => {
  beforeAll(() => {
    render(<App />);
    jest.spyOn(window, "alert").mockImplementation(() => {});
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  it("세자리 입력", () => {
    const button = document.getElementById("1");

    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);

    const total = document.getElementById("total");
    expect(total.textContent).toBe("111");
  });

  it("네자리 입력", () => {
    const button = document.getElementById("1");

    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);

    const total = document.getElementById("total");

    expect(total.textContent).toBe("111");
    expect(window.alert).toHaveBeenCalledWith(
      "숫자는 세 자리까지만 입력 가능합니다!"
    );
  });

  it("숫자 0 입력 후 3자리 입력", () => {
    const zeroButton = document.getElementById("0");
    const oneButton = document.getElementById("1");

    fireEvent.click(zeroButton);

    fireEvent.click(oneButton);
    fireEvent.click(oneButton);
    fireEvent.click(oneButton);

    const total = document.getElementById("total");
    expect(total.textContent).toBe("111");
  });
});
