import { ERROR_MESSAGE } from '@/constants/message'
import { isNumber } from './validation'

export class Calculator {
  #value: number

  constructor() {
    this.#value = 0
  }

  getValue() {
    return this.#value
  }

  sum(a: number, b: number) {
    this.#validateNumber(a, b)
    this.#setValue(a + b)
  }

  subtract(a: number, b: number) {
    this.#validateNumber(a, b)
    this.#setValue(a - b)
  }

  multiply(a: number, b: number) {
    this.#validateNumber(a, b)
    this.#setValue(a * b)
  }

  division(a: number, b: number) {
    this.#validateNumber(a, b)
    this.#setValue(a / b)
  }

  clear() {
    this.#value = 0
  }

  #validateNumber(a: number, b: number) {
    if (!(isNumber(a) && isNumber(b))) {
      throw new Error(ERROR_MESSAGE.NOT_VALID_NUMBER)
    }
  }

  #setValue(value: number) {
    const newValue = Math.trunc(value)
    this.#value = newValue === -0 ? 0 : newValue
  }
}
