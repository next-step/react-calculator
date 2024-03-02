import {expect, test, describe} from "vitest"
import {checkContinuousOperand, checkInputStartOperand, hasConsecutiveLimitDigits} from "../caculator/validator.ts"

describe('계산기 입력 값 테스트', () => {
    test('연속된 연산자를 입력할 경우 연속된 연산자가 존재여부를 반환한다.', () => {
        expect(checkContinuousOperand("X", "-")).toBe(true)
        expect(checkContinuousOperand("1", "-")).toBe(false)
        expect(checkContinuousOperand("+", "2")).toBe(false)
    })
    test('첫 입력 값으로 연산자를 입력할 경우 입력 시작이 연산자라는 사실을 반환한다.', () => {
        expect(checkInputStartOperand("0", "-")).toBe(true)
        expect(checkInputStartOperand("1", "-")).toBe(false)
        expect(checkInputStartOperand("12", "-")).toBe(false)
    })
    test('연속된 숫자가 4개 이상일 경우 4개 이상의 숫자가 연속 되었다고 알려준다.', () => {
        expect(hasConsecutiveLimitDigits("2234")).toBe(true)
        expect(hasConsecutiveLimitDigits("234+5555")).toBe(true)
        expect(hasConsecutiveLimitDigits("234")).toBe(false)
    })
})
