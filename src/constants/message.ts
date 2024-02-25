const DIGIT = {
  OVER_THREE_DIGITS: '숫자는 세자리 이하로 입력해주세요',
} as const;

const ERROR = { DIGIT } as const;

export const MESSAGE = { ERROR } as const;
