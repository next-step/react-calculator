import { Operator } from '@/App';

export const MAX_NUM = 999;
export const OPERATORS: Operator[] = ['/', 'X', '-', '+'];
export const NUMBERS = ['9', '8', '7', '6', '5', '4', '3', '2', '1', '0'];
export const ERROR_MESSAGE = {
  OVER_MAX_NUMBER: '숫자는 세 자리까지만 입력 가능합니다!',
  OPERATOR_ORDER_ERROR: '숫자를 먼저 입력한 후 연산자를 입력해주세요!',
  INFINITY_RESULT_ERROR: '오류',
};
