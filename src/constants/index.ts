export const MAX_DIGIT_LENGTH = 3;
export const MAX_OPERATOR_LENGTH = 1;
export const MESSAGE = {
	MAX_DIGIT_LENGTH: '숫자는 한번에 최대 3자리 수까지 입력 가능합니다.',
	NOT_FOUND_OPERATOR: (operator) => `"${operator}" 연산자는 정의되지 않았습니다.`,
	MAX_OPERATOR_LENGTH: `최대 ${MAX_OPERATOR_LENGTH}개의 숫자에 대해서만 계산할 수 있습니다.`
};
export const DIGIT = ['9', '8', '7', '6', '5', '4', '3', '2', '1', '0'];
export const OPERATOR = ['/', 'X', '-', '+', '='];