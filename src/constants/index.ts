export const MAX_DIGIT_LENGTH = 3;
export const MAX_OPERATOR_LENGTH = 1;
export const MESSAGE = {
	MAX_DIGIT_LENGTH: `숫자는 한번에 최대 ${MAX_DIGIT_LENGTH}자리 수까지 입력 가능합니다.`,
	MAX_OPERATOR_LENGTH: `최대 ${MAX_OPERATOR_LENGTH + 1}개의 숫자에 대해서만 계산할 수 있습니다.`,
	INFINITY: '오류',
	NOT_FOUND_ACTION: 'action 을 찾을 수 없습니다.',
};
export const OPERATOR = ['/', 'X', '-', '+'];