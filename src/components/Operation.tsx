interface Props {
	operator: string;
}

export default function Operation({ operator }: Props) {
	return (
		<button className="operation">{operator}</button>
	);
}