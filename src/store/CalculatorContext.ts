import { createContext } from 'react';

interface ContextType {
    insertDigits: (digit: string) => void;
    insertOperation: (operation: string) => void;
    setAnswer: () => void;
    resetCalculator: () => void;
    state: string;
}

export const CalculatorContext = createContext<ContextType>({
    insertDigits: () => {
        // 계산기에 숫자 추가 (최대 3글자)
    },
    insertOperation: () => {
        // 계산기에 연산자 추가 (최대 1개)
    },
    setAnswer: () => {
        // 누적된 값을 바탕으로 계산 시작
    },
    resetCalculator: () => {
        // 계산기 초기값으로 재설정
    },
    state: '0'
});

