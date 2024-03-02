import {expect, test, describe} from "vitest"
import {checkContinuousOperand, hasConsecutiveFourDigits} from "../apis/validator.ts"

describe('계산기 입력 값 테스트', () => {
    test('연속된 연산자를 입력할 경우 연속된 연산자가 존재여부를 반환한다.', () => {
        expect(checkContinuousOperand("X", "-")).toBe(true)
        expect(checkContinuousOperand("1", "-")).toBe(false)
        expect(checkContinuousOperand("+", "2")).toBe(false)
    })
    test('연속된 숫자가 4개 이상일 경우 4개 이상의 숫자가 연속 되었다고 알려준다.', () => {
        expect(hasConsecutiveFourDigits("2234")).toBe(true)
        expect(hasConsecutiveFourDigits("234+5555")).toBe(true)
        expect(hasConsecutiveFourDigits("234")).toBe(false)
    })
})
