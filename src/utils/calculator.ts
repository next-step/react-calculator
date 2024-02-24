import { ERROR_MESSAGE } from "@/constants/message"
import { isNumber } from "./validation"

export class Calculator {
  #value: number

  constructor() {
    this.#value = 0
  }

  getValue() {
    return this.#value
  }

  sum(a: number, b: number) {
    if(!(isNumber(a) && isNumber(a))) {
      throw new Error(ERROR_MESSAGE.NOT_VALID_NUMBER)
    }

    const result = Math.trunc(a + b)
    this.#value = Object.is(result, -0) ? 0 : result
  }

  subtract(a: number, b: number) {
    if(!(isNumber(a) && isNumber(a))) {
      throw new Error(ERROR_MESSAGE.NOT_VALID_NUMBER)
    }

    const result = Math.trunc(a - b)
    this.#value = Object.is(result, -0) ? 0 : result
  }

  clear() {
    this.#value = 0
  }
}