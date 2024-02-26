const DIGIT = {
  OVER_THREE_DIGITS: '숫자는 세자리 이하로 입력해주세요.',
} as const;

const DIVIDE = {
  BY_ZERO: '0으로 나눌 수 없습니다.',
} as const;

const RESULT = {
  INFINITE: '값이 무한대입니다.',
} as const;

const ERROR = { DIGIT, RESULT, DIVIDE } as const;

export const MESSAGE = { ERROR } as const;
