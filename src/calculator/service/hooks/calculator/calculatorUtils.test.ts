import { describe, it, expect } from "vitest";
import { CalculatorReceiver } from "../../commands/CalculatorCommands";
import {
	isValidExpressionAndUnderLimit,
	parseFourBasicOperationsExpression,
	performCalculation,
	extractLastOperation
} from "./calculatorUtils";

describe("계산기 유틸리티 함수 테스트", () => {
	const receiver = new CalculatorReceiver();

	describe("isValidExpressionAndUnderLimit 함수 검증", () => {
		it("숫자 뒤에 연산자를 입력할 수 있다", () => {
			// Given: 현재 표현식이 '123'이고, 제한이 1000일 때
			// When: '+' 연산자를 입력했을 때
			// Then: 입력이 허용되어야 한다
			expect(isValidExpressionAndUnderLimit("123", "+", 1000)).toBe(true);
		});

		it("연산자를 연속으로 입력할 수 없다", () => {
			// Given: 현재 표현식이 '123+'이고, 제한이 1000일 때
			// When: '+' 연산자를 다시 입력했을 때
			// Then: 입력이 허용되지 않아야 한다
			expect(isValidExpressionAndUnderLimit("123+", "+", 1000)).toBe(false);
		});

		it("입력된 숫자가 제한을 초과할 경우 입력을 막는다", () => {
			// Given: 현재 표현식이 '999'이고, 제한이 1000일 때
			// When: '9' 숫자를 추가로 입력했을 때
			// Then: 입력이 허용되지 않아야 한다
			expect(isValidExpressionAndUnderLimit("999", "9", 1000)).toBe(false);
		});
	});

	describe("parseExpression 함수 검증", () => {
		it("표현식을 숫자와 연산자로 올바르게 분리한다", () => {
			// Given: '123+456-789' 표현식이 주어졌을 때
			// When: 표현식을 파싱했을 때
			// Then: ["123", "+", "456", "-", "789"]로 올바르게 분리되어야 한다
			expect(parseFourBasicOperationsExpression("123+456-789")).toEqual([
				"123",
				"+",
				"456",
				"-",
				"789"
			]);
		});
	});

	describe("performCalculation 함수 검증", () => {
		it.each([
			["10+20", 30],
			["10-20", -10],
			["-1/1", -1],
			["0/1", 0],
			["1/0", "오류"],
			["1X2", 2],
			["2X3", 6]
		])("표현식 '%s'의 계산 결과는 %s이다", (expression, expected) => {
			const parsedExpression = parseFourBasicOperationsExpression(expression);
			const result = performCalculation(receiver, parsedExpression);
			expect(result).toBe(expected);
		});
	});

	describe("extractLastOperation 함수 검증", () => {
		it("파싱된 표현식에서 마지막 연산을 올바르게 추출한다", () => {
			// Given: "10 + 20 - 5" 표현식이 주어졌을 때
			// When: 마지막 연산을 추출했을 때
			// Then: { operator: "-", number: 5 }가 반환되어야 한다
			const result = extractLastOperation(["10", "+", "20", "-", "5"]);
			expect(result).toEqual({ operator: "-", number: 5 });
		});
	});
});
