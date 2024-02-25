import { OPERATORS } from './Calculator.const'

export type CalculatorProps = {
  /** 입력할 수 있는 숫자의 최대 자리 수 */
  maxNumberLength?: number
}

export type UseCalculatorProps = {
  /** 입력할 수 있는 숫자의 최대 자리 수 */
  maxNumberLength?: number
}

export type Operator = (typeof OPERATORS)[number]
