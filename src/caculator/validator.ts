const CONSECUTIVE_NUMBERS_MAX_LENGTH = 3

export const checkContinuousOperand = (lastChar: string, buttonValue: string): boolean => {
    const operands = ['+', '-', 'X', '/'];
    return operands.includes(lastChar) && operands.includes(buttonValue);
}

export const checkInputStartOperand = (lastChar: string, buttonValue: string): boolean => {
    const operands = ['+', '-', 'X', '/'];
    return lastChar === "0" && operands.includes(buttonValue);
}

export const hasConsecutiveLimitDigits = (str: string): boolean => {
    const consecutiveLimitDigitsRegex = new RegExp(`\\d{${CONSECUTIVE_NUMBERS_MAX_LENGTH + 1}}`);
    return consecutiveLimitDigitsRegex.test(str)
}