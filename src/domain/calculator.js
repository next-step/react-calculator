import { ERROR_MESSAGES, CALCULATOR } from "./constant";

const isNumber = (s) => /[0-9]/g.test(s);
// const modifiers = ["/", "X", "-", "+", "="];

const { RESTRICTIONS, INITIAL_STATE } = CALCULATOR;

const isBlank = (v) => ["", "0"].some((value) => String(value) === String(v));
const isInfiniy = (v) => [Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY].some((infinity) => infinity === v);

export default class Calculator {
  #state = { ...INITIAL_STATE };

  constructor() {
    this.clear();
  }

  clear() {
    this.#state = { ...INITIAL_STATE };
  }

  input(value) {
    if (isNumber(value)) {
      this.#handleNumber(value);
      return;
    }
    this.#handleModifier(value);
  }

  output() {
    const { modifier, value1, value2, result } = this.#state;
    if (result) return isInfiniy(result) ? "오류" : result;
    else if (modifier) return value2 || this.#state.value1;
    return value1;
  }

  #handleNumber(value) {
    if (this.#state.modifier === null) {
      this.#state.value1 = this.#getAddedNumber(this.#state.value1, value);
      return;
    }
    this.#state.value2 = this.#getAddedNumber(this.#state.value2, value);
  }

  #getAddedNumber(current, newValue) {
    const number = Number(newValue);
    const accumulated = current + String(number);
    if (accumulated.length > RESTRICTIONS.MAX_NUMBER_DIGITS) throw new Error(ERROR_MESSAGES.MAX_THREE_DIGIT_NUMBERS);
    return isBlank(current) ? number : accumulated;
  }

  #handleModifier(value) {
    const { modifier, value1, value2 } = this.#state;

    if (value === "=") {
      const computationalMethods = {
        "+": (number1, number2) => number1 + number2,
        "-": (number1, number2) => number1 - number2,
        x: (number1, number2) => number1 * number2,
        X: (number1, number2) => number1 * number2,
        "/": (number1, number2) => Math.floor(number1 / number2),
      };

      if (!modifier) {
        this.#state.result = value1 ? Number(value1) : "0";
        return;
      }

      this.#state.result = computationalMethods[modifier](Number(value1), Number(value2));
      return;
    }

    if (modifier && value2) {
      this.#state = {
        ...INITIAL_STATE,
        value1: this.#state.result,
      };
    }
    this.#state.modifier = value;
  }
}
