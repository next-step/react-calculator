import { renderHook, RenderResult } from '@testing-library/react-hooks';
import { useCalculator } from '../../hooks/useCalculator';
import { beforeEach, describe, expect, test } from 'vitest';
import { BUTTON } from '../../components/button/button.constant';
import { handleActions } from '../utils/handleActions';

describe('useCalculator 테스트', () => {
  let calculator: RenderResult<ReturnType<typeof useCalculator>>;

  beforeEach(() => {
    const hook = renderHook(() => useCalculator());

    calculator = hook.result;
  });

  describe('초기 상태 테스트', () => {
    const testCases = [
      {
        key: 'current',
        expected: {
          x: 0,
          y: 0,
        },
      },
      { key: 'result', expected: 0 },
      { key: 'operator', expected: null },
    ] as const;

    test.each(testCases)(
      '초기 상태에서 $key는 $expected 이어야 한다',
      ({ key, expected }) => {
        const defaultValue = calculator.current[key];

        expect(defaultValue).toEqual(expected);
      }
    );
  });

  describe('handleDigit 테스트', () => {
    test('handleDigit을 사용하여 숫자를 입력하면, 해당 숫자가 x에 설정되어야 한다', () => {
      calculator.current.handleDigit(1);

      expect(calculator.current.current.x).toBe(1);
    });

    test('operator가 존재할 때, handleDigit을 사용하여 숫자를 입력하면, 해당 숫자가 y에 설정되어야 한다', () => {
      const { result } = renderHook(() => useCalculator());

      handleActions([
        result.current.handleDigit(1),
        result.current.handleOperator(BUTTON.OPERATION.CHILDREN.ADD.VALUE),
        result.current.handleDigit(2),
      ]);

      expect(result.current.current.x).toBe(1);
      expect(result.current.current.y).toBe(2);
      expect(result.current.operator).toBe(BUTTON.OPERATION.CHILDREN.ADD.VALUE);
    });
  });

  describe('덧셈 연산 테스트', () => {
    const addCases = [
      { input1: -1, input2: 1, expected: 0 },
      { input1: 1, input2: 1, expected: 2 },
      { input1: 100, input2: 200, expected: 300 },
    ];

    test.each(addCases)(
      'handleDigit으로 $input1과 $input2를 입력 후, "+" 연산자를 사용하면 결과는 $expected 이어야 한다',
      ({ input1, input2, expected }) => {
        handleActions([
          calculator.current.handleDigit(input1),
          calculator.current.handleOperator(
            BUTTON.OPERATION.CHILDREN.ADD.VALUE
          ),
          calculator.current.handleDigit(input2),
          calculator.current.handleOperator(
            BUTTON.OPERATION.CHILDREN.EQUAL.VALUE
          ),
        ]);

        expect(calculator.current.result).toBe(expected);
      }
    );
  });

  test('AC(Modifier) 버튼을 누르면, 모든 상태가 초기화되어야 한다', () => {
    handleActions([
      calculator.current.handleDigit(1),
      calculator.current.handleOperator(BUTTON.OPERATION.CHILDREN.ADD.VALUE),
      calculator.current.handleDigit(2),
      calculator.current.handleModifier(BUTTON.MODIFIER.CHILDREN.AC.VALUE),
    ]);

    expect(calculator.current.result).toBe(0);
    expect(calculator.current.current.x).toBe(0);
    expect(calculator.current.current.y).toBe(0);
    expect(calculator.current.operator).toBeNull();
  });
});
