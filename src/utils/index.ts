export const caculateResultInput = (result: string) => {
    const operatorIdx = findOperatorIdx(result);
    const operator = result[operatorIdx];
    const operatorPrevNumber = extractOperatorPrevNumber(result, operatorIdx);
    const operatorNextNumber = extractOperatorNextNumber(result, operatorIdx);

    return caculate(operator, operatorPrevNumber, operatorNextNumber);
};
const findOperatorIdx = (result: string) => {
    for (let i = 0; i < result.length; i++) {
        if (
            result[i] === '-' ||
            result[i] === 'X' ||
            result[i] === '+' ||
            result[i] === '/'
        ) {
            return i;
        }
    }
    return -1;
};
const extractOperatorPrevNumber = (
    result: string,
    operatorIdx: number
): number => {
    return parseInt(result.slice(0, operatorIdx));
};
const extractOperatorNextNumber = (
    result: string,
    operatorIdx: number
): number => {
    return parseInt(result.slice(operatorIdx + 1, result.length));
};

const caculate = (
    operator: string,
    one: number,
    two: number
): number | string => {
    let res = 0;
    switch (operator) {
        case '+':
            res = Math.floor(one + two);
            break;
        case '-':
            res = Math.floor(one - two);
            break;
        case 'X':
            res = Math.floor(one * two);
            break;
        case '/':
            res = Math.floor(one / two);
            break;
    }
    return !isValidResultInput(res) ? '오류' : res;
};
export const isValidResultInput = (res: number): boolean => {
    return !isFinite(res) ? false : true;
};
export const isValidOperationInput = (input: string): boolean => {
    if (input === '+' || input === '-' || input === 'X' || input === '/') {
        return true;
    }
    return false;
};
