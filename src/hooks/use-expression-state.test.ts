import { renderHook } from '@testing-library/react'
import { useExpressionState } from './use-expression-state'
import { act } from '@/tests/test-utils'
import { INPUT_NUMBER_FIRST_ERROR_MESSAGE, THREE_DIGIT_LIMIT_ERROR_MESSAGE } from '@/constants'
import { getErrorMessage } from '@/utils/get-error-message'

describe('useExpressionState Test', () => {
  const EXPRESSION = 'expression'
  const UPDATE = 'updateExpression'
  const CALCULATE = 'calculateExpression'
  test('초기 값은 0이다', () => {
    const {
      result: { current },
    } = renderHook(() => useExpressionState())
    expect(current[EXPRESSION]).toBe('0')
  })

  test('update 하면 update한 expression을 반환한다', () => {
    const { result } = renderHook(() => useExpressionState())
    const { updateExpression } = result.current
    act(() => updateExpression('123'))
    expect(result.current[EXPRESSION]).toBe('123')
  })

  test('다른 값에서 clear하면 그 값은 0이된다', () => {
    const { result } = renderHook(() => useExpressionState())
    const { updateExpression, clearExpression } = result.current
    act(() => updateExpression('123'))
    expect(result.current[EXPRESSION]).toBe('123')
    act(() => clearExpression())
    expect(result.current[EXPRESSION]).toBe('0')
  })

  test('결과가 Infinity로 되면 "오류"임을 반환하며, 그 이후에는 업데이트가 불가능 하다', () => {
    const { result } = renderHook(() => useExpressionState())

    act(() => result.current[UPDATE]('5/0'))
    expect(result.current[EXPRESSION]).toBe('5/0')

    act(() => result.current[CALCULATE]())
    expect(result.current[EXPRESSION]).toBe('오류')

    act(() => result.current[UPDATE]('123'))
    expect(result.current[EXPRESSION]).toBe('오류')
  })

  test('결과가 -Infinity로 되면 "오류"임을 반환하며, 그 이후에는 업데이트가 불가능 하다', () => {
    const { result } = renderHook(() => useExpressionState())

    act(() => result.current[UPDATE]('-5/0'))
    expect(result.current[EXPRESSION]).toBe('-5/0')

    act(() => result.current[CALCULATE]())
    expect(result.current[EXPRESSION]).toBe('오류')

    act(() => result.current[UPDATE]('123'))
    expect(result.current[EXPRESSION]).toBe('오류')
  })

  test('세자리 이상의 숫자가 입력되면 ERROR가 발생한다', () => {
    const { result } = renderHook(() => useExpressionState())

    try {
      act(() => result.current[UPDATE]('1'))
      act(() => result.current[UPDATE]('1'))
      act(() => result.current[UPDATE]('1'))
      act(() => result.current[UPDATE]('1'))
    } catch (error) {
      expect(getErrorMessage(error)).toBe(THREE_DIGIT_LIMIT_ERROR_MESSAGE)
    }
  })

  test('앞에 숫자 없이 연산자를 입력하면 ERROR가 발생한다', () => {
    const { result } = renderHook(() => useExpressionState())
    expect(() => act(() => result.current[UPDATE]('+'))).toThrowError(
      INPUT_NUMBER_FIRST_ERROR_MESSAGE,
    )
  })
})
