import { renderHook, act } from '@testing-library/react';

import useCalculator from 'src/hooks/useCalculator.ts';

const enterOperators = (operators: string[]) => {
	const { result } = renderHook(() => useCalculator());

	operators.forEach(operator => {
		act(() => {
			result.current.enter(operator);
		});
	});

	return result;
};

const calculate = (result: { current: ReturnType<typeof useCalculator> }) => {
	act(() => {
		result.current.calculate();
	});

	return result;
};

describe('useCalculator 커스텀 훅 테스트', () => {
	beforeAll(() => {
		global.alert = jest.fn();
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

	describe('숫자 입력 테스트', () => {
		it('초기 상태에서 숫자를 입력하면 0에서 해당 숫자로 수정된다.', () => {
			const result = enterOperators([]);

			expect(result.current.display).toBe('0');

			act(() => {
				result.current.enter('3');
			});

			expect(result.current.display).toBe('3');
		});

		it('연산자 입력 후 숫자를 입력하면 해당 숫자가 표시된다.', () => {
			const result = enterOperators(['+', '3']);

			expect(result.current.display).toBe('0+3');
		});

		it('숫자를 3개 초과 입력하면 alert가 발생한다', () => {
			enterOperators(['1', '2', '3', '4']);

			expect(global.alert).toHaveBeenCalledWith('숫자는 3자리까지만 입력 가능합니다.');
		});

		it('연산자 입력 후 숫자를 3개 초과 입력하면 alert가 발생한다', () => {
			enterOperators(['+', '1', '2', '3', '4']);

			expect(global.alert).toHaveBeenCalledWith('숫자는 3자리까지만 입력 가능합니다.');
		});

		it('에러가 발생했을때 숫자를 입력하면 입력한 숫자로 표시된다.', () => {
			const result = calculate(enterOperators(['3', '/', '0']));

			expect(result.current.display).toBe('오류');

			act(() => {
				result.current.enter('4');
			});

			expect(result.current.display).toBe('4');
		});
	});

	describe('연산자 입력 테스트', () => {
		it('마지막 입력이 숫자인 경우 연산자를 클릭하면 display에 표시된 연산자가 추가된다', () => {
			const result = enterOperators(['3', '-']);

			expect(result.current.display).toBe('3-');
		});

		it('연산자가 연속으로 입력되면 마지막으로 입력한 연산자가 화면에 표시된다.', () => {
			const result = enterOperators(['-', '+']);

			expect(result.current.display).toBe('0+');
		});
	});

	describe('계산 테스트', () => {
		it('3, +, 2, = 을 입력하면 5가 표시된다.', () => {
			const result = calculate(enterOperators(['3', '+', '2']));

			expect(result.current.display).toBe('5');
		});

		it('3, x, 2, = 을 입력하면 6이 표시된다.', () => {
			const result = calculate(enterOperators(['3', 'x', '2']));

			expect(result.current.display).toBe('6');
		});

		it('3, -, 2, = 을 입력하면 1이 표시된다.', () => {
			const result = calculate(enterOperators(['3', '-', '2']));

			expect(result.current.display).toBe('1');
		});

		it('3, /, 2, = 을 입력하면 1이 표시된다.', () => {
			const result = calculate(enterOperators(['3', '/', '2']));

			expect(result.current.display).toBe('1');
		});

		it('3, /, 0, = 을 입력하면 "오류"가 표시된다.', () => {
			const result = calculate(enterOperators(['3', '/', '0']));

			expect(result.current.display).toBe('오류');
		});

		it('숫자만 입력되어 있을 때 =을 입력하면 숫자가 유지된다.', () => {
			const result = calculate(enterOperators(['3']));

			expect(result.current.display).toBe('3');
		});

		it('마지막 입력값이 연산자인 경우 =을 클릭하면 숫자를 입력해주세요. 라는 alert가 발생한다.', () => {
			calculate(enterOperators(['3', '+']));

			expect(global.alert).toHaveBeenCalledWith('숫자를 입력해 주세요.');
		});
	});

	describe('초기화 테스트', () => {
		it('AC를 입력하면 display가 0으로 초기화된다.', () => {
			const result = enterOperators(['3', '+']);

			act(() => {
				result.current.clear();
			});

			expect(result.current.display).toBe('0');
		});
	});
});
