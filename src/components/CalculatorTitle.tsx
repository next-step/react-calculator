import { ReactNode } from 'react';

export default function CalculatorTitle({ children }: { children: ReactNode }) {
	return (
		<h1 id="total">{children}</h1>
	);
}