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

    this.#value = Math.trunc(a + b)
  }

  clear() {
    this.#value = 0
  }
}