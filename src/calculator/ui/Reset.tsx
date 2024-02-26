import Button from "../../common/ui/Button";

interface ResetProps {
	onClick: () => void;
}

const Reset = ({ onClick }: ResetProps) => {
	return (
		<div className='modifiers subgrid'>
			<Button onClick={onClick}>AC</Button>
		</div>
	);
};

export default Reset;
