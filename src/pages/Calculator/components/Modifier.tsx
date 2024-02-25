interface Props {
  handleClear: () => void;
}

export default function Modifier({ handleClear }: Props) {
  return (
    <div className='modifiers subgrid'>
      <button className='modifier' onClick={handleClear}>
        AC
      </button>
    </div>
  );
}
