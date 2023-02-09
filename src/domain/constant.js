export const ERROR_MESSAGES = {
  DIV_0: "0으로 나눌 수 없습니다",
  MAX_TWO_NUMBERS: "두 자리 숫자까지만 연산이 가능합니다",
  MAX_THREE_DIGIT_NUMBERS: "숫자는 세 자리까지만 입력 가능합니다",
};

export const CALCULATOR = {
  RESTRICTIONS: {
    MAX_NUMBER_DIGITS: 3,
  },
  INITIAL_STATE: {
    value1: "0",
    value2: "",
    modifier: null,
    result: null,
  },
};
