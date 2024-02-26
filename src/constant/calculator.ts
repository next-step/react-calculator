const MAX_DIGIT_LENGTH = 3;

const INITIAL_DIGIT = '0';
const INITIAL_VALUE = '';

const OPERATIONS = ['/', 'X', '-', '+', '='];

const DIGITS = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

const MESSAGES = {
  DIGIT_LIMIT: '숫자는 세 자리까지만 입력 가능합니다!',
  NUMBER_FIRST: '숫자를 먼저 입력한 후 연산자를 입력해 주세요!',
};

export {
  MAX_DIGIT_LENGTH,
  INITIAL_DIGIT,
  INITIAL_VALUE,
  OPERATIONS,
  DIGITS,
  MESSAGES,
};
