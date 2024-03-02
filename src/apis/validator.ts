export const checkContinuousOperand = (lastChar: string, buttonValue: string): boolean => {
    const operands = ['+', '-', 'X', '/'];
    return operands.includes(lastChar) && operands.includes(buttonValue);
}

export const hasConsecutiveFourDigits = (str: string): boolean => {
    const consecutiveFourDigitsRegex = /\d{4}/
    return consecutiveFourDigitsRegex.test(str)
}