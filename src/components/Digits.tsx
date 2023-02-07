import useCalculator from '@/hooks/useCalculator';

interface Props {
	digits: string;
}

export default function Digits({ digits }: Props) {
	const { insertDigits } = useCalculator();

	return (
		<button
			className="digit"
			type="button"
			onClick={() => insertDigits(digits)}
		>{digits}</button>
	);
}