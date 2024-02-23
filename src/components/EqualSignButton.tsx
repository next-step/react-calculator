import fixtures from '../fixtures';

type ResultButtonProps = {
	handleClickEqualSign: () => void;
};

export default function EqualSignButton({
	handleClickEqualSign,
}: ResultButtonProps) {
	const {equalSign} = fixtures;

	return (
		<button className='operation' onClick={handleClickEqualSign}>
			{equalSign}
		</button>
	);
}
