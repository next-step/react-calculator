const MAX_NUMBER_LENGTH = 3;
const MAX_NUMBER_COUNT = 2;

const DIGITS = Array.from({ length: 10 }, (_, i) => 9 - i);

const OPERATORS = [
  {
    label: '/',
    action: 'divide',
  },
  {
    label: 'X',
    action: 'multiply',
  },
  {
    label: '-',
    action: 'subtract',
  },
  {
    label: '+',
    action: 'sum',
  },
] as const;

const ERROR_MESSAGE = {
  MAX_NUMBER_LENGTH: `숫자는 최대 ${MAX_NUMBER_LENGTH}자리까지 입력 가능합니다.`,
  MAX_NUMBER_COUNT: `숫자는 최대 ${MAX_NUMBER_COUNT}개까지 입력 가능합니다.`,
  NO_NUMBER: '숫자를 먼저 입력해주세요.',
};

export {
  OPERATORS,
  DIGITS,
  MAX_NUMBER_LENGTH,
  MAX_NUMBER_COUNT,
  ERROR_MESSAGE,
};
