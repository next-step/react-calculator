import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

describe("입력 테스트", () => {
  beforeEach(() => {
    render(<App />);
  });

  it("첫번째 숫자 입력", () => {
    const numberButton = screen.getByRole("button", { name: "1" });

    fireEvent.click(numberButton);

    const total = screen.getByRole("heading", { level: 1 });

    expect(total).toHaveTextContent("1");
  });

  it("연산자 입력", () => {
    const numberButton = screen.getByRole("button", { name: "1" });
    const operatorButton = screen.getByRole("button", { name: "+" });

    fireEvent.click(numberButton);
    fireEvent.click(operatorButton);

    const total = screen.getByRole("heading", { level: 1 });

    expect(total).toHaveTextContent("1+");
  });

  it("두번째 숫자 입력", () => {
    const numberButton = screen.getByRole("button", { name: "1" });
    const operatorButton = screen.getByRole("button", { name: "+" });

    fireEvent.click(numberButton);
    fireEvent.click(operatorButton);
    fireEvent.click(numberButton);

    const total = screen.getByRole("heading", { level: 1 });

    expect(total).toHaveTextContent("1+1");
  });

  it("계산 연산자 입력", () => {
    const numberButton = screen.getByRole("button", { name: "1" });
    const operatorButton = screen.getByRole("button", { name: "+" });
    const calculateButton = screen.getByRole("button", { name: "=" });

    fireEvent.click(numberButton);
    fireEvent.click(operatorButton);
    fireEvent.click(numberButton);
    fireEvent.click(calculateButton);

    const total = screen.getByRole("heading", { level: 1 });

    expect(total).toHaveTextContent("2");
  });

  it("초기화 실행", () => {
    const numberButton = screen.getByRole("button", { name: "1" });
    const operatorButton = screen.getByRole("button", { name: "+" });
    const calculateButton = screen.getByRole("button", { name: "=" });
    const allClearButton = screen.getByRole("button", { name: "AC" });

    fireEvent.click(numberButton);
    fireEvent.click(operatorButton);
    fireEvent.click(numberButton);
    fireEvent.click(calculateButton);
    fireEvent.click(allClearButton);

    const total = screen.getByRole("heading", { level: 1 });

    expect(total).toHaveTextContent("0");
  });
});
