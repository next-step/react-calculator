import { ERROR_MESSAGES, CALCULATOR } from "./constant";

const { RESTRICTIONS, INITIAL_STATE, MODIFIER, NATURAL_NUMBER } = CALCULATOR;

const isNumber = (s) => /[0-9]/g.test(s);
const isBlank = (v) => [""].some((value) => String(value) === String(v));
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
    console.log(value, { ...this.#state });

    if (isNumber(value)) {
      this.#handleNumber(value);
      this.#state.isInitialized = false;
      return;
    }
    this.#handleModifier(value);
    this.#state.isInitialized = false;
  }

  output() {
    const { modifier, value1, value2 } = this.#state;
    if (modifier) return value2 || this.#state.value1;
    return isInfiniy(value1) ? "오류" : value1;
  }

  #setState(state = {}) {
    this.#state = {
      ...INITIAL_STATE,
      ...state,
      isAccumulated: true,
      isInitialized: false,
    };
  }

  #handleNumber(value) {
    const { modifier, value1, value2, isAccumulated } = this.#state;

    if (modifier === null) {
      this.#state.value1 = isAccumulated ? String(value) : this.#getAddedNumber(value1, value);
      this.#state.isAccumulated = false;
      return;
    }

    this.#state.value2 = isAccumulated ? String(value) : this.#getAddedNumber(value2, value);
    this.#state.isAccumulated = false;
  }

  #getAddedNumber(oldValue, newValue) {
    const number = Number(newValue);
    const accumulated = oldValue + String(number);

    if (accumulated.length > RESTRICTIONS.MAX_NUMBER_DIGITS) {
      throw new Error(ERROR_MESSAGES.MAX_THREE_DIGIT_NUMBERS);
    }

    return this.#state.isInitialized || isBlank(oldValue) ? number : accumulated;
  }

  #handleModifier(value) {
    if (value === MODIFIER.EQUAL || this.#state.modifier) {
      this.#calculate();
    }

    if (value !== MODIFIER.EQUAL) this.#state.modifier = value;
  }

  #calculate() {
    const { modifier, value1, value2 } = this.#state;

    const computationalMethods = {
      [MODIFIER.ADD]: (number1, number2) => number1 + number2,
      [MODIFIER.SUBTRACT]: (number1, number2) => number1 - number2,
      [MODIFIER.MULTIPLY]: (number1, number2) => number1 * number2,
      [MODIFIER.MULTIPLY_LOWER]: (number1, number2) => number1 * number2,
      [MODIFIER.DIVIDE]: (number1, number2) => Math.floor(number1 / number2),
    };

    if (!modifier) {
      this.#setState({
        value1: value1 || NATURAL_NUMBER.ZERO,
      });
    }

    this.#setState({
      value1: String(computationalMethods[modifier](Number(value1), Number(value2))),
    });
  }
}
