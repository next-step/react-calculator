const DIGIT = {
  NINE: '9',
  EIGHT: '8',
  SEVEN: '7',
  SIX: '6',
  FIVE: '5',
  FOUR: '4',
  THREE: '3',
  TWO: '2',
  ONE: '1',
  ZERO: '0',
} as const;

const OPERATION = {
  DIVIDE: '/',
  MULTIPLE: 'X',
  MINUS: '-',
  PLUS: '+',
  CALCULATE: '=',
} as const;

const ERROR_MESSAGE = {
  INIFINITY: '오류',
  MAX_LENGTH: '숫자는 세 자리까지만 입력 가능합니다!',
  NUMBER_FIRST: '숫자를 먼저 입력한 후 연산자를 입력해주세요!',
} as const;
const MAX_LENGTH = 3;

export { DIGIT, OPERATION, MAX_LENGTH, ERROR_MESSAGE };
