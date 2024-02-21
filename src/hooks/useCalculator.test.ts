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

		xit('연산자 입력 후 숫자를 입력하면 해당 숫자가 표시된다.', () => {
			const { result } = renderHook(() => useCalculator());

			act(() => {
				result.current.enter('+');
				result.current.enter('3');
			});

			expect(result.current.display).toBe('0+3');
		});

		xit('에러가 발생했을때 숫자를 입력하면 입력한 숫자로 표시된다.', () => {
			const { result } = renderHook(() => useCalculator());

			act(() => {
				result.current.enter('3');
				result.current.enter('/');
				result.current.enter('0');
				result.current.calculate();
				result.current.enter('4');
			});

			expect(result.current.display).toBe('4');
		});
	});
});
