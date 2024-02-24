interface Props {
  onClick: () => void;
}

export default function Modifier({ onClick }: Props) {
  return (
    <div className='modifiers subgrid'>
      <button className='modifier' onClick={onClick}>
        AC
      </button>
    </div>
  );
}
