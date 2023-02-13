type Operator = 'X' | '/' | '+' | '-'

export const calculator = {
  '+': (a: number, b: number) => a + b,
  '-': (a: number, b: number) => a - b,
  X: (a: number, b: number) => a * b,
  '/': (a: number, b: number) => Math.floor(a / b),
}

export const calculate = (expression: string) => {
  const { numbers, operators } = expressionTraversal(expression)

  let result = numbers[0]

  for (let i = 0; i < operators.length; i++) {
    result = calculator[operators[i]](result, numbers[i + 1])
  }

  return result.toString()
}

export const moreThanThreeDigits = (expression: string) => {
  const { numbers } = expressionTraversal(expression)

  return !!numbers.find((number) => number > 999)
}

export const expressionTraversal = (expression: string) => {
  let number = ''
  let numbers = []
  let operators = [] as Operator[]

  for (let i = 0; i < expression.length; i++) {
    if (isNumber(expression[i])) {
      number += expression[i]
    } else {
      numbers.push(parseInt(number))
      number = ''
      operators.push(expression[i] as Operator)
    }
  }

  numbers.push(parseInt(number))

  return { number, numbers, operators }
}

export const isNumber = (item: string) => !isNaN(Number(item))
