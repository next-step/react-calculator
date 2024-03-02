export default function calculate(input: string): number {
    let tokens = inputSplit(input)

    let secondOperand = 0
    if (tokens.filter(token => typeof token === 'number').length >= 2) {
        secondOperand = tokens[2] as number
    }

    return calculateNumbers(tokens[0] as number, tokens[1] as string, secondOperand)
}

function inputSplit(input: string): (string | number)[] {
    return input.split(/([+\-*/])/).map(token => {
        const num = parseInt(token);
        return !isNaN(num) ? num : token.trim();
    })
}

function calculateNumbers(firstOperand: number, operator: string, secondOperand: number): number {
    switch (operator) {
        case "+":
            return firstOperand + secondOperand
        case "-":
            return firstOperand - secondOperand
        case "*":
            return firstOperand * secondOperand
        case "/":
            return Math.trunc(firstOperand / secondOperand)
        default:
            return 0
    }
}