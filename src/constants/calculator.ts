export const OPERATORS = {
  DIVIDE: '/',
  MULTIPLY: 'X',
  MINUS: '-',
  PLUS: '+',
  EQUAL: '=',
} as const;

export const MODIFIERS = { AC: 'AC' } as const;

export const DIGIT_MAX_NUMBER = 9;
export const OPERAND_INITIAL_VALUE = 0;
export const OPERAND_MAX_LENGTH = 3;
export const OPERATOR_INITIAL_VALUE = '';

export const ERROR_RESULT = Infinity;
export const ERROR_RESULT_ALT_TEXT = '오류';
export const ERROR_MESSAGE = {
  CALCULATOR: {
    INVALID_OPERAND_LENGTH: `숫자는 한번에 최대 ${OPERAND_MAX_LENGTH}자리 수까지 입력이 가능합니다`,
  },
};
