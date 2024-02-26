import Button from "../../common/ui/Button";
import { NUMBERS } from "../constants";

interface KeypadProps {
	onClick: (key: string) => void;
}

const Keypad = ({ onClick }: KeypadProps) => {
	return (
		<>
			<div className='digits'>
				{[...NUMBERS].map((number) => (
					<Button
						key={number}
						className='digit'
						onClick={() => onClick(number)}
					>
						{number}
					</Button>
				))}
			</div>
		</>
	);
};

export default Keypad;
