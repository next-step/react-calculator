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
          const filteredInputs = [
            input1 !== null && calculator.current.handleDigit(input1),
            input2 !== null && calculator.current.handleDigit(input2),
            input3 !== null && calculator.current.handleDigit(input3),
          ].filter((input) => input !== false) as Array<void>;

          handleActions(filteredInputs);

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
          {
            input1: 1,
            input2: 0,
            input3: 1,
            input4: 0,
            expectedError: MESSAGE.ERROR.DIGIT.OVER_THREE_DIGITS,
          },
          {
            input1: 9,
            input2: 9,
            input3: 9,
            input4: 9,
            expectedError: MESSAGE.ERROR.DIGIT.OVER_THREE_DIGITS,
          },
        ];

        test.each(testCases)(
          'handleDigit으로 네 자리 이상의 숫자를 입력하면, $expectedError 에러가 발생해야 한다',
          ({ input1, input2, input3, input4, expectedError }) => {
            const inputDigits = () => {
              handleActions([
                calculator.current.handleDigit(input1),
                calculator.current.handleDigit(input2),
                calculator.current.handleDigit(input3),
                calculator.current.handleDigit(input4),
              ]);
            };

            expect(inputDigits).toThrowError(expectedError);
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

  describe('연산자 입력(handleOperator) 테스트', () => {
    describe('연산자 설정 테스트', () => {
      /**
       * handleOperator를 사용하여 operator를 설정하면, operator는 해당 값으로 설정되어야 한다.
       * 연속적으로 입력이 들어올 경우, 기존의 operator를 덮어쓰고 설정되어야 한다.
       */
      const testCases = [
        {
          input1: BUTTON.OPERATION.CHILDREN.ADD.VALUE,
          input2: BUTTON.OPERATION.CHILDREN.SUBTRACT.VALUE,
          expected: BUTTON.OPERATION.CHILDREN.SUBTRACT.VALUE,
        },
        {
          input1: BUTTON.OPERATION.CHILDREN.ADD.VALUE,
          input2: BUTTON.OPERATION.CHILDREN.ADD.VALUE,
          expected: BUTTON.OPERATION.CHILDREN.ADD.VALUE,
        },
        {
          input1: BUTTON.OPERATION.CHILDREN.SUBTRACT.VALUE,
          input2: BUTTON.OPERATION.CHILDREN.DIVIDE.VALUE,
          expected: BUTTON.OPERATION.CHILDREN.DIVIDE.VALUE,
        },
      ];

      test.each(testCases)(
        'handleOperator으로 $input1을 입력하면, operator는 $expected 이어야 한다',
        ({ input1, input2, expected }) => {
          handleActions([
            calculator.current.handleDigit(1),
            calculator.current.handleOperator(input1),
            calculator.current.handleOperator(input2),
          ]);

          expect(calculator.current.operator).toBe(expected);
        }
      );
    });

    describe('연산 테스트', () => {
      /**
       * handleDigit을 사용하여 x를 입력한 후,
       * handleOperator를 사용하여 operator를 설정한 후,
       * handleDigit을 사용하여 y를 입력하면, result는 x와 y의 연산 결과여야 한다.
       */
      const testCases = [
        {
          x: {
            input1: 1,
            input2: 2,
          },
          y: {
            input1: 3,
            input2: 4,
          },
          expectedAdd: 46,
          expectedSubtract: -22,
          expectedMultiply: 408,
          expectedDivide: 0.4,
        },
        {
          x: {
            input1: 0,
            input2: 1,
          },
          y: {
            input1: 1,
            input2: 0,
          },
          expectedAdd: 11,
          expectedSubtract: -9,
          expectedMultiply: 10,
          expectedDivide: 0.1,
        },
        {
          x: {
            input1: 9,
            input2: 9,
          },
          y: {
            input1: 9,
            input2: 9,
          },
          expectedAdd: 198,
          expectedSubtract: 0,
          expectedMultiply: 9801,
          expectedDivide: 1,
        },
        {
          x: {
            input1: 1,
            input2: 0,
          },
          y: {
            input1: 1,
            input2: 0,
          },
          expectedAdd: 20,
          expectedSubtract: 0,
          expectedMultiply: 100,
          expectedDivide: 1,
        },
        {
          x: {
            input1: 1,
            input2: 0,
          },
          y: {
            input1: 0,
            input2: 1,
          },
          expectedAdd: 11,
          expectedSubtract: 9,
          expectedMultiply: 10,
          expectedDivide: 10,
        },
      ];

      describe('덧셈 연산 테스트', () => {
        test.each(testCases)(
          'handleDigit으로 x에 $x.input1, $x.input2를 입력하고, handleOperator로 덧셈 연산을 설정한 후, handleDigit으로 y에 $y.input1, $y.input2를 입력하면, result는 $expectedAdd 이어야 한다',
          ({ x, y, expectedAdd }) => {
            handleActions([
              calculator.current.handleDigit(x.input1),
              calculator.current.handleDigit(x.input2),
              calculator.current.handleOperator(
                BUTTON.OPERATION.CHILDREN.ADD.VALUE
              ),
              calculator.current.handleDigit(y.input1),
              calculator.current.handleDigit(y.input2),
              calculator.current.handleOperator(
                BUTTON.OPERATION.CHILDREN.EQUAL.VALUE
              ),
            ]);

            expect(calculator.current.result).toBe(expectedAdd);
          }
        );
      });

      describe('뺄셈 연산 테스트', () => {
        test.each(testCases)(
          'handleDigit으로 x에 $x.input1, $x.input2를 입력하고, handleOperator로 뺄셈 연산을 설정한 후, handleDigit으로 y에 $y.input1, $y.input2를 입력하면, result는 $expectedSubtract 이어야 한다',
          ({ x, y, expectedSubtract }) => {
            handleActions([
              calculator.current.handleDigit(x.input1),
              calculator.current.handleDigit(x.input2),
              calculator.current.handleOperator(
                BUTTON.OPERATION.CHILDREN.SUBTRACT.VALUE
              ),
              calculator.current.handleDigit(y.input1),
              calculator.current.handleDigit(y.input2),
              calculator.current.handleOperator(
                BUTTON.OPERATION.CHILDREN.EQUAL.VALUE
              ),
            ]);

            expect(calculator.current.result).toBe(expectedSubtract);
          }
        );
      });

      describe('곱셈 연산 테스트', () => {
        test.each(testCases)(
          'handleDigit으로 x에 $x.input1, $x.input2를 입력하고, handleOperator로 곱셈 연산을 설정한 후, handleDigit으로 y에 $y.input1, $y.input2를 입력하면, result는 $expectedMultiply 이어야 한다',
          ({ x, y, expectedMultiply }) => {
            handleActions([
              calculator.current.handleDigit(x.input1),
              calculator.current.handleDigit(x.input2),
              calculator.current.handleOperator(
                BUTTON.OPERATION.CHILDREN.MULTIPLY.VALUE
              ),
              calculator.current.handleDigit(y.input1),
              calculator.current.handleDigit(y.input2),
              calculator.current.handleOperator(
                BUTTON.OPERATION.CHILDREN.EQUAL.VALUE
              ),
            ]);

            expect(calculator.current.result).toBe(expectedMultiply);
          }
        );
      });

      describe('나눗셈 연산 테스트', () => {
        test.each(testCases)(
          'handleDigit으로 x에 $x.input1, $x.input2를 입력하고, handleOperator로 나눗셈 연산을 설정한 후, handleDigit으로 y에 $y.input1, $y.input2를 입력하면, result는 $expectedDivide 이어야 한다',
          ({ x, y, expectedDivide }) => {
            handleActions([
              calculator.current.handleDigit(x.input1),
              calculator.current.handleDigit(x.input2),
              calculator.current.handleOperator(
                BUTTON.OPERATION.CHILDREN.DIVIDE.VALUE
              ),
              calculator.current.handleDigit(y.input1),
              calculator.current.handleDigit(y.input2),
              calculator.current.handleOperator(
                BUTTON.OPERATION.CHILDREN.EQUAL.VALUE
              ),
            ]);

            expect(calculator.current.result).toBe(expectedDivide);
          }
        );
      });
    });

    // FIXME: 에러 캐칭이 안되서 테스트를 skip으로 등록해두었습니다.
    describe.skip('예외 테스트', () => {
      /**
       * 연산 결과가 Infinity이거나, 0으로 나누는 경우, 에러가 발생해야 한다.
       */
      const testCases = [
        {
          x: Infinity,
          y: 1,
          expectedAddError: MESSAGE.ERROR.RESULT.INFINITE,
          expectedSubtractError: MESSAGE.ERROR.RESULT.INFINITE,
          expectedMultiplyError: MESSAGE.ERROR.RESULT.INFINITE,
          expectedDivideError: MESSAGE.ERROR.RESULT.INFINITE,
        },
        {
          x: Infinity,
          y: 0,
          expectedAddError: MESSAGE.ERROR.RESULT.INFINITE,
          expectedSubtractError: MESSAGE.ERROR.RESULT.INFINITE,
          expectedMultiplyError: MESSAGE.ERROR.RESULT.INFINITE,
          expectedDivideError: MESSAGE.ERROR.DIVIDE.BY_ZERO,
        },
      ];

      describe('덧셈 연산 예외 테스트', () => {
        test.each(testCases)(
          'handleDigit으로 x에 $x를 입력하고, handleOperator로 덧셈 연산을 설정한 후, handleDigit으로 y에 $y를 입력하면, result는 $expectedAddError 이어야 한다',
          ({ x, y, expectedAddError }) => {
            const calculate = () => {
              handleActions([
                calculator.current.handleDigit(x),
                calculator.current.handleOperator(
                  BUTTON.OPERATION.CHILDREN.ADD.VALUE
                ),
                calculator.current.handleDigit(y),
                calculator.current.handleOperator(
                  BUTTON.OPERATION.CHILDREN.EQUAL.VALUE
                ),
              ]);
            };

            expect(calculate).toThrowError(expectedAddError);
          }
        );
      });

      describe('뺄셈 연산 예외 테스트', () => {
        test.each(testCases)(
          'handleDigit으로 x에 $x를 입력하고, handleOperator로 뺄셈 연산을 설정한 후, handleDigit으로 y에 $y를 입력하면, result는 $expectedSubtractError 이어야 한다',
          ({ x, y, expectedSubtractError }) => {
            const calculate = () => {
              handleActions([
                calculator.current.handleDigit(x),
                calculator.current.handleOperator(
                  BUTTON.OPERATION.CHILDREN.SUBTRACT.VALUE
                ),
                calculator.current.handleDigit(y),
                calculator.current.handleOperator(
                  BUTTON.OPERATION.CHILDREN.EQUAL.VALUE
                ),
              ]);
            };

            expect(calculate).toThrowError(expectedSubtractError);
          }
        );
      });

      describe('곱셈 연산 예외 테스트', () => {
        test.each(testCases)(
          'handleDigit으로 x에 $x를 입력하고, handleOperator로 곱셈 연산을 설정한 후, handleDigit으로 y에 $y를 입력하면, result는 $expectedMultiplyError 이어야 한다',
          ({ x, y, expectedMultiplyError }) => {
            const calculate = () => {
              handleActions([
                calculator.current.handleDigit(x),
                calculator.current.handleOperator(
                  BUTTON.OPERATION.CHILDREN.MULTIPLY.VALUE
                ),
                calculator.current.handleDigit(y),
                calculator.current.handleOperator(
                  BUTTON.OPERATION.CHILDREN.EQUAL.VALUE
                ),
              ]);
            };

            expect(calculate).toThrowError(expectedMultiplyError);
          }
        );
      });

      describe('나눗셈 연산 예외 테스트', () => {
        test.each(testCases)(
          'handleDigit으로 x에 $x를 입력하고, handleOperator로 나눗셈 연산을 설정한 후, handleDigit으로 y에 $y를 입력하면, result는 $expectedDivideError 이어야 한다',
          ({ x, y, expectedDivideError }) => {
            const calculate = () => {
              handleActions([
                calculator.current.handleDigit(x),
                calculator.current.handleOperator(
                  BUTTON.OPERATION.CHILDREN.DIVIDE.VALUE
                ),
                calculator.current.handleDigit(y),
                calculator.current.handleOperator(
                  BUTTON.OPERATION.CHILDREN.EQUAL.VALUE
                ),
              ]);
            };

            expect(calculate).toThrowError(expectedDivideError);
          }
        );
      });
    });
  });

  describe('초기화(handleModifier) 테스트', () => {
    /**
     * handleDigit을 사용하여 x를 입력한 후,
     * handleOperator를 사용하여 operator를 설정한 후,
     * handleDigit을 사용하여 y를 입력한 후,
     * handleModifier를 사용하여 초기화하면, x, y, result, operator는 각각 0, 0, 0, null이어야 한다.
     */
    const testCases = [
      {
        x: 1,
        operator: BUTTON.OPERATION.CHILDREN.ADD.VALUE,
        y: 1,
      },
      {
        x: 0,
        operator: BUTTON.OPERATION.CHILDREN.SUBTRACT.VALUE,
        y: 0,
      },
      {
        x: 9,
        operator: BUTTON.OPERATION.CHILDREN.MULTIPLY.VALUE,
        y: 9,
      },
      {
        x: 1,
        operator: BUTTON.OPERATION.CHILDREN.DIVIDE.VALUE,
        y: 1,
      },
    ];

    test.each(testCases)(
      'handleDigit으로 x에 $x를 입력하고, handleOperator로 $operator를 설정한 후, handleDigit으로 y에 $y를 입력하고, handleModifier를 사용하면, x, y, result, operator는 각각 0, 0, 0, null이어야 한다',
      ({ x, operator, y }) => {
        handleActions([
          calculator.current.handleDigit(x),
          calculator.current.handleOperator(operator),
          calculator.current.handleDigit(y),
          calculator.current.handleModifier(BUTTON.MODIFIER.CHILDREN.AC.VALUE),
        ]);

        const currentValue = {
          current: {
            x: calculator.current.current.x,
            y: calculator.current.current.y,
          },
          result: calculator.current.result,
          operator: calculator.current.operator,
        };

        expect(currentValue).toEqual({
          current: {
            x: 0,
            y: 0,
          },
          result: 0,
          operator: null,
        });
      }
    );
  });
});
