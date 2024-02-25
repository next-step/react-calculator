import { describe, expect, it } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";
import { OperatorSymbols } from "../calculator/calculator";

describe("first", () => {
  render(<App />);

  function pressOperation(operator: OperatorSymbols) {
    userEvent.click(screen.getByText(operator));
  }

  function getNumberBtn(number: string) {
    return screen.getByRole<HTMLButtonElement>(`button_${number}`);
  }

  function calculate() {
    const calBtn = screen.getByText("=");
    userEvent.click(calBtn);
  }

  const clearBtn = screen.getByText("AC");

  function pressDigits(numbers: string[]) {
    numbers.forEach((number) => {
      const numberButton = getNumberBtn(number);
      userEvent.click(numberButton);
    });
  }

  function isEqualValueFromDisplay(test: string) {
    return waitFor(() => {
      expect(screen.getByRole("display").innerHTML).toEqual(test);
    });
  }

  function clear() {
    userEvent.click(clearBtn);
  }

  it("숫자 버튼을 누르면 display에 숫자가 표시", async () => {
    pressDigits(["1"]);
    await isEqualValueFromDisplay("1");
    clear();
  });

  it("숫자 버튼을 여러 번 누르면 display에 숫자가 누적 표시", () => {
    pressDigits(["1", "2", "3"]);
    isEqualValueFromDisplay("123");
    clear();
  });

  it("숫자 버튼은 최대 3자리까지만 표시", () => {
    pressDigits(["1", "2", "3", "4"]);
    isEqualValueFromDisplay("123");
    clear();
  });

  it("숫자 버튼을 누르고 연산자 버튼을 누르면 display에 연산자 표시", () => {
    pressDigits(["1", "2", "3"]);
    pressOperation("+");
    isEqualValueFromDisplay("123+");
    clear();
  });

  it("연산자 버튼을 여러 번 누르면 display에 마지막 연산자만 표시", () => {
    pressDigits(["1", "2", "3"]);
    pressOperation("+");
    pressOperation("-");
    isEqualValueFromDisplay("123-");
    clear();
  });

  it("2번째 숫자를 입력하면 display에 2번째 숫자를 누적하여 표시", () => {
    pressDigits(["1", "2", "3"]);
    pressOperation("+");
    pressDigits(["4", "5", "6"]);
    isEqualValueFromDisplay("123+456");
    clear();
  });

  it("1번째 숫자와 2번째 숫자를 입력하고 = 버튼을 누르면 display에 계산 결과 표시", () => {
    pressDigits(["1", "2", "3"]);
    pressOperation("+");
    pressDigits(["4", "5", "6"]);
    calculate();
    isEqualValueFromDisplay("579");
    clear();
  });

  it("AC 버튼을 누르면 display에 0 표시", () => {
    pressDigits(["1", "2", "3"]);
    clear();
    isEqualValueFromDisplay("0");
  });
  it("연산의 결과값이 Infinity일 경우 오류라는 문자열을 보여준다.", () => {
    pressDigits(["3"]);
    pressOperation("/");
    pressDigits(["0"]);
    calculate();
    isEqualValueFromDisplay("오류");
    clear();
  });

  it("계산 결과를 표현할 때 소수점 이하는 버림한다", () => {
    pressDigits(["4"]);
    pressOperation("/");
    pressDigits(["3"]);
    calculate();
    isEqualValueFromDisplay("1");
    clear();
  });

  it("계산 결과에 이어서 연산 수행", () => {
    pressDigits(["1", "2", "3"]);
    pressOperation("+");
    pressDigits(["1", "2", "3"]);
    calculate();
    pressOperation("+");
    pressDigits(["1", "2", "3"]);
    calculate();
    isEqualValueFromDisplay("369");
    clear();
  });
});
