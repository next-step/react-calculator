import { useContext } from 'react';
import { CalculatorContext } from '@/store/CalculatorContext';

export default function useCalculator() {
    const {
        insertDigits,
        insertOperation,
        setAnswer,
        resetCalculator,
        state
    } = useContext(CalculatorContext);

    return {
        insertDigits,
        insertOperation,
        setAnswer,
        resetCalculator,
        state
    };
}