import { CalculatorState } from "context/calculator.reducer";
import { CALCULATOR, MAX_INPUT_DIGIT_LENGTH } from "data/constant";
import { calculate } from "utils/calculate";

export const handleInputDigit = (state: CalculatorState, digit: string) => {
  const { operator, firstOperand, secondOperand, display } = state;

  const isSecondOperand = !!operator;

  const currentOperandValue = isSecondOperand ? secondOperand : firstOperand;

  if (currentOperandValue.length >= MAX_INPUT_DIGIT_LENGTH) {
    alert(`숫자는 최대 ${MAX_INPUT_DIGIT_LENGTH}자리까지 입력 가능합니다.`);
    return state;
  }

  if (isSecondOperand) {
    return {
      ...state,
      secondOperand: currentOperandValue + digit,
      display: display + digit,
    };
  }

  return {
    ...state,
    firstOperand: currentOperandValue + digit,
    display: firstOperand === "" ? digit : display + digit,
  };
};

export const handleInputEqualOperator = (state: CalculatorState) => {
  const { firstOperand, operator, secondOperand } = state;

  const result = calculate(firstOperand, operator, secondOperand);

  if (isNaN(result) || !isFinite(result)) {
    return {
      ...state,
      display: CALCULATOR.ERROR,
    };
  }

  return {
    ...state,
    display: String(Math.floor(result)),
    firstOperand: String(result),
    secondOperand: "",
    operator: "",
  };
};

export const handleInputOperator = (
  state: CalculatorState,
  operator: string
) => {
  return {
    ...state,
    operator,
    display: state.display + operator,
  };
};
