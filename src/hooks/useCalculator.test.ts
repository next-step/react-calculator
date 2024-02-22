import { renderHook, act } from '@testing-library/react';

import useCalculator from 'src/hooks/useCalculator.ts';

describe('useCalculator 커스텀 훅 테스트', () => {
	beforeAll(() => {
		global.alert = jest.fn();
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

	describe('숫자 입력 테스트', () => {
		it('초기 상태에서 숫자를 입력하면 0에서 해당 숫자로 수정된다.', () => {
			const { result } = renderHook(() => useCalculator());

			expect(result.current.display).toBe('0');

			act(() => {
				result.current.enter('3');
			});

			expect(result.current.display).toBe('3');
		});

		it('연산자 입력 후 숫자를 입력하면 해당 숫자가 표시된다.', () => {
			const { result } = renderHook(() => useCalculator());

			act(() => {
				result.current.enter('+');
			});

			act(() => {
				result.current.enter('3');
			});

			expect(result.current.display).toBe('0+3');
		});

		it('숫자를 3개 초과 입력하면 alert가 발생한다', () => {
			const { result } = renderHook(() => useCalculator());

			act(() => {
				result.current.enter('1');
			});

			act(() => {
				result.current.enter('2');
			});

			act(() => {
				result.current.enter('3');
			});

			act(() => {
				result.current.enter('4');
			});

			expect(global.alert).toHaveBeenCalledWith('숫자는 3자리까지만 입력 가능합니다.');
		});

		it('연산자 입력 후 숫자를 3개 초과 입력하면 alert가 발생한다', () => {
			const { result } = renderHook(() => useCalculator());

			act(() => {
				result.current.enter('+');
			});

			act(() => {
				result.current.enter('1');
			});

			act(() => {
				result.current.enter('2');
			});

			act(() => {
				result.current.enter('3');
			});

			act(() => {
				result.current.enter('4');
			});

			expect(global.alert).toHaveBeenCalledWith('숫자는 3자리까지만 입력 가능합니다.');
		});

		xit('에러가 발생했을때 숫자를 입력하면 입력한 숫자로 표시된다.', () => {
			const { result } = renderHook(() => useCalculator());

			act(() => {
				result.current.enter('3');
			});

			act(() => {
				result.current.enter('/');
			});

			act(() => {
				result.current.enter('0');
			});

			act(() => {
				result.current.calculate();
			});

			act(() => {
				result.current.enter('4');
			});

			expect(result.current.display).toBe('4');
		});
	});

	describe('연산자 입력 테스트', () => {
		it('마지막 입력이 숫자인 경우 연산자를 클릭하면 display에 표시된 연산자가 추가된다', () => {
			const { result } = renderHook(() => useCalculator());

			act(() => {
				result.current.enter('3');
			});

			act(() => {
				result.current.enter('-');
			});

			expect(result.current.display).toBe('3-');
		});

		it('연산자가 연속으로 입력되면 마지막으로 입력한 연산자가 화면에 표시된다.', () => {
			const { result } = renderHook(() => useCalculator());

			act(() => {
				result.current.enter('-');
			});

			act(() => {
				result.current.enter('+');
			});

			expect(result.current.display).toBe('0+');
		});
	});
});
