import { renderHook, RenderResult } from '@testing-library/react-hooks';
import { useCalculator } from '../../hooks/useCalculator';
import { beforeEach, describe, expect, test } from 'vitest';
import { BUTTON } from '../../components/button/button.constant';
import { handleActions } from '../utils/handleActions';
import { MESSAGE } from '../../constants/message';

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

  describe('숫자 입력(handleDigit) 테스트', () => {
    describe('x 입력 테스트', () => {
      /**
       * handleDigit을 사용하여 x를 입력하면, x는 해당 숫자로 설정되어야 한다.
       * 연속적으로 입력이 들어올 경우, 기존의 값에 10을 곱한 후 입력값을 더해야 한다.
       */
      const testCases = [
        { input1: 1, input2: null, input3: 1, expected: 11 },
        { input1: null, input2: 8, input3: 1, expected: 81 },
        { input1: 1, input2: 0, input3: 3, expected: 103 },
        { input1: 0, input2: 5, input3: 4, expected: 54 },
        { input1: 3, input2: 4, input3: 0, expected: 340 },
        { input1: 9, input2: 9, input3: 9, expected: 999 },
      ];

      test.each(testCases)(
        'handleDigit으로 $input1, $input2, $input3를 입력하면, x는 $expected 이어야 한다',
        ({ input1, input2, input3, expected }) => {
          const optionalInput1 = (input1 !== null &&
            calculator.current.handleDigit(input1)) as void | null;

          const optionalInput2 = (input2 !== null &&
            calculator.current.handleDigit(input2)) as void | null;

          const optionalInput3 = (input3 !== null &&
            calculator.current.handleDigit(input3)) as void | null;

          handleActions([optionalInput1, optionalInput2, optionalInput3]);

          expect(calculator.current.current.x).toBe(expected);
        }
      );
    });

    describe('y 입력 테스트', () => {
      /**
       * handleOperator를 사용하여 operator를 설정한 후,
       * handleDigit을 사용하여 y를 입력하면, y는 해당 숫자로 설정되어야 한다.
       * 연속적으로 입력이 들어올 경우, 기존의 값에 10을 곱한 후 입력값을 더해야 한다.
       */
      const testCases = [
        {
          inputX: 1,
          operator: BUTTON.OPERATION.CHILDREN.ADD.VALUE,
          inputY1: 3,
          inputY2: 1,
          expected: 31,
        },
        {
          inputX: 1,
          operator: BUTTON.OPERATION.CHILDREN.ADD.VALUE,
          inputY1: 0,
          inputY2: 1,
          expected: 1,
        },
        {
          inputX: 0,
          operator: BUTTON.OPERATION.CHILDREN.ADD.VALUE,
          inputY1: 5,
          inputY2: 2,
          expected: 52,
        },
      ];

      test.each(testCases)(
        'handleDigit으로 $input1와 $input2를 입력하면, y는 $expected 이어야 한다',
        ({ inputX, operator, inputY1, inputY2, expected }) => {
          handleActions([
            calculator.current.handleDigit(inputX),
            calculator.current.handleOperator(operator),
            calculator.current.handleDigit(inputY1),
            calculator.current.handleDigit(inputY2),
          ]);

          expect(calculator.current.current.y).toBe(expected);
        }
      );
    });

    describe('예외 테스트', () => {
      describe('x 입력 예외 테스트', () => {
        /**
         * handleDigit을 사용하여 x를 입력하면, x는 해당 숫자로 설정되어야 한다.
         * 연속적으로 입력이 들어올 경우, 기존의 값에 10을 곱한 후 입력값을 더해야 한다.
         * 네 자리 이상의 숫자를 입력하면, 에러가 발생해야 한다.
         */
        const testCases = [
          { input1: 1, input2: 0, input3: 1, input4: 0 },
          { input1: 9, input2: 9, input3: 9, input4: 9 },
        ];

        test.each(testCases)(
          'handleDigit으로 네 자리 이상의 숫자를 입력하면, 에러가 발생해야 한다',
          ({ input1, input2, input3, input4 }) => {
            const inputDigits = () => {
              handleActions([
                calculator.current.handleDigit(input1),
                calculator.current.handleDigit(input2),
                calculator.current.handleDigit(input3),
                calculator.current.handleDigit(input4),
              ]);
            };

            expect(inputDigits).toThrowError(
              MESSAGE.ERROR.DIGIT.OVER_THREE_DIGITS
            );
          }
        );
      });
    });

    describe('y 입력 예외 테스트', () => {
      /**
       * handleOperator를 사용하여 operator를 설정한 후,
       * handleDigit을 사용하여 y를 입력하면, y는 해당 숫자로 설정되어야 한다.
       * 연속적으로 입력이 들어올 경우, 기존의 값에 10을 곱한 후 입력값을 더해야 한다.
       * 네 자리 이상의 숫자를 입력하면, 에러가 발생해야 한다.
       */
      const testCases = [
        {
          inputX: 1,
          operator: BUTTON.OPERATION.CHILDREN.ADD.VALUE,
          inputY1: 1,
          inputY2: 0,
          inputY3: 0,
          inputY4: 0,
        },
        {
          inputX: 1,
          operator: BUTTON.OPERATION.CHILDREN.ADD.VALUE,
          inputY1: 1,
          inputY2: 2,
          inputY3: 3,
          inputY4: 4,
        },
        {
          inputX: 1,
          operator: BUTTON.OPERATION.CHILDREN.ADD.VALUE,
          inputY1: 9,
          inputY2: 9,
          inputY3: 9,
          inputY4: 9,
        },
      ];

      test.each(testCases)(
        'handleDigit으로 네 자리 이상의 숫자를 입력하면, 에러가 발생해야 한다',
        ({ inputX, operator, inputY1, inputY2, inputY3, inputY4 }) => {
          const inputDigits = () => {
            handleActions([
              calculator.current.handleDigit(inputX),
              calculator.current.handleOperator(operator),
              calculator.current.handleDigit(inputY1),
              calculator.current.handleDigit(inputY2),
              calculator.current.handleDigit(inputY3),
              calculator.current.handleDigit(inputY4),
            ]);
          };

          expect(inputDigits).toThrowError(
            MESSAGE.ERROR.DIGIT.OVER_THREE_DIGITS
          );
        }
      );
    });
  });

  describe('덧셈 연산 테스트', () => {
    const testCases = [
      { input1: -1, input2: 1, expected: 0 },
      { input1: 1, input2: 1, expected: 2 },
      { input1: 100, input2: 200, expected: 300 },
    ];

    test.each(testCases)(
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
