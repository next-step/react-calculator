import { fireEvent, render } from "@testing-library/react";
import { CalculatorApp } from "./app";
import { Operators } from "./constants";

const handleNumberInput = jest.fn();
const handleSetOperator = jest.fn();
const handleReset = jest.fn();
const handleCalculate = jest.fn();

jest.mock("./hooks/use-calculator", () => ({
  ...jest.requireActual("./hooks/use-calculator"),
  useCalculator: () => ({
    displayText: "111",
    handleNumberInput,
    handleSetOperator,
    handleReset,
    handleCalculate,
  }),
}));

describe("계산기 페이지", () => {
  let renderer: ReturnType<typeof render>;

  beforeEach(() => {
    renderer = render(<CalculatorApp />);
  });

  test("displayText가 랜더링 되어야 합니다", () => {
    expect(renderer.getByText("111", { selector: "h1" })).toBeInTheDocument();
  });

  test("모든 숫자 버튼이 랜더링 되어야 합니다", () => {
    Array.from({ length: 10 }, (_, i) =>
      expect(
        renderer.getByText(i.toString(), { selector: "button" })
      ).toBeInTheDocument()
    );
  });

  test("숫자 버튼을 클릭하면 handleInputNumber 함수가 호출되어야 합니다", () => {
    Array.from({ length: 10 }, (_, i) => {
      const button = renderer.getByText(i.toString(), { selector: "button" });
      fireEvent.click(button);

      expect(handleNumberInput).toHaveBeenCalledWith(i);
    });
  });

  test("연산자 버튼을 클릭하면 handleSetOperator 함수가 호출되어야 합니다", () => {
    [
      Operators.Divide,
      Operators.Multiply,
      Operators.Minus,
      Operators.Plus,
    ].forEach((operator) => {
      const button = renderer.getByText(operator);
      fireEvent.click(button);

      expect(handleSetOperator).toHaveBeenCalledWith(operator);
    });
  });

  test("AC 버튼을 클릭하면 handleReset 함수가 호출되어야 합니다", () => {
    const button = renderer.getByText("AC");
    fireEvent.click(button);

    expect(handleReset).toHaveBeenCalled();
  });

  test("= 버튼을 클릭하면 handleCalculate 함수가 호출되어야 합니다", () => {
    const button = renderer.getByText("=");
    fireEvent.click(button);

    expect(handleCalculate).toHaveBeenCalled();
  });
});
