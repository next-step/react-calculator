import { ReactNode } from 'react';
import { CalculatorContext } from '@/store/CalculatorContext';
import useCalculator from './hooks/useCalculator';

export default function CalculatorProvider({ children }: { children: ReactNode }) {
	const calculator = useCalculator();

	return (
		<CalculatorContext.Provider
			value={calculator}
		>
			{children}
		</CalculatorContext.Provider>
	);
}