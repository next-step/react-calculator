type Fn = (a: number, b: number) => number

export interface ICalculator {
  /** 덧셈 */
  add: Fn
  /** 뺄셈 */
  minus: Fn
  /** 곱셈 */
  multiplication: Fn
  /** 나눗셈 */
  division: Fn
}
