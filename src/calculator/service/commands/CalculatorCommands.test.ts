import { describe, it, expect, beforeEach } from "vitest";
import {
	AddCommand,
	CalculatorInvoker,
	CalculatorReceiver,
	DivideCommand,
	MultiplyCommand,
	ResetCommand,
	SubtractCommand
} from "./CalculatorCommands";

describe("계산기 사칙연산 테스트", () => {
	let receiver: CalculatorReceiver;
	let invoker: CalculatorInvoker;

	beforeEach(() => {
		receiver = new CalculatorReceiver();
		invoker = new CalculatorInvoker(receiver);
	});

	describe("덧셈 테스트", () => {
		it.each([
			[123, 456, 579],
			[0, 123, 123],
			[-123, 123, 0]
		])("덧셈: %s + %s = %s", (first, second, expected) => {
			invoker.invoke(new ResetCommand(receiver));
			invoker.invoke(new AddCommand(receiver, first));
			invoker.invoke(new AddCommand(receiver, second));
			expect(receiver.getCurrentValue()).toBe(expected);
		});
	});

	describe("뺄셈 테스트", () => {
		it.each([
			[-123, -123, 0],
			[0, 123, -123],
			[12, 11, 1]
		])("뺄셈: %s - %s = %s", (first, second, expected) => {
			invoker.invoke(new ResetCommand(receiver));
			invoker.invoke(new AddCommand(receiver, first));
			invoker.invoke(new SubtractCommand(receiver, second));
			expect(receiver.getCurrentValue()).toBe(expected);
		});
	});

	describe("곱셈 테스트", () => {
		it.each([
			[123, 2, 246],
			[-123, -1, 123],
			[0, 123, 0]
		])("곱셈: %s * %s = %s", (first, second, expected) => {
			invoker.invoke(new ResetCommand(receiver));
			invoker.invoke(new AddCommand(receiver, first));
			invoker.invoke(new MultiplyCommand(receiver, second));
			expect(receiver.getCurrentValue()).toBe(expected);
		});
	});

	describe("나눗셈 테스트", () => {
		it.each([
			[246, 2, 123],
			[-123, -1, 123],
			[123, 0, Infinity]
		])("나눗셈: %s / %s = %s", (first, second, expected) => {
			invoker.invoke(new ResetCommand(receiver));
			invoker.invoke(new AddCommand(receiver, first));
			invoker.invoke(new DivideCommand(receiver, second));
			expect(receiver.getCurrentValue()).toBe(expected);
		});
	});
});

describe("계산기 기능 테스트", () => {
	let receiver: CalculatorReceiver;
	let invoker: CalculatorInvoker;

	beforeEach(() => {
		receiver = new CalculatorReceiver();
		invoker = new CalculatorInvoker(receiver);
	});
	it("계산 결과를 표현할 때 소수점 이하는 버림한다", () => {
		// Given: 계산기가 초기 상태일 때
		invoker.invoke(new ResetCommand(receiver));

		// When: 사용자가 10을 3으로 나누도록 입력했을 때
		invoker.invoke(new AddCommand(receiver, 10));
		invoker.invoke(new DivideCommand(receiver, 3));

		// When: 연산을 수행했을 때
		// Then: 결과가 3이어야 한다 (소수점 이하 버림)
		expect(invoker.getCurrentValue()).toBe(3);
	});

	it("AC(All Clear)버튼을 누르면 0으로 초기화한다", () => {
		// Given: 사용자가 임의의 연산을 수행했다고 가정할 때
		// 예: 7 + 2의 연산을 가정합니다.
		invoker.invoke(new AddCommand(receiver, 7));
		invoker.invoke(new AddCommand(receiver, 2));

		// When: 사용자가 AC 버튼을 눌렀을 때
		invoker.invoke(new ResetCommand(receiver));

		// Then: 계산기의 값이 0으로 초기화되어야 한다
		expect(invoker.getCurrentValue()).toBe(0);
	});

	it('연산의 결과값이 Infinity일 경우 "Infinity"라는 문자열을 보여준다', () => {
		// Given: 사용자가 0으로 나누기를 시도했다고 가정할 때
		invoker.invoke(new AddCommand(receiver, 10));
		invoker.invoke(new DivideCommand(receiver, 0));

		// When: 연산을 수행했을 때
		// Then: Infinity라는 메시지를 표시해야 한다
		expect(invoker.getCurrentValue()).toBe(Infinity);
	});
});
