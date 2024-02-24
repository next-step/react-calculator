type ACProps = {
  handleClickAllClear: () => void;
};
const AC = ({ handleClickAllClear }: ACProps) => {
  return (
    <div className='modifiers subgrid'>
      <button className='modifier' onClick={handleClickAllClear}>
        AC
      </button>
    </div>
  );
};

export default AC;
