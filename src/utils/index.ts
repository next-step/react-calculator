// 1. result Input에 따라서 계산하는 함수 (Main)
export const caculateResultInput = (resultInput: string) => {
    const operatorIdx = findOperatorIdx(resultInput);
    const operator = resultInput[operatorIdx];
    const operatorPrevNumber = extractOperatorPrevNumber(resultInput, operatorIdx);
    const operatorNextNumber = extractOperatorNextNumber(resultInput, operatorIdx);

    return caculate(operator, operatorPrevNumber, operatorNextNumber);
};
// 2. result Input의 Operator를 위치를 구하는 함수
const findOperatorIdx = (resultInput: string) => {
    for (let i = 0; i < resultInput.length; i++) {
        if (
            resultInput[i] === '-' ||
            resultInput[i] === 'X' ||
            resultInput[i] === '+' ||
            resultInput[i] === '/'
        ) {
            return i;
        }
    }
    return -1;
};
// 3. Operator이전 숫자를 추출하기 위한 함수
const extractOperatorPrevNumber = (
    resultInput: string,
    operatorIdx: number
): number => {
    return parseInt(resultInput.slice(0, operatorIdx));
};

// 4. Operator이후 숫자를 추출하기 위한 함수
const extractOperatorNextNumber = (
    resultInput: string,
    operatorIdx: number
): number => {
    return parseInt(resultInput.slice(operatorIdx + 1, resultInput.length));
};

// 5. Operator이전 숫자와 이후 숫자를 가지고 연산하는 함수
const caculate = (
    operator: string,
    one: number,
    two: number
): number | string => {
    let calculateresultInput = 0;
    switch (operator) {
        case '+':
            calculateresultInput = Math.floor(one + two);
            break;
        case '-':
            calculateresultInput = Math.floor(one - two);
            break;
        case 'X':
            calculateresultInput = Math.floor(one * two);
            break;
        case '/':
            calculateresultInput = Math.floor(one / two);
            break;
    }
    return !isValidResultInput(calculateresultInput) ? '오류' : calculateresultInput;
};
// 6. calculateresultInput 결과가 Infinity와 Nan인지 유효성을 체크하는 함수
export const isValidResultInput = (calculateresultInput: number): boolean => {
    return !isFinite(calculateresultInput) ? false : true;
};
// 7. = 을 제외한 나머지 연산인지를 체크
export const isValidOperationInput = (input: string): boolean => {
    if (input === '+' || input === '-' || input === 'X' || input === '/') {
        return true;
    }
    return false;
};
