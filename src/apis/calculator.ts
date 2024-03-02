export default function calculate(input: string): string {
    let tokens = inputSplit(input)

    let secondOperand = 0
    if (tokens.filter(token => typeof token === 'number').length >= 2) {
        secondOperand = tokens[2] as number
    }

    return calculateNumbers(tokens[0] as number, tokens[1] as string, secondOperand)
}

function inputSplit(input: string): (string | number)[] {
    return input.split(/([+\-X/])/).map(token => {
        const num = parseInt(token)
        return !isNaN(num) ? num : token.trim()
    })
}

function calculateNumbers(firstOperand: number, operator: string, secondOperand: number): string {
    switch (operator) {
        case "+":
            return (firstOperand + secondOperand).toString()
        case "-":
            return (firstOperand - secondOperand).toString()
        case "X":
            return (firstOperand * secondOperand).toString()
        case "/":
            return (Math.trunc(firstOperand / secondOperand)).toString()
        default:
            return "0"
    }
}

