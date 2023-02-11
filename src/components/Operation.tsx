interface Props {
	operator: string;
	onClick: (operation: string) => void;
}

export default function Operation({ operator, onClick }: Props) {
	const handlerOnClick = () => {
		onClick(operator);
	};

	return (
		<button
			className="operation"
			onClick={handlerOnClick}
		>{operator}</button>
	);
}