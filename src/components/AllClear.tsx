type AllClearProps = {
  handleClickAllClear: () => void;
};
const AllClear = ({ handleClickAllClear }: AllClearProps) => {
  return (
    <div className='modifiers subgrid'>
      <button className='modifier' onClick={handleClickAllClear}>
        AC
      </button>
    </div>
  );
};

export default AllClear;
