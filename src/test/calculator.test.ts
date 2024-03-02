import {expect, test, describe} from "vitest"
import calculate from "../apis/calculator.ts"

describe('계산기 테스트', () => {
    test('두 개 숫자 더하기 테스트', () => {
        expect(calculate("1 + 2")).toBe("3")
    })
    test('더하기를 할 때 기호로 계산이 끝날 경우 마지막 값은 0을 더한다', () => {
        expect(calculate("2 + ")).toBe("2")
    })

    test('두 개 숫자 빼기 테스트', () => {
        expect(calculate("1 - 2")).toBe("-1")
    })
    test('빼기를 할 때 기호로 계산이 끝날 경우 마지막 값은 0을 뺀다', () => {
        expect(calculate("2 - ")).toBe("2")
    })

    test('두 개 숫자 곱하기 테스트', () => {
        expect(calculate("333 X 444")).toBe("147852")
    })
    test('곱하기를 할 때 기호로 계산이 끝날 경우 마지막 값은 0을 곱한다.', () => {
        expect(calculate("333 X ")).toBe("0")
    })

    test('두 개 숫자 나누기 테스트', () => {
        expect(calculate("333 / 111")).toBe("3")
    })
    test('두 개 숫자 나누기 테스트 - 나머지가 나올 경우 소수점 이하는 버림한다.', () => {
        expect(calculate("333 / 444")).toBe("0")
    })
    test('나누기를 할 때 기호로 계산이 끝날 경우 마지막 값은 0을 나눈다.', () => {
        expect(calculate("999 / ")).toBe("Infinity")
    })

    test('연산을 할 때 연산자가 2개 이상일 경우 첫번째 연산자 이외의 연산자는 무시한다.', () => {
        expect(calculate("1 + 2 * 3 / 0")).toBe("3")
    })
    test('연산을 할 때 숫자가 3개 이상이어도 2번째 숫자 까지면 연산을 한다.', () => {
        expect(calculate("1 + 2 + 3")).toBe("3")
    })
})
