export default function calculate(input: string): string {
    const [num1, operator, num2] = inputSplit(input);
    return calculateNumbers(num1, operator, num2);
}

function inputSplit(input: string): [number, string, number] {
    const tokens = input.split(/([+\-X/])/);
    const num1 = parseInt(tokens[0])
    const num2 = parseInt(tokens[2])

    return [num1, tokens[1], isNaN(num2) ? 0 : num2]
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

