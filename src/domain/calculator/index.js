import { ERROR_MESSAGES, CALCULATOR } from './constant';

const { RESTRICTIONS, INITIAL_STATE, MODIFIER } = CALCULATOR;

const isNumber = (s) => /[0-9]/g.test(s);
const isBlank = (v) => v === '';

const isValidNumber = (v) => isFinite(Number(v)) && !isNaN(Number(v));

export default class Calculator {
  #accumulatedState = { ...INITIAL_STATE };

  constructor() {
    this.clear();
  }

  clear() {
    this.#accumulatedState = { ...INITIAL_STATE };
  }

  input(value) {
    if (isNumber(value)) {
      this.#handleNumber(value);
      this.#accumulatedState.isInitialized = false;
      return;
    }
    this.#handleModifier(value);
    this.#accumulatedState.isInitialized = false;
  }

  get output() {
    const { modifier, value1, value2 } = this.#accumulatedState;

    //prettier-ignore
    return  modifier && value2
      ? value2
      : isValidNumber(value1)
      ? value1
      : "오류";
  }

  #setAccumulatedState(state = {}) {
    this.#accumulatedState = {
      ...INITIAL_STATE,
      isAccumulated: true,
      isInitialized: false,
      ...state,
    };
  }

  #handleNumber(value) {
    const { modifier, value1, value2, isAccumulated } = this.#accumulatedState;

    if (modifier === null) {
      this.#setAccumulatedState({
        value1: isAccumulated ? String(value) : this.#getAddedNumber(value1, value),
        isAccumulated: false,
      });
      return;
    }

    this.#setAccumulatedState({
      value1,
      modifier,
      value2: isAccumulated ? String(value) : this.#getAddedNumber(value2, value),
      isAccumulated: false,
    });
  }

  #getAddedNumber(oldValue, newValue) {
    const number = Number(newValue);
    const accumulated = oldValue + String(number);

    if (accumulated.length > RESTRICTIONS.MAX_NUMBER_DIGITS) {
      throw new Error(ERROR_MESSAGES.MAX_THREE_DIGIT_NUMBERS);
    }

    return this.#accumulatedState.isInitialized || isBlank(oldValue) ? String(number) : accumulated;
  }

  #handleModifier(value) {
    const { modifier, value1, value2 } = this.#accumulatedState;

    // prettier-ignore
    const isOnceRequestForCalculating = 
      value === MODIFIER.EQUAL && this.#accumulatedState.modifier !== null;
    const isFullInAccumulatedState = value1 && value2 && modifier;

    if (isOnceRequestForCalculating || isFullInAccumulatedState) {
      this.#calculate();
    }

    if (value !== MODIFIER.EQUAL) this.#accumulatedState.modifier = value;
  }

  #calculate() {
    const { modifier, value1, value2 } = this.#accumulatedState;
    if (!modifier) return;

    const computationalMethods = {
      [MODIFIER.ADD]: (number1, number2) => number1 + number2,
      [MODIFIER.SUBTRACT]: (number1, number2) => number1 - number2,
      [MODIFIER.MULTIPLY]: (number1, number2) => number1 * number2,
      [MODIFIER.MULTIPLY_LOWER]: (number1, number2) => number1 * number2,
      [MODIFIER.DIVIDE]: (number1, number2) => Math.floor(number1 / number2),
    };

    this.#setAccumulatedState({
      value1: String(computationalMethods[modifier](Number(value1), Number(value2))),
    });
  }
}
