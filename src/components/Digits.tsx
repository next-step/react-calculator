interface Props {
	digits: string;
	onClick: (digits: string) => void;
}

export default function Digits({ digits, onClick }: Props) {
	const handlerOnClick = () => {
		onClick(digits);
	};

	return (
		<button
			className="digit"
			type="button"
			onClick={handlerOnClick}
		>{digits}</button>
	);
}