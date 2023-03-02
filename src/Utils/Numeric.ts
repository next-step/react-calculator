export const isNumeric = (number: string) => !isNaN(+number);

export const calculate = (expression: string) => {
    const expressionArray: string[] = expression.split('');
    const operationIndex: number = expressionArray.findIndex((ex) => !isNumeric(ex));
    const operation: string = expressionArray[operationIndex];

    const num1: number = getNumber(expressionArray, 0, operationIndex);
    const num2: number = getNumber(expressionArray, operationIndex + 1, expressionArray.length);
    
    const calculateFunc = getCalculateFunc(operation) ?? add;

    return calculateFunc(num1, num2).toString();
}


export const getNumber = (expressionArray: string[], startIndex: number, endIndex: number) => expressionArray.slice(startIndex, endIndex).reduce((acc, cur) =>{
    return acc * 10 + Number(cur);
}, 0)


const getCalculateFunc = (operation: string) => {
    switch(operation) {
        case '+':
            return add;
        case '-':
            return sub;
        case 'X':
            return mul;
        case '/':
            return div;
    }
}


const add = (num1: number, num2: number) => num1 + num2;

const sub = (num1: number, num2: number) => num1 - num2;

const mul = (num1: number, num2: number) => num1 * num2;

const div = (num1: number, num2: number) => Math.floor(num1 / num2);