type Props = {
  clickHandler: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  value: string;
  className?: string;
};

function Button({ clickHandler, value, className = undefined }: Props) {
  return (
    <button
      onClick={(e) => clickHandler(e)}
      className={className}
      value={value}
    >
      {value}
    </button>
  );
}

export default Button;
