import { renderHook } from '@testing-library/react'
import { useExpressionState } from './use-expression-state'
import { act } from '@/tests/test-utils'

describe('useExpressionState Test', () => {
  test('초기 값은 0이다', () => {
    const { result } = renderHook(() => useExpressionState())
    expect(result.current.expression).toBe('0')
  })

  test('update 하면 update한 expression을 반환한다', () => {
    const { result } = renderHook(() => useExpressionState())
    act(() => result.current.updateByOperand(1))
    act(() => result.current.updateByOperand(2))
    act(() => result.current.updateByOperand(3))
    expect(result.current.expression).toBe('123')
  })

  test('clear하면 그 값은 0이되며 leftOperand, rightOperand, operator는 초기화 된다', () => {
    const { result } = renderHook(() => useExpressionState())
    act(() => result.current.clearExpression())
    expect(result.current.expression).toBe('0')
  })

  test('결과가 Infinity로 되면 "오류"임을 반환하며, 그 이후에는 업데이트가 불가능 하다', () => {
    const { result } = renderHook(() => useExpressionState())
    expect(result.current.expression).toBe('0')

    act(() => {
      result.current.updateByOperand(5)
      result.current.updateByOperator('/')
      result.current.updateByOperand(0)
    })

    expect(result.current.expression).toBe('5/0')

    act(() => result.current.calculateExpression())
    expect(result.current.expression).toBe('오류')
  })
})
