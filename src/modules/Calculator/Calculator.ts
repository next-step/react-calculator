import { ICalculator } from './interface'

export class Calculator implements ICalculator {
  add(a: number, b: number): number {
    return a + b
  }

  minus(a: number, b: number): number {
    return a - b
  }

  multiplication(a: number, b: number): number {
    return a * b
  }

  division(a: number, b: number): number {
    return a / b
  }
}
