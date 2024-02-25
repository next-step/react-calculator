type AllClearProps = {
  onClickAllClear: () => void;
};
const AllClear = ({ onClickAllClear }: AllClearProps) => {
  return (
    <div className='modifiers subgrid'>
      <button className='modifier' onClick={onClickAllClear}>
        AC
      </button>
    </div>
  );
};

export default AllClear;
