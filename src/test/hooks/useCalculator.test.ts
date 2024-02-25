import { ERROR_MESSAGE } from '@/constants/message'
import { useCalculator } from '@/hooks/useCalculator'
import { act, renderHook } from '@testing-library/react'

describe('hooks/useCalculator', () => {
  test('formula - 현재 연산 결과가 없는 경우, 빈 문자열이 보여져야 한다.', () => {
    // Given
    const { result } = renderHook(useCalculator)

    // When, Then
    expect(result.current.formula).toBe('')
  })

  test('clearFormula() - 현재 연산 결과를 빈 문자열로 초기화한다.', () => {
    // Given
    const { result } = renderHook(useCalculator)
    act(() => result.current.appendNumber(1))

    // When
    act(() => result.current.clearFormula())

    // Then
    expect(result.current.formula).toBe('')
  })

  test('appendOperation() - 현재 연산 결과에 연산 기호를 추가한다.', () => {
    // Given
    const { result } = renderHook(useCalculator)
    act(() => result.current.appendNumber(2))

    // When
    act(() => result.current.appendOperation('sum'))

    // Then
    expect(result.current.formula).toBe('2+')
  })

  test('appendOperation() - 추가하려는 연산 결과에 이미 연산 기호가 추가되어 있는 경우, 오류를 발생시킨다.', () => {
    // Given
    const spy = vi.fn()
    vi.spyOn(window, 'alert').mockImplementation(spy)
    const { result } = renderHook(useCalculator)
    act(() => result.current.appendNumber(2))
    act(() => result.current.appendOperation('sum'))

    // When
    act(() => result.current.appendOperation('sum'))

    // Then
    expect(spy).toBeCalledWith(ERROR_MESSAGE.NOT_VALID_FORMULA)
  })

  test('appendNumber() - 현재 연산 결과에 숫자 기호를 추가한다.', () => {
    // Given
    const { result } = renderHook(useCalculator)

    // When
    act(() => result.current.appendNumber(2))

    // Then
    expect(result.current.formula).toBe('2')
  })

  test('appendNumber() - 추가하려는 숫자가 세 자리가 넘어가는 경우, 오류를 발생시킨다.', () => {
    // Given
    const spy = vi.fn()
    vi.spyOn(window, 'alert').mockImplementation(spy)
    const { result } = renderHook(useCalculator)

    // When
    act(() => result.current.appendNumber(2345))

    // Then
    expect(spy).toBeCalledWith(ERROR_MESSAGE.MAX_LENGTH_NUMBER)
  })

  test('calculateAndSetFormula() - 연산 결과값이 formula에 반영되어야 한다.', () => {
    // Given
    const { result } = renderHook(useCalculator)
    act(() => result.current.appendNumber(22))
    act(() => result.current.appendOperation('sum'))
    act(() => result.current.appendNumber(2))
    act(() => result.current.appendOperation('subtract'))
    act(() => result.current.appendNumber(3))

    // When
    act(() => result.current.calculateAndSetFormula())

    // Then
    expect(result.current.formula).toBe('21')
  })
})
