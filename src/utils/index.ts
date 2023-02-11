export type OperationType='+' | '-' | 'X' | '/'|'='
export type OperatorType='+' | '-' | 'X' | '/'
const OPERATOR_FUNCTION={
    ADD:function (a:number,b:number):number{
        return Math.floor(a + b);
    },
    SUB:function (a:number,b:number):number{
        return Math.floor(a - b);
    },
    MUL:function (a:number,b:number):number{
        return Math.floor(a * b);
    },
    DIV:function (a:number,b:number):number{
        return Math.floor(a / b);
    },
}

const OPERATOR = {
    ADD: '+',
    SUB: '-',
    MUL: 'X',
    DIV: '/',
    '+': OPERATOR_FUNCTION.ADD,
    '-': OPERATOR_FUNCTION.SUB,
    'X': OPERATOR_FUNCTION.MUL,
    '/': OPERATOR_FUNCTION.DIV

};
const OPERATORS = [OPERATOR.ADD, OPERATOR.SUB, OPERATOR.MUL, OPERATOR.DIV];
export const isOperator = (value: OperationType): boolean => {
    return OPERATORS.includes(value)
};


export const caculateNumber = (
    operator: OperatorType,
    a: number,
    b: number
): string => {
    const result = OPERATOR[operator](a,b);
    console.log(result)
    return !isFinite(result) ? '오류' : result.toString();
};


export const getCurrentDigits=(prevNumber:number,currentNumber:string):string=>{
    return parseInt(prevNumber+currentNumber).toString()
}
