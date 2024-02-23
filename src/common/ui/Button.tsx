import { HTMLAttributes } from "react";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
	onClick: () => void;
	children: React.ReactNode;
}
const Button = ({ children, onClick, ...rest }: ButtonProps) => {
	return (
		<button onClick={onClick} {...rest}>
			{children}
		</button>
	);
};

export default Button;
